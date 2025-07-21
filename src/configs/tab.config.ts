import { AbstractBaseConfig } from './abstract-base.config';

export class TabConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'tab.activeBackground': this.theme.tabActiveBackground,
      'tab.activeForeground': this.theme.tabActiveForeground,
      'tab.border': this.theme.tabBorder,
      'tab.activeBorder': this.theme.tabActiveBorder,
      'tab.unfocusedActiveBorder': this.theme.tabUnfocusedActiveBorder,
      'tab.inactiveBackground': this.theme.tabInactiveBackground,
      'tab.inactiveForeground': this.theme.tabInactiveForeground,
      'tab.unfocusedActiveForeground': this.theme.tabUnfocusedActiveForeground,
      'tab.unfocusedInactiveForeground':
        this.theme.tabUnfocusedInactiveForeground,
    };
  }
}
