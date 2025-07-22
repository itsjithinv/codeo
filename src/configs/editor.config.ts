import { AbstractBaseConfig } from './abstract-base.config';

export class EditorConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'editor.background': this.theme.editorBackground,
      'editor.foreground': this.theme.editorForeground,
      'editorLineNumber.foreground': this.theme.editorLineNumberForeground,
      'editorLineNumber.activeForeground':
        this.theme.editorLineNumberActiveForeground,
      'editorCursor.foreground': this.theme.editorCursorForeground,
      'editor.selectionBackground': this.theme.editorSelectionBackground,
      'editor.selectionHighlightBackground':
        this.theme.editorSelectionHighlightBackground,
      'editor.inactiveSelectionBackground':
        this.theme.editorInactiveSelectionBackground,
      'editor.wordHighlightBackground':
        this.theme.editorWordHighlightBackground,
      'editor.wordHighlightStrongBackground':
        this.theme.editorWordHighlightStrongBackground,
      'editor.findMatchBackground': this.theme.editorFindMatchBackground,
      'editor.findMatchHighlightBackground':
        this.theme.editorFindMatchHighlightBackground,
      'editor.findRangeHighlightBackground':
        this.theme.editorFindRangeHighlightBackground,
      'editor.hoverHighlightBackground':
        this.theme.editorHoverHighlightBackground,
      'editor.lineHighlightBackground':
        this.theme.editorLineHighlightBackground,
      'editor.lineHighlightBorder': this.theme.editorLineHighlightBorder,
      'editorLink.activeForeground': this.theme.editorLinkActiveForeground,
      'editor.rangeHighlightBackground':
        this.theme.editorRangeHighlightBackground,
      'editorWhitespace.foreground': this.theme.editorWhitespaceForeground,
      'editorRuler.foreground': this.theme.editorRulerForeground,
      'editorCodeLens.foreground': this.theme.editorCodeLensForeground,
      'editorOverviewRuler.currentContentForeground':
        this.theme.editorOverviewRulerCurrentContentForeground,
      'editorOverviewRuler.incomingContentForeground':
        this.theme.editorOverviewRulerIncomingContentForeground,
      'editorOverviewRuler.commonContentForeground':
        this.theme.editorOverviewRulerCommonContentForeground,
      'editorError.foreground': this.theme.editorErrorForeground,
      'editorError.border': this.theme.editorErrorBorder,
      'editorWarning.foreground': this.theme.editorWarningForeground,
      'editorWarning.border': this.theme.editorWarningBorder,
      'editorGutter.background': this.theme.editorGutterBackground,
      'editorGutter.modifiedBackground':
        this.theme.editorGutterModifiedBackground,
      'editorGutter.addedBackground': this.theme.editorGutterAddedBackground,
      'editorGutter.deletedBackground':
        this.theme.editorGutterDeletedBackground,
      'editorInlayHint.background': this.theme.editorInlayHintBackground,
      'editorInlayHint.foreground': this.theme.editorInlayHintForeground,
      'diffEditor.insertedTextBackground':
        this.theme.diffEditorInsertedTextBackground,
      'diffEditor.insertedTextBorder': this.theme.diffEditorInsertedTextBorder,
      'diffEditor.removedTextBackground':
        this.theme.diffEditorRemovedTextBackground,
      'diffEditor.removedTextBorder': this.theme.diffEditorRemovedTextBorder,
      'editorWidget.background': this.theme.editorWidgetBackground,
      'editorWidget.border': this.theme.editorWidgetBorder,
      'editorSuggestWidget.background':
        this.theme.editorSuggestWidgetBackground,
      'editorSuggestWidget.border': this.theme.editorSuggestWidgetBorder,
      'editorSuggestWidget.foreground':
        this.theme.editorSuggestWidgetForeground,
      'editorSuggestWidget.highlightForeground':
        this.theme.editorSuggestWidgetHighlightForeground,
      'editorSuggestWidget.selectedBackground':
        this.theme.editorSuggestWidgetSelectedBackground,
      'editorHoverWidget.background': this.theme.editorHoverWidgetBackground,
      'editorHoverWidget.border': this.theme.editorHoverWidgetBorder,
      'editorGroup.emptyBackground': this.theme.editorGroupEmptyBackground,
      'editorGroup.border': this.theme.editorGroupBorder,
      'editorGroup.dropBackground': this.theme.editorGroupDropBackground,
      'editorGroupHeader.noTabsBackground':
        this.theme.editorGroupHeaderNoTabsBackground,
      'editorGroupHeader.tabsBackground':
        this.theme.editorGroupHeaderTabsBackground,
      'editorGroupHeader.tabsBorder': this.theme.editorGroupHeaderTabsBorder,
      'editorMarkerNavigation.background': this.theme.editorMarkerNavigationBackground,
      'editorMarkerNavigationError.background': this.theme.editorMarkerNavigationErrorBackground,
      'editorMarkerNavigationWarning.background': this.theme.editorMarkerNavigationWarningBackground,
    };
  }
}
