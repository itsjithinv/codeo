import { AbstractBaseConfig } from './abstract-base.config';

export class MergeConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'merge.currentHeaderBackground': this.theme.mergeCurrentHeaderBackground,
      'merge.currentContentBackground':
        this.theme.mergeCurrentContentBackground,
      'merge.incomingHeaderBackground':
        this.theme.mergeIncomingHeaderBackground,
      'merge.incomingContentBackground':
        this.theme.mergeIncomingContentBackground,
      'merge.border': this.theme.mergeBorder,
    };
  }
}
