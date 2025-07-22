import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class CssTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'CSS Keyword Other Unit',
        scope: 'keyword.other.unit.css',
        settings: {
          foreground: this.theme.cssKeywordOtherUnit,
        },
      },
      {
        name: 'Attribute Name for CSS',
        scope: [
          'meta.attribute-selector.css entity.other.attribute-name.attribute',
          'variable.other.readwrite.js',
        ],
        settings: {
          foreground: this.theme.attributeNameForCss,
        },
      },
    ];
  }
}
