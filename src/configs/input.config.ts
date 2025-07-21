import { AbstractBaseConfig } from './abstract-base.config';

export class InputConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'input.background': this.theme.inputBackground,
      'input.border': this.theme.inputBorder,
      'input.foreground': this.theme.foreground,
      'input.placeholderForeground': this.theme.inputPlaceholderForeground,
      'inputOption.activeBorder': this.theme.inputOptionActiveBorder,
      'inputValidation.errorBackground':
        this.theme.inputValidationErrorBackground,
      'inputValidation.errorBorder': this.theme.inputValidationErrorBorder,
      'inputValidation.infoBackground':
        this.theme.inputValidationInfoBackground,
      'inputValidation.infoBorder': this.theme.inputValidationInfoBorder,
      'inputValidation.warningBackground':
        this.theme.inputValidationWarningBackground,
      'inputValidation.warningBorder': this.theme.inputValidationWarningBorder,
    };
  }
}
