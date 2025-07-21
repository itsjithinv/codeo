import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class RubyTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'Ruby Variables',
        scope: ['variable.other.ruby'],
        settings: {
          foreground: this.theme.rubyVariables,
        },
      },
      {
        name: 'Ruby Class',
        scope: ['entity.name.type.class.ruby'],
        settings: {
          foreground: this.theme.rubyClass,
        },
      },
      {
        name: 'Ruby Hashkeys',
        scope: 'constant.language.symbol.hashkey.ruby',
        settings: {
          foreground: this.theme.rubyHashkeys,
        },
      },
      {
        name: 'Ruby Symbols',
        scope: 'constant.language.symbol.ruby',
        settings: {
          foreground: this.theme.rubySymbols,
        },
      },
    ];
  }
} 