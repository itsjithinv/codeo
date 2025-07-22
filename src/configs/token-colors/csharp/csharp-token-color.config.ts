import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class CSharpTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'C# Readwrite Variables',
        scope: 'variable.other.readwrite.cs',
        settings: {
          foreground: this.theme.csharpReadwriteVariables,
        },
      },
      {
        name: 'C# Classes & Storage types',
        scope: [
          'entity.name.type.class.cs',
          'storage.type.cs',
        ],
        settings: {
          foreground: this.theme.csharpClassesAndStorageTypes,
        },
      },
      {
        name: 'C# Namespaces',
        scope: 'entity.name.type.namespace.cs',
        settings: {
          foreground: this.theme.csharpNamespace,
        },
      },
      {
        name: 'C# Unquoted String Zone',
        scope: 'string.unquoted.preprocessor.message.cs',
        settings: {
          foreground: this.theme.csharpUnquotedStringZone,
        },
      },
      {
        name: 'C# Region',
        scope: [
          'punctuation.separator.hash.cs',
          'keyword.preprocessor.region.cs',
          'keyword.preprocessor.endregion.cs',
        ],
        settings: {
          foreground: this.theme.csharpRegion,
          fontStyle: 'bold',
        },
      },
      {
        name: 'C# Other Variables',
        scope: 'variable.other.object.cs',
        settings: {
          foreground: this.theme.csharpOtherVariables,
        },
      },
      {
        name: 'C# Enum',
        scope: 'entity.name.type.enum.cs',
        settings: {
          foreground: this.theme.csharpEnum,
        },
      },
    ];
  }
} 