import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class CppTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'C++ Functions',
        scope: [
          'entity.name.function.preprocessor.cpp',
          'entity.scope.name.cpp',
        ],
        settings: {
          foreground: this.theme.cppFunctions,
        },
      },
      {
        name: 'C++ Meta Namespace',
        scope: ['meta.namespace-block.cpp'],
        settings: {
          foreground: this.theme.cppMetaNamespace,
        },
      },
      {
        name: 'C++ Language Primitive Storage',
        scope: ['storage.type.language.primitive.cpp'],
        settings: {
          foreground: this.theme.cppLanguagePrimitiveStorage,
        },
      },
      {
        name: 'C++ Preprocessor Macro',
        scope: ['meta.preprocessor.macro.cpp'],
        settings: {
          foreground: this.theme.cppPreprocessorMacro,
        },
      },
      {
        name: 'C++ Variable Parameter',
        scope: ['variable.parameter'],
        settings: {
          foreground: this.theme.cppVariableParameter,
        },
      },
    ];
  }
} 