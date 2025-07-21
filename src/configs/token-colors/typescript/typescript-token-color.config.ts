import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class TypeScriptTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'TypeScript Variables and Object Properties',
        scope: [
          'variable.other.readwrite.alias.ts',
          'variable.other.readwrite.alias.tsx',
          'variable.other.readwrite.ts',
          'variable.other.readwrite.tsx',
          'variable.other.object.ts',
          'variable.other.object.tsx',
          'variable.object.property.ts',
          'variable.object.property.tsx',
          'variable.other.ts',
          'variable.other.tsx',
          'variable.tsx',
          'variable.ts',
        ],
        settings: {
          foreground: this.theme.typescriptVariables,
        },
      },
      {
        name: 'TypeScript Entity Name Types',
        scope: [
          'entity.name.type.ts',
          'entity.name.type.tsx',
        ],
        settings: {
          foreground: this.theme.typescriptEntityNameTypes,
        },
      },
      {
        name: 'TypeScript Node Classes',
        scope: [
          'support.class.node.ts',
          'support.class.node.tsx',
        ],
        settings: {
          foreground: this.theme.typescriptNodeClasses,
        },
      },
      {
        name: 'TypeScript Entity Name Types as Parameters',
        scope: [
          'meta.type.parameters.ts entity.name.type',
          'meta.type.parameters.tsx entity.name.type',
        ],
        settings: {
          foreground: this.theme.typescriptEntityNameTypesAsParameters,
        },
      },
      {
        name: 'TypeScript Import/Export Punctuations',
        scope: [
          'meta.import.ts punctuation.definition.block',
          'meta.import.tsx punctuation.definition.block',
          'meta.export.ts punctuation.definition.block',
          'meta.export.tsx punctuation.definition.block',
        ],
        settings: {
          foreground: this.theme.typescriptImportExportPunctuations,
        },
      },
      {
        name: 'TypeScript Punctuation Decorators',
        scope: [
          'meta.decorator punctuation.decorator.ts',
          'meta.decorator punctuation.decorator.tsx',
        ],
        settings: {
          foreground: this.theme.typescriptPunctuationDecorators,
        },
      },
      {
        name: 'TypeScript Punctuation Decorators (JSX)',
        scope: 'meta.tag.js meta.jsx.children.tsx',
        settings: {
          foreground: this.theme.typescriptPunctuationDecoratorsJsx,
        },
      },
      {
        name: 'TypeScript Classes',
        scope: 'meta.class entity.name.type.class.tsx',
        settings: {
          foreground: this.theme.typescriptClasses,
        },
      },
      {
        name: 'TypeScript Entity Name Type',
        scope: [
          'entity.name.type.tsx',
          'entity.name.type.module.tsx',
        ],
        settings: {
          foreground: this.theme.typescriptEntityNameType,
        },
      },
      {
        name: 'TypeScript Class Variable Keyword',
        scope: [
          'meta.class.ts meta.var.expr.ts storage.type.ts',
          'meta.class.tsx meta.var.expr.tsx storage.type.tsx',
        ],
        settings: {
          foreground: this.theme.typescriptClassVariableKeyword,
        },
      },
      {
        name: 'TypeScript Method Declaration',
        scope: [
          'meta.method.declaration storage.type.ts',
          'meta.method.declaration storage.type.tsx',
        ],
        settings: {
          foreground: this.theme.typescriptMethodDeclaration,
        },
      },
    ];
  }
}
