import { AbstractBaseConfig } from './abstract-base.config';

export class PeekViewConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'peekView.border': this.theme.peekViewBorder,
      'peekViewEditor.background': this.theme.peekViewEditorBackground,
      'peekViewEditor.matchHighlightBackground':
        this.theme.peekViewEditorMatchHighlightBackground,
      'peekViewResult.background': this.theme.peekViewResultBackground,
      'peekViewResult.fileForeground': this.theme.peekViewResultFileForeground,
      'peekViewResult.lineForeground': this.theme.peekViewResultLineForeground,
      'peekViewResult.matchHighlightBackground':
        this.theme.peekViewResultMatchHighlightBackground,
      'peekViewResult.selectionBackground':
        this.theme.peekViewResultSelectionBackground,
      'peekViewResult.selectionForeground':
        this.theme.peekViewResultSelectionForeground,
      'peekViewTitle.background': this.theme.peekViewTitleBackground,
      'peekViewTitleDescription.foreground':
        this.theme.peekViewTitleDescriptionForeground,
      'peekViewTitleLabel.foreground': this.theme.peekViewTitleLabelForeground,
    };
  }
}
