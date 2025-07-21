import { DarkColors } from './colors/dark/dark-colors';
import { LightColors } from './colors/light/light-colors';
import { GeneralConfig } from './configs/general.config';
import { ActivityBarConfig } from './configs/activity-bar.config';
import { BreadCrumbConfig } from './configs/breadcrumb.config';
import { EditorConfig } from './configs/editor.config';
import { GitConfig } from './configs/git.config';
import { InputConfig } from './configs/input.config';
import { ListConfig } from './configs/list.config';
import { MergeConfig } from './configs/merge.config';
import { NotificationsConfig } from './configs/notifications.config';
import { PanelConfig } from './configs/panel.config';
import { PeekViewConfig } from './configs/peek-view.config';
import { ScrollbarConfig } from './configs/scrollbar.config';
import { SidebarConfig } from './configs/sidebar-config';
import { StatusbarConfig } from './configs/status-bar.config';
import { TabConfig } from './configs/tab.config';
import { TerminalConfig } from './configs/terminal.config';
import { TitleBarConfig } from './configs/title-bar.config';
import { SettingsConfig } from './configs/settings.config';

// Token color configs
import { GeneralTokenColorConfig } from './configs/token-colors/general/general-token-color.config';
import { MarkupTokenColorConfig } from './configs/token-colors/markup/markup-token-color.config';
import { LESSTokenColorConfig } from './configs/token-colors/less/less-token-color.config';
import { SCSSTokenColorConfig } from './configs/token-colors/scss/scss-token-color.config';
import { TypeScriptTokenColorConfig } from './configs/token-colors/typescript/typescript-token-color.config';
import { PythonTokenColorConfig } from './configs/token-colors/python/python-token-color.config';
import { PHPTokenColorConfig } from './configs/token-colors/php/php-token-color.config';
import { JavaScriptTokenColorConfig } from './configs/token-colors/javascript/javascript-token-color.config';
import { RubyTokenColorConfig } from './configs/token-colors/ruby/ruby-token-color.config';
import { JSONTokenColorConfig } from './configs/token-colors/json/json-token-color.config';
import { GoTokenColorConfig } from './configs/token-colors/go/go-token-color.config';
import { CSharpTokenColorConfig } from './configs/token-colors/csharp/csharp-token-color.config';
import { CppTokenColorConfig } from './configs/token-colors/cpp/cpp-token-color.config';
import { DartTokenColorConfig } from './configs/token-colors/dart/dart-token-color.config';
import { ElixirTokenColorConfig } from './configs/token-colors/elixir/elixir-token-color.config';
import { CoffeeScriptTokenColorConfig } from './configs/token-colors/coffeescript/coffeescript-token-color.config';
import { YAMLTokenColorConfig } from './configs/token-colors/yaml/yaml-token-color.config';
import { PowershellTokenColorConfig } from './configs/token-colors/powershell/powershell-token-color.config';
import { ClojureTokenColorConfig } from './configs/token-colors/clojure/clojure-token-color.config';
import { HTMLTokenColorConfig } from './configs/token-colors/html/html-token-color.config';

import * as fs from 'fs';
import * as path from 'path';

function buildTheme({ theme, type, name, outFile, fontStyleOverride }: {
  theme: any,
  type: 'dark' | 'light',
  name: string,
  outFile: string,
  fontStyleOverride?: string
}) {
  // UI color configs
  const colorConfigs = [
    new GeneralConfig(theme),
    new ActivityBarConfig(theme),
    new BreadCrumbConfig(theme),
    new EditorConfig(theme),
    new GitConfig(theme),
    new InputConfig(theme),
    new ListConfig(theme),
    new MergeConfig(theme),
    new NotificationsConfig(theme),
    new PanelConfig(theme),
    new PeekViewConfig(theme),
    new ScrollbarConfig(theme),
    new SidebarConfig(theme),
    new StatusbarConfig(theme),
    new TabConfig(theme),
    new TerminalConfig(theme),
    new TitleBarConfig(theme),
    new SettingsConfig(theme),
  ];

  // Token color configs
  const fontStyle = fontStyleOverride !== undefined ? fontStyleOverride : '';
  const tokenColorConfigs = [
    new GeneralTokenColorConfig(theme, fontStyle),
    new MarkupTokenColorConfig(theme, fontStyle),
    new LESSTokenColorConfig(theme, fontStyle),
    new SCSSTokenColorConfig(theme, fontStyle),
    new TypeScriptTokenColorConfig(theme, fontStyle),
    new PythonTokenColorConfig(theme, fontStyle),
    new PHPTokenColorConfig(theme, fontStyle),
    new JavaScriptTokenColorConfig(theme, fontStyle),
    new RubyTokenColorConfig(theme, fontStyle),
    new JSONTokenColorConfig(theme, fontStyle),
    new GoTokenColorConfig(theme, fontStyle),
    new CSharpTokenColorConfig(theme, fontStyle),
    new CppTokenColorConfig(theme, fontStyle),
    new DartTokenColorConfig(theme, fontStyle),
    new ElixirTokenColorConfig(theme, fontStyle),
    new CoffeeScriptTokenColorConfig(theme, fontStyle),
    new YAMLTokenColorConfig(theme, fontStyle),
    new PowershellTokenColorConfig(theme, fontStyle),
    new ClojureTokenColorConfig(theme, fontStyle),
    new HTMLTokenColorConfig(theme, fontStyle),
  ];

  // Collect colors
  const colors = Object.assign({}, ...colorConfigs.map(cfg => cfg.generateConfig()));
  const tokenColors = tokenColorConfigs.flatMap(cfg => cfg.generateConfig());

  // Assemble theme JSON
  const themeJson = {
    name,
    type,
    colors,
    tokenColors,
  };

  // Write to dist
  const distDir = path.join(__dirname, '../themes');
  fs.mkdirSync(distDir, { recursive: true });
  fs.writeFileSync(
    path.join(distDir, outFile),
    JSON.stringify(themeJson, null, 2)
  );
  console.log(`Built: ${outFile}`);
}

// Build all four variants
buildTheme({
  theme: DarkColors,
  type: 'dark',
  name: 'Codeo',
  outFile: 'codeo-color-theme.json',
});
buildTheme({
  theme: LightColors,
  type: 'light',
  name: 'Codeo Light',
  outFile: 'codeo-light-color-theme.json',
});
buildTheme({
  theme: DarkColors,
  type: 'dark',
  name: 'Codeo (No Italic)',
  outFile: 'codeo-color-theme-noitalic.json',
  fontStyleOverride: '',
});
buildTheme({
  theme: LightColors,
  type: 'light',
  name: 'Codeo Light (No Italic)',
  outFile: 'codeo-light-color-theme-noitalic.json',
  fontStyleOverride: '',
}); 