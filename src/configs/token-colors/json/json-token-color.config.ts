import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class JSONTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'JSON Property Names',
        scope: 'support.type.property-name.json',
        settings: {
          foreground: this.theme.jsonPropertyNames,
        },
      },
      {
        name: 'JSON Support Constants',
        scope: 'support.constant.json',
        settings: {
          foreground: this.theme.jsonSupportConstants,
        },
      },
      {
        name: 'JSON Property values (string)',
        scope: 'meta.structure.dictionary.value.json string.quoted.double',
        settings: {
          foreground: this.theme.jsonPropertyValuesString,
        },
      },
      {
        name: 'Strings in JSON values',
        scope: 'string.quoted.double.json punctuation.definition.string.json',
        settings: {
          foreground: this.theme.jsonStringsInValues,
        },
      },
      {
        name: 'Specific JSON Property values like null',
        scope: 'meta.structure.dictionary.json meta.structure.dictionary.value constant.language',
        settings: {
          foreground: this.theme.jsonPropertyValuesNull,
        },
      },
    ];
  }
} 