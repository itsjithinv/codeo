import { AbstractBaseConfig } from './abstract-base.config';

export class TitleBarConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'titleBar.activeBackground': this.theme.titleBarActiveBackground,
      'titleBar.activeForeground': this.theme.titleBarActiveForeground,
      'titleBar.inactiveBackground': this.theme.titleBarInactiveBackground,
      'titleBar.inactiveForeground': this.theme.titleBarInactiveForeground,
    };
  }
}
