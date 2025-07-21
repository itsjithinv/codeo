import { AbstractBaseConfig } from './abstract-base.config';

export class BreadCrumbConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'breadcrumb.foreground': this.theme.breadcrumbForeground,
      'breadcrumb.focusForeground': this.theme.breadcrumbFocusForeground,
      'breadcrumb.activeSelectionForeground':
        this.theme.breadcrumbActiveSelectionForeground,
      'breadcrumbPicker.background': this.theme.breadcrumbPickerBackground,
    };
  }
}
