import { AbstractBaseConfig } from './abstract-base.config';

export class SettingsConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'settings.headerForeground': this.theme.settingsHeaderForeground,
      'settings.modifiedItemIndicator': this.theme.settingsModifiedItemIndicator,
      'settings.dropdownBackground': this.theme.settingsDropdownBackground,
      'settings.dropdownForeground': this.theme.settingsDropdownForeground,
      'settings.dropdownBorder': this.theme.settingsDropdownBorder,
      'settings.dropdownListBorder': this.theme.settingsDropdownListBorder,
      'settings.checkboxBackground': this.theme.settingsCheckboxBackground,
      'settings.checkboxForeground': this.theme.settingsCheckboxForeground,
      'settings.checkboxBorder': this.theme.settingsCheckboxBorder,
      'settings.rowHoverBackground': this.theme.settingsRowHoverBackground,
      'settings.textInputBackground': this.theme.settingsTextInputBackground,
      'settings.textInputForeground': this.theme.settingsTextInputForeground,
      'settings.textInputBorder': this.theme.settingsTextInputBorder,
      'settings.numberInputBackground': this.theme.settingsNumberInputBackground,
      'settings.numberInputForeground': this.theme.settingsNumberInputForeground,
      'settings.numberInputBorder': this.theme.settingsNumberInputBorder,
      'settings.focusedRowBackground': this.theme.settingsFocusedRowBackground,
      'settings.focusedRowBorder': this.theme.settingsFocusedRowBorder,
      'settings.headerBorder': this.theme.settingsHeaderBorder,
      'settings.sashBorder': this.theme.settingsSashBorder,
    };
  }
}
