import { AbstractBaseConfig } from './abstract-base.config';

export class ActivityBarConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'activityBar.background': this.theme.activityBarBackground,
      'activityBar.foreground': this.theme.activityBarForeground,
      'activityBar.border': this.theme.activityBarBorder,
      'activityBarBadge.background': this.theme.activityBarBadgeBackground,
      'activityBarBadge.foreground': this.theme.activityBarBadgeForeground,
    };
  }
}
