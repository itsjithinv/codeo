import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class ElixirTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'Elixir Classes',
        scope: [
          'source.elixir support.type.elixir',
          'source.elixir meta.module.elixir entity.name.class.elixir',
        ],
        settings: {
          foreground: this.theme.elixirClasses,
        },
      },
      {
        name: 'Elixir Functions',
        scope: 'source.elixir entity.name.function',
        settings: {
          foreground: this.theme.elixirFunctions,
        },
      },
      {
        name: 'Elixir Constants',
        scope: [
          'source.elixir constant.other.symbol.elixir',
          'source.elixir constant.other.keywords.elixir',
        ],
        settings: {
          foreground: this.theme.elixirConstants,
        },
      },
      {
        name: 'Elixir String Punctuations',
        scope: 'source.elixir punctuation.definition.string',
        settings: {
          foreground: this.theme.elixirStringPunctuations,
        },
      },
      {
        name: 'Elixir',
        scope: [
          'source.elixir variable.other.readwrite.module.elixir',
          'source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir',
        ],
        settings: {
          foreground: this.theme.elixir,
        },
      },
      {
        name: 'Elixir Binary Punctuations',
        scope: 'source.elixir .punctuation.binary.elixir',
        settings: {
          foreground: this.theme.elixirBinaryPunctuations,
          fontStyle: 'italic',
        },
      },
    ];
  }
} 