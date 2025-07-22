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
      'panel.border': this.theme.panelBorder,
      'panelTitle.activeBorder': this.theme.panelTitleActiveBorder,
      'panelTitle.activeForeground': this.theme.panelTitleActiveForeground,
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
      'editor.findRangeHighlightBackground': this.theme.editorFindRangeHighlightBackground,
      'editor.lineHighlightBorder': this.theme.editorLineHighlightBorder,
      'editorLink.activeForeground': this.theme.editorLinkActiveForeground,
      'editorWhitespace.foreground': this.theme.editorWhitespaceForeground,
      'editorError.border': this.theme.editorErrorBorder,
      'editorWarning.border': this.theme.editorWarningBorder,
      'merge.currentContentBackground': this.theme.mergeCurrentContentBackground,
      'merge.incomingContentBackground': this.theme.mergeIncomingContentBackground,
      'merge.border': this.theme.mergeBorder,
      'statusBar.debuggingForeground': this.theme.statusBarDebuggingForeground,
      'statusBar.noFolderForeground': this.theme.statusBarNoFolderForeground,
      'titleBar.inactiveForeground': this.theme.titleBarInactiveForeground,
      'welcomePage.background': this.theme.welcomePageBackground,
      'button.background': this.theme.buttonBackground,
      'button.foreground': this.theme.buttonForeground,
      'button.hoverBackground': this.theme.buttonHoverBackground,
      'dropdown.background': this.theme.dropdownBackground,
      'dropdown.border': this.theme.dropdownBorder,
      'dropdown.foreground': this.theme.dropdownForeground,
    };
  }
}
