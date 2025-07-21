import { AbstractBaseConfig } from './abstract-base.config';

export class StatusbarConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'statusBar.background': this.theme.statusBarBackground,
      'statusBar.foreground': this.theme.statusBarForeground,
      'statusBar.border': this.theme.statusBarBorder,
      'statusBar.debuggingBackground': this.theme.statusBarDebuggingBackground,
      'statusBar.debuggingForeground': this.theme.statusBarDebuggingForeground,
      'statusBar.debuggingBorder': this.theme.statusBarDebuggingBorder,
      'statusBar.noFolderForeground': this.theme.statusBarNoFolderForeground,
      'statusBar.noFolderBackground': this.theme.statusBarNoFolderBackground,
      'statusBar.noFolderBorder': this.theme.statusBarNoFolderBorder,
      'statusBarItem.activeBackground':
        this.theme.statusBarItemActiveBackground,
      'statusBarItem.hoverBackground': this.theme.statusBarItemHoverBackground,
      'statusBarItem.prominentBackground':
        this.theme.statusBarItemProminentBackground,
      'statusBarItem.prominentHoverBackground':
        this.theme.statusBarItemProminentHoverBackground,
    };
  }
}
