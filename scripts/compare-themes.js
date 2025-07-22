const fs = require('fs');
const path = require('path');

/**
 * Recursively compares two objects and returns newly added values in newObj
 * @param {Object} newObj - The new theme object
 * @param {Object} oldObj - The old theme object
 * @param {string} path - Current path in the object
 * @returns {Object} - Object containing newly added keys and values
 */
function compareObjects(newObj, oldObj, currentPath = '') {
  const result = {
    newlyAdded: [],
    // missing: [],
    // mismatched: []
  };

  // Special handling for tokenColors array
  if (currentPath === 'tokenColors' && Array.isArray(newObj) && Array.isArray(oldObj)) {
    return compareTokenColorsArray(newObj, oldObj, currentPath);
  }

  // Check for newly added keys in newObj (that don't exist in oldObj)
  for (const key in newObj) {
    const newPath = currentPath ? `${currentPath}.${key}` : key;
    
    if (!(key in oldObj)) {
      // This is a newly added key in the new theme
      result.newlyAdded.push({
        path: newPath,
        value: newObj[key],
        type: 'newly_added'
      });
    } else if (typeof newObj[key] === 'object' && newObj[key] !== null && 
               typeof oldObj[key] === 'object' && oldObj[key] !== null) {
      // Recursively compare nested objects
      const nestedResult = compareObjects(newObj[key], oldObj[key], newPath);
      result.newlyAdded.push(...nestedResult.newlyAdded);
      // result.missing.push(...nestedResult.missing);
      // result.mismatched.push(...nestedResult.mismatched);
    }
    // Comment out value mismatch checking for now
    // else if (newObj[key] !== oldObj[key]) {
    //   // Values don't match
    //   result.mismatched.push({
    //     path: newPath,
    //     newValue: newObj[key],
    //     oldValue: oldObj[key],
    //     type: 'value_mismatch'
    //   });
    // }
  }

  // Comment out checking for keys that exist in oldObj but not in newObj
  // for (const key in oldObj) {
  //   const oldPath = currentPath ? `${currentPath}.${key}` : key;
  //   
  //   if (!(key in newObj)) {
  //     result.missing.push({
  //       path: oldPath,
  //       value: oldObj[key],
  //       type: 'missing_in_new'
  //     });
  //   }
  // }

  return result;
}

/**
 * Special comparison function for tokenColors array that uses 'name' property
 * @param {Array} newArray - The new tokenColors array
 * @param {Array} oldArray - The old tokenColors array
 * @param {string} currentPath - Current path in the object
 * @returns {Object} - Object containing newly added token colors
 */
function compareTokenColorsArray(newArray, oldArray, currentPath) {
  const result = {
    newlyAdded: [],
    // missing: [],
    // mismatched: []
  };

  // Create maps for easy lookup by name
  const newMap = new Map();
  const oldMap = new Map();

  newArray.forEach((item, index) => {
    if (item.name) {
      newMap.set(item.name, { item, index });
    }
  });

  oldArray.forEach((item, index) => {
    if (item.name) {
      oldMap.set(item.name, { item, index });
    }
  });

  // Check for newly added items in new array (that don't exist in old array)
  for (const [name, { item: newItem }] of newMap) {
    const newPath = `${currentPath}["${name}"]`;
    
    if (!oldMap.has(name)) {
      // This is a newly added token color in the new theme
      result.newlyAdded.push({
        path: newPath,
        value: newItem,
        type: 'newly_added_token_color'
      });
    } else {
      // Compare items with same name for nested differences
      const { item: oldItem } = oldMap.get(name);
      const nestedResult = compareObjects(newItem, oldItem, newPath);
      result.newlyAdded.push(...nestedResult.newlyAdded);
      // result.missing.push(...nestedResult.missing);
      // result.mismatched.push(...nestedResult.mismatched);
    }
  }

  // Comment out checking for items missing in new array
  // for (const [name, { item: oldItem }] of oldMap) {
  //   const oldPath = `${currentPath}["${name}"]`;
  //   
  //   if (!newMap.has(name)) {
  //     result.missing.push({
  //       path: oldPath,
  //       value: oldItem,
  //       type: 'missing_in_new'
  //     });
  //   }
  // }

  return result;
}

/**
 * Main comparison function
 */
function compareThemes() {
  try {
    // Read the theme files
    const newThemePath = path.join(__dirname, '..', 'themes', 'codeo-color-theme.json');
    const oldThemePath = path.join(__dirname, '..', 'old-theme', 'codeo-color-theme.json');
    
    const newTheme = JSON.parse(fs.readFileSync(newThemePath, 'utf8'));
    const oldTheme = JSON.parse(fs.readFileSync(oldThemePath, 'utf8'));

    // Compare the themes
    const differences = compareObjects(newTheme, oldTheme);

    // Create output object
    const output = {
      comparison: {
        newThemeFile: 'themes/codeo-color-theme.json',
        oldThemeFile: 'old-theme/codeo-color-theme.json',
        timestamp: new Date().toISOString(),
        summary: {
          totalNewlyAdded: differences.newlyAdded.length,
          // totalMissing: differences.missing.length,
          // totalMismatched: differences.mismatched.length
        }
      },
      differences: {
        newlyAdded: differences.newlyAdded,
        // missing: differences.missing,
        // mismatched: differences.mismatched
      }
    };

    // Only write to file if there are newly added items
    if (differences.newlyAdded.length > 0) {
      const outputPath = path.join(__dirname, 'theme-comparison-results.json');
      fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
      console.log(`Comparison completed. Found ${differences.newlyAdded.length} newly added items in the new theme.`);
      console.log(`Results written to: ${outputPath}`);
    } else {
      console.log('No newly added items found in the new theme compared to the old theme.');
    }

    return output;

  } catch (error) {
    console.error('Error comparing themes:', error.message);
    process.exit(1);
  }
}

// Run the comparison if this script is executed directly
if (require.main === module) {
  compareThemes();
}

module.exports = { compareThemes, compareObjects }; 