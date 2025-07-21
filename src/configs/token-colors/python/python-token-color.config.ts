import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class PythonTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'Language Constants in Python',
        scope: 'constant.language.python',
        settings: {
          foreground: this.theme.pythonLanguageConstant,
        },
      },
      {
        name: 'Python Function Parameter and Arguments',
        scope: [
          'variable.parameter.function.python',
          'meta.function-call.arguments.python',
        ],
        settings: {
          foreground: this.theme.pythonFunctionParameter,
        },
      },
      {
        name: 'Python Function Call',
        scope: [
          'meta.function-call.python',
          'meta.function-call.generic.python',
        ],
        settings: {
          foreground: this.theme.pythonFunctionCall,
        },
      },
      {
        name: 'Punctuations in Python',
        scope: 'punctuation.python',
        settings: {
          foreground: this.theme.pythonPunctuation,
        },
      },
      {
        name: 'Decorator Functions in Python',
        scope: 'entity.name.function.decorator.python',
        settings: {
          foreground: this.theme.pythonDecoratorFunction,
        },
      },
      {
        name: 'Python Language Variable',
        scope: 'source.python variable.language.special',
        settings: {
          foreground: this.theme.pythonLanguageVariable,
        },
      },
      {
        name: 'Python import control keyword',
        scope: 'keyword.control',
        settings: {
          foreground: this.theme.pythonImportControlKeyword,
          fontStyle: 'italic',
        },
      },
    ];
  }
}
