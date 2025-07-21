export abstract class AbstractTokenColorsConfig {
  theme: any;
  fontStyle: string;
  constructor(theme: any, fontStyle: string) {
    this.theme = theme;
    this.fontStyle = fontStyle;
  }

  abstract generateConfig(): object;
}
