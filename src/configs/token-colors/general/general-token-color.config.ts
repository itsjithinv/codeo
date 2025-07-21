import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class GeneralTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'Comment',
        scope: [
          'comment',
          'punctuation.definition.comment',
        ],
        settings: {
          foreground: this.theme.comment,
          fontStyle: 'italic',
        },
      },
      {
        name: 'String',
        scope: 'string',
        settings: {
          foreground: this.theme.string,
        },
      },
      {
        name: 'Number',
        scope: [
          'constant.numeric',
          'constant.character.numeric',
        ],
        settings: {
          foreground: this.theme.number,
        },
      },
      {
        name: 'Keyword',
        scope: [
          'punctuation.accessor',
          'keyword',
        ],
        settings: {
          foreground: this.theme.keyword,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Variable',
        scope: 'variable',
        settings: {
          foreground: this.theme.variable,
        },
      },
      {
        name: 'Constant',
        scope: [
          'constant.language',
          'punctuation.definition.constant',
          'variable.other.constant',
        ],
        settings: {
          foreground: this.theme.builtInConstant,
        },
      },
      {
        name: 'Function name',
        scope: 'entity.name.function',
        settings: {
          foreground: this.theme.functionName,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Class name',
        scope: [
          'entity.name.class',
          'meta.class entity.name.type.class',
        ],
        settings: {
          foreground: this.theme.className,
        },
      },
      {
        name: 'Boolean',
        scope: 'constant.language.boolean',
        settings: {
          foreground: this.theme.booleanTrue, // or booleanFalse, depending on context
        },
      },
      {
        name: 'Null',
        scope: 'constant.language.null',
        settings: {
          foreground: this.theme.null,
        },
      },
      {
        name: 'Object',
        scope: 'object',
        settings: {
          foreground: this.theme.object,
        },
      },
      {
        name: 'Punctuation',
        scope: [
          'punctuation',
          'meta.brace',
          'meta.delimiter.period',
        ],
        settings: {
          foreground: this.theme.metaBrace,
        },
      },
    ];
  }
}
