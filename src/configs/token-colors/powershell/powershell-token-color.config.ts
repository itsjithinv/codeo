import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class PowershellTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'Powershell Variables',
        scope: ['variable.other.readwrite.powershell'],
        settings: {
          foreground: this.theme.powershellVariables,
        },
      },
      {
        name: 'Powershell Function',
        scope: ['support.function.powershell'],
        settings: {
          foreground: this.theme.powershellFunction,
        },
      },
    ];
  }
}
