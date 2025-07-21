import { AbstractBaseConfig } from './abstract-base.config';

export class ListConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'list.activeSelectionBackground':
        this.theme.listActiveSelectionBackground,
      'list.activeSelectionForeground':
        this.theme.listActiveSelectionForeground,
      'list.invalidItemForeground': this.theme.listInvalidItemForeground,
      'list.dropBackground': this.theme.listDropBackground,
      'list.focusBackground': this.theme.listFocusBackground,
      'list.focusForeground': this.theme.listFocusForeground,
      'list.highlightForeground': this.theme.listHighlightForeground,
      'list.hoverBackground': this.theme.listHoverBackground,
      'list.hoverForeground': this.theme.listHoverForeground,
      'list.inactiveSelectionBackground':
        this.theme.listInactiveSelectionBackground,
      'list.inactiveSelectionForeground':
        this.theme.listInactiveSelectionForeground,
    };
  }
}
