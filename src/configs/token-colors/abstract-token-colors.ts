import { DarkColors } from "../../colors";

export abstract class AbstractTokenColorsConfig {
  theme: typeof DarkColors;
  fontStyle: string;
  constructor(theme: typeof DarkColors, fontStyle: string) {
    this.theme = theme;
    this.fontStyle = fontStyle;
  }

  abstract generateConfig(): object;
}
