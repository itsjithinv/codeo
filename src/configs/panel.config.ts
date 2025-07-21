import { AbstractBaseConfig } from './abstract-base.config';

export class PanelConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'panel.background': this.theme.panelBackground,
      'panel.border': this.theme.panelBorder,
      'panelTitle.activeBorder': this.theme.panelTitleActiveBorder,
      'panelTitle.activeForeground': this.theme.panelTitleActiveForeground,
      'panelTitle.inactiveForeground': this.theme.panelTitleInactiveForeground,
    };
  }
}
