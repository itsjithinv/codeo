import { AbstractBaseConfig } from './abstract-base.config';

export class TerminalConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'terminal.ansiWhite': this.theme.terminalAnsiWhite,
      'terminal.ansiBlack': this.theme.terminalAnsiBlack,
      'terminal.ansiBlue': this.theme.terminalAnsiBlue,
      'terminal.ansiCyan': this.theme.terminalAnsiCyan,
      'terminal.ansiGreen': this.theme.terminalAnsiGreen,
      'terminal.ansiMagenta': this.theme.terminalAnsiMagenta,
      'terminal.ansiRed': this.theme.terminalAnsiRed,
      'terminal.ansiYellow': this.theme.terminalAnsiYellow,
      'terminal.ansiBrightWhite': this.theme.terminalAnsiWhite,
      'terminal.ansiBrightBlack': this.theme.terminalAnsiBrightBlack,
      'terminal.ansiBrightBlue': this.theme.terminalAnsiBrightBlue,
      'terminal.ansiBrightCyan': this.theme.terminalAnsiBrightCyan,
      'terminal.ansiBrightGreen': this.theme.terminalAnsiBrightGreen,
      'terminal.ansiBrightMagenta': this.theme.terminalAnsiBrightMagenta,
      'terminal.ansiBrightRed': this.theme.terminalAnsiBrightRed,
      'terminal.ansiBrightYellow': this.theme.terminalAnsiBrightYellow,
      'terminal.selectionBackground': this.theme.terminalSelectionBackground,
      'terminalCursor.background': this.theme.terminalCursorBackground,
    };
  }
}
