import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class JavaScriptTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'JavaScript Classes',
        scope: 'meta.class entity.name.type.class.js',
        settings: {
          foreground: this.theme.javascriptClasses,
        },
      },
      {
        name: 'JavaScript Method Declaration',
        scope: 'meta.method.declaration storage.type.js',
        settings: {
          foreground: this.theme.javascriptMethodDeclaration,
        },
      },
      {
        name: 'JavaScript Terminator',
        scope: 'terminator.js',
        settings: {
          foreground: this.theme.javascriptTerminator,
        },
      },
      {
        name: 'JavaScript Meta Punctuation Definition',
        scope: 'meta.js punctuation.definition.js',
        settings: {
          foreground: this.theme.javascriptMetaPunctuationDefinition,
        },
      },
      {
        name: 'JavaScript module imports and exports',
        scope: [
          'variable.other.meta.import.js',
          'meta.import.js variable.other',
          'variable.other.meta.export.js',
          'meta.export.js variable.other',
        ],
        settings: {
          foreground: this.theme.jsModuleImportsExports,
        },
      },
      {
        name: 'JavaScript Variable Parameter Function',
        scope: 'variable.parameter.function.js',
        settings: {
          foreground: this.theme.jsVariableParameterFunction,
        },
      },
      {
        name: 'JavaScript[React] Variable Other Object',
        scope: [
          'variable.other.object.js',
          'variable.other.object.jsx',
          'variable.object.property.js',
          'variable.object.property.jsx',
        ],
        settings: {
          foreground: this.theme.jsReactVariableOtherObject,
        },
      },
      {
        name: 'JavaScript Variables',
        scope: ['variable.js', 'variable.other.js'],
        settings: {
          foreground: this.theme.jsVariables,
        },
      },
      {
        name: 'JavaScript Entity Name Type',
        scope: ['entity.name.type.js', 'entity.name.type.module.js'],
        settings: {
          foreground: this.theme.jsEntityNameType,
        },
      },
      {
        name: 'JavaScript Support Classes',
        scope: 'support.class.js',
        settings: {
          foreground: this.theme.jsSupportClasses,
        },
      },
      {
        name: 'JavaScript Other Variable',
        scope: 'variable.other.object.js',
        settings: {
          foreground: this.theme.jsOtherVariable,
        },
      },
      {
        name: 'JavaScript Variable Other ReadWrite',
        scope: ['variable.other.readwrite.js', 'variable.parameter'],
        settings: {
          foreground: this.theme.javascriptVariableOtherReadWrite,
        },
      },
    ];
  }
}
