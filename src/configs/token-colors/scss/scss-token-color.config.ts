import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class SCSSTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'SCSS Variable',
        scope: [
          'variable.scss',
          'variable.sass',
          'variable.parameter.url.scss',
          'variable.parameter.url.sass',
        ],
        settings: {
          foreground: this.theme.scssVariable,
        },
      },
      {
        name: 'Variables in SASS At-Rules',
        scope: [
          'source.css.scss meta.at-rule variable',
          'source.css.sass meta.at-rule variable',
        ],
        settings: {
          foreground: this.theme.variablesInSassAtRules,
        },
      },
      {
        name: 'Variables in SASS At-Rules (alt)',
        scope: [
          'source.css.scss meta.at-rule variable',
          'source.css.sass meta.at-rule variable',
        ],
        settings: {
          foreground: this.theme.variablesInSassAtRulesAlt,
        },
      },
      {
        name: 'Attribute Name for SASS',
        scope: [
          'meta.attribute-selector.scss entity.other.attribute-name.attribute',
          'meta.attribute-selector.sass entity.other.attribute-name.attribute',
        ],
        settings: {
          foreground: this.theme.attributeNameForSass,
        },
      },
      {
        name: 'Tag names in SASS',
        scope: [
          'entity.name.tag.scss',
          'entity.name.tag.sass',
        ],
        settings: {
          foreground: this.theme.scssTagNames,
        },
      },
      {
        name: 'SASS Keyword Other Unit',
        scope: [
          'keyword.other.unit.scss',
          'keyword.other.unit.sass',
        ],
        settings: {
          foreground: this.theme.sassKeywordOtherUnit,
        },
      },
    ];
  }
}
