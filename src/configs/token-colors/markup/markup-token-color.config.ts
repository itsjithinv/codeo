import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class MarkupTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'Changed',
        scope: [
          'markup.changed',
          'meta.diff.header.git',
          'meta.diff.header.from-file',
          'meta.diff.header.to-file',
        ],
        settings: {
          foreground: this.theme.markupChanged,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Deleted',
        scope: 'markup.deleted.diff',
        settings: {
          foreground: this.theme.deleted,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Inserted',
        scope: 'markup.inserted.diff',
        settings: {
          foreground: this.theme.inserted,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Markdown Headings',
        scope: [
          'markup.heading.markdown',
          'markup.heading.setext.1.markdown',
          'markup.heading.setext.2.markdown',
        ],
        settings: {
          foreground: this.theme.markdownHeadings,
        },
      },
      {
        name: 'Markdown Italics',
        scope: 'markup.italic.markdown',
        settings: {
          foreground: this.theme.markdownItalics,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Markdown Bold',
        scope: 'markup.bold.markdown',
        settings: {
          foreground: this.theme.markdownBold,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markdown Quote + others',
        scope: 'markup.quote.markdown',
        settings: {
          foreground: this.theme.markdownQuote,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Markdown Raw Code + others',
        scope: 'markup.inline.raw.markdown',
        settings: {
          foreground: this.theme.markdownRawCode,
        },
      },
      {
        name: 'Markdown Links',
        scope: [
          'markup.underline.link.markdown',
          'markup.underline.link.image.markdown',
        ],
        settings: {
          foreground: this.theme.markdownLinks,
        },
      },
      {
        name: 'Markdown Inline Raw String',
        scope: 'markup.inline.raw.string.markdown',
        settings: {
          foreground: this.theme.markdownInlineRawString,
        },
      },
    ];
  }
}
