export abstract class AbstractBaseConfig {
  theme: any;
  constructor(theme: any) {
    this.theme = theme;
  }

  abstract generateConfig(): object;
}
