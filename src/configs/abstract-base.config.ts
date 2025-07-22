import { DarkColors } from "../colors";
export abstract class AbstractBaseConfig {
  theme: typeof DarkColors;
  constructor(theme: typeof DarkColors) {
    this.theme = theme;
  }

  abstract generateConfig(): object;
}
