import { AbstractBaseConfig } from './abstract-base.config';

export class ScrollbarConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'scrollbar.shadow': this.theme.scrollbarShadow,
      'scrollbarSlider.activeBackground':
        this.theme.scrollbarSliderActiveBackground,
      'scrollbarSlider.background': this.theme.scrollbarSliderBackground,
      'scrollbarSlider.hoverBackground': this.theme.scrollbarSliderHoverBackground,
    };
  }
}
