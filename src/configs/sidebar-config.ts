import { AbstractBaseConfig } from './abstract-base.config';

export class SidebarConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
        'sideBar.background': this.theme.sideBarBackground,
        'sideBar.foreground': this.theme.sideBarForeground,
        'sideBar.border': this.theme.sideBarBorder,
        'sideBarTitle.foreground': this.theme.sideBarTitleForeground,
        'sideBarSectionHeader.background': this.theme.sideBarSectionHeaderBackground,
        'sideBarSectionHeader.foreground': this.theme.sideBarSectionHeaderForeground,
    }
  }
}
