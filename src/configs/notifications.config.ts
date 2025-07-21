import { AbstractBaseConfig } from './abstract-base.config';

export class NotificationsConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'notifications.background': this.theme.notificationsBackground,
      'notifications.border': this.theme.notificationsBorder,
      'notificationCenter.border': this.theme.notificationCenterBorder,
      'notificationToast.border': this.theme.notificationToastBorder,
      'notifications.foreground': this.theme.notificationsForeground,
      'notificationLink.foreground': this.theme.notificationLinkForeground,
    };
  }
}
