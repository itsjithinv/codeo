import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class LESSTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'LESS Tag names',
        scope: 'entity.name.tag.less',
        settings: {
          foreground: this.theme.lessTagNames,
        },
      },
      {
        name: 'LESS Keyword Other Unit',
        scope: 'keyword.other.unit.css',
        settings: {
          foreground: this.theme.lessKeywordOtherUnit,
        },
      },
      {
        name: 'Attribute Name for LESS',
        scope: 'meta.attribute-selector.less entity.other.attribute-name.attribute',
        settings: {
          foreground: this.theme.lessAttributeName,
        },
      },
      {
        name: 'Tag names in Stylesheets',
        scope: [
          'entity.name.tag.css',
          'entity.name.tag.less',
          'entity.name.tag.custom.css',
          'support.constant.property-value.css',
        ],
        settings: {
          foreground: this.theme.tagNamesInStylesheets,
        },
      },
      {
        name: 'Wildcard(*) selector in Stylesheets',
        scope: [
          'entity.name.tag.wildcard.css',
          'entity.name.tag.wildcard.less',
          'entity.name.tag.wildcard.scss',
          'entity.name.tag.wildcard.sass',
        ],
        settings: {
          foreground: this.theme.wildcardSelectorInStylesheets,
        },
      },
      {
        name: 'Attribute Name for CSS',
        scope: [
          'meta.attribute-selector.css entity.other.attribute-name.attribute',
          'variable.other.readwrite.js',
        ],
        settings: {
          foreground: this.theme.attributeNameForCSS,
        },
      },
    ];
  }
}
