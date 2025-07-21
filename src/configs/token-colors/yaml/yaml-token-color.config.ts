import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class YAMLTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'YAML Entity Name Tags',
        scope: 'entity.name.tag.yaml',
        settings: {
          foreground: this.theme.yamlEntityNameTags,
        },
      },
    ];
  }
} 