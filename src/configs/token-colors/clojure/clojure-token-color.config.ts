import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class ClojureTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'Closure Constant Keyword',
        scope: 'constant.keyword.clojure',
        settings: {
          foreground: this.theme.closureConstantKeyword,
        },
      },
    ];
  }
} 