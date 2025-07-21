import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class DartTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'Dart String',
        scope: [
          'string.interpolated.single.dart',
          'string.interpolated.double.dart',
        ],
        settings: {
          foreground: this.theme.dartString,
        },
      },
      {
        name: 'Dart Class',
        scope: 'support.class.dart',
        settings: {
          foreground: this.theme.dartClass,
        },
      },
    ];
  }
} 