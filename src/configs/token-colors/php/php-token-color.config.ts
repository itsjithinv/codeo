import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class PHPTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'PHP Variables',
        scope: ['variable.other.php', 'variable.other.property.php'],
        settings: {
          foreground: this.theme.phpVariables,
        },
      },
      {
        name: 'Support Classes in PHP',
        scope: 'support.class.php',
        settings: {
          foreground: this.theme.phpSupportClass,
        },
      },
      {
        name: 'Punctuations in PHP function calls',
        scope: 'meta.function-call.php punctuation',
        settings: {
          foreground: this.theme.phpFunctionCallPunctuation,
        },
      },
      {
        name: 'PHP Global Variables',
        scope: 'variable.other.global.php',
        settings: {
          foreground: this.theme.phpGlobalVariables,
        },
      },
      {
        name: 'Declaration Punctuation in PHP Global Variables',
        scope: 'variable.other.global.php punctuation.definition.variable',
        settings: {
          foreground: this.theme.phpGlobalVariablePunctuation,
        },
      },
      {
        name: 'Entity Names in PHP Code Documentations',
        scope: ['entity.name.type.instance.phpdoc'],
        settings: {
          foreground: this.theme.entityNamesInCodeDocumentations,
        },
      },
      {
        name: 'Other Variables in PHP Code Documentations',
        scope: ['variable.other.phpdoc'],
        settings: {
          foreground: this.theme.otherVariablesInCodeDocumentations,
        },
      },
    ];
  }
}
