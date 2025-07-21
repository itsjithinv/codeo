import { AbstractBaseConfig } from './abstract-base.config';

export class TerminalConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'terminal.ansiWhite': this.theme.terminalForeground,
      'terminal.ansiBlack': this.theme.terminalAnsiBlack,
      'terminal.ansiBlue': this.theme.terminalAnsiBlue,
      'terminal.ansiCyan': this.theme.terminalAnsiCyan,
      'terminal.ansiGreen': this.theme.terminalAnsiGreen,
      'terminal.ansiMagenta': this.theme.terminalAnsiMagenta,
      'terminal.ansiRed': this.theme.terminalAnsiRed,
      'terminal.ansiYellow': this.theme.terminalAnsiYellow,
      'terminal.ansiBrightWhite': this.theme.terminalAnsiWhite,
      'terminal.ansiBrightBlack': this.theme.terminalAnsiBlack,
      'terminal.ansiBrightBlue': this.theme.terminalAnsiBlue,
      'terminal.ansiBrightCyan': this.theme.terminalAnsiCyan,
      'terminal.ansiBrightGreen': this.theme.terminalAnsiGreen,
      'terminal.ansiBrightMagenta': this.theme.terminalAnsiMagenta,
      'terminal.ansiBrightRed': this.theme.terminalAnsiRed,
      'terminal.ansiBrightYellow': this.theme.terminalAnsiYellow,
      'terminal.selectionBackground': this.theme.terminalSelectionBackground,
      'terminalCursor.background': this.theme.terminalCursorBackground,
    };
  }
}
