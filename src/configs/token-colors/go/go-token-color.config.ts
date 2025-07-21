import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class GoTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'Go Function Calls',
        scope: 'source.go meta.function-call.go',
        settings: {
          foreground: this.theme.goFunctionCalls,
        },
      },
      {
        name: 'Go Keywords',
        scope: [
          'source.go keyword.package.go',
          'source.go keyword.import.go',
          'source.go keyword.function.go',
          'source.go keyword.type.go',
          'source.go keyword.struct.go',
          'source.go keyword.interface.go',
          'source.go keyword.const.go',
          'source.go keyword.var.go',
          'source.go keyword.map.go',
          'source.go keyword.channel.go',
          'source.go keyword.control.go',
        ],
        settings: {
          foreground: this.theme.goKeywords,
        },
      },
      {
        name: 'Go Constants',
        scope: [
          'source.go constant.language.go',
          'source.go constant.other.placeholder.go',
        ],
        settings: {
          foreground: this.theme.goConstants,
        },
      },
    ];
  }
} 