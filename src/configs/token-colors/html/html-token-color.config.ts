import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class HTMLTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'HTML Tag names',
        scope: [
          'entity.name.tag',
          'meta.tag.other.html',
          'meta.tag.other.js',
          'meta.tag.other.tsx',
          'entity.name.tag.tsx',
          'entity.name.tag.js',
          'entity.name.tag',
          'meta.tag.js',
          'meta.tag.tsx',
          'meta.tag.html',
        ],
        settings: {
          foreground: this.theme.htmlTagNames,
        },
      },
      {
        name: 'HTML Punctuation Definition Tag',
        scope: 'punctuation.definition.tag.html',
        settings: {
          foreground: this.theme.htmlPunctuationDefinitionTag,
        },
      },
      {
        name: 'HTML Doctype',
        scope: 'meta.tag.sgml.doctype.html',
        settings: {
          foreground: this.theme.htmlDoctype,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'ID Attribute Name in HTML',
        scope: 'entity.other.attribute-name.id.html',
        settings: {
          foreground: this.theme.idAttributeNameHtml,
        },
      },
    ];
  }
} 