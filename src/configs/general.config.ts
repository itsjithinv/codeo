import { AbstractBaseConfig } from './abstract-base.config';

export class GeneralConfig extends AbstractBaseConfig {
  public generateConfig(): object {
    return {
      contrastBorder: this.theme.contrastBorder,
      focusBorder: this.theme.focusBorder,
      foreground: this.theme.foreground,
      'widget.shadow': this.theme.widgetShadow,
      'selection.background': this.theme.selectionBackground,
      errorForeground: this.theme.errorForeground,
      'badge.background': this.theme.badgeBackground,
      'badge.foreground': this.theme.badgeForeground,
      'progressBar.background': this.theme.progressBarBackground,
      'debugExceptionWidget.background':
        this.theme.debugExceptionWidgetBackground,
      'debugExceptionWidget.border': this.theme.debugExceptionWidgetBorder,
      'panel.background': this.theme.background,
      'panel.border': this.theme.border,
      'panelTitle.activeBorder': this.theme.activeBorder,
      'panelTitle.activeForeground': this.theme.activeForeground,
      'panelTitle.inactiveForeground': this.theme.foreground,
      'extensionButton.prominentForeground':
        this.theme.extensionButtonProminentForeground,
      'extensionButton.prominentBackground':
        this.theme.extensionButtonProminentBackground,
      'extensionButton.prominentHoverBackground':
        this.theme.extensionButtonProminentHoverBackground,
      'pickerGroup.foreground': this.theme.pickerGroupForeground,
      'pickerGroup.border': this.theme.pickerGroupBorder,
      'textCodeBlock.background': this.theme.textCodeBlockBackground,
      'debugToolBar.background': this.theme.debugToolBarBackground,
      'walkThrough.embeddedEditorBackground':
        this.theme.walkThroughEmbeddedEditorBackground,
      'meta.objectliteral.js': this.theme.metaObjectLiteralJs,
      'welcomePage.background': this.theme.welcomePageBackground,
    };
  }
}
