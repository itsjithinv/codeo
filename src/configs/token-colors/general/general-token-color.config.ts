import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class GeneralTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'Comment',
        scope: [
          'comment',
          'punctuation.definition.comment',
        ],
        settings: {
          foreground: this.theme.comment,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'String',
        scope: 'string',
        settings: {
          foreground: this.theme.string,
        },
      },
      {
        name: 'Number',
        scope: [
          'constant.numeric',
          'constant.character.numeric',
        ],
        settings: {
          foreground: this.theme.number,
        },
      },
      {
        name: 'Keyword',
        scope: [
          'punctuation.accessor',
          'keyword',
        ],
        settings: {
          foreground: this.theme.keyword,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Variable',
        scope: 'variable',
        settings: {
          foreground: this.theme.variable,
        },
      },
      {
        name: 'Constant',
        scope: [
          'constant.language',
          'punctuation.definition.constant',
          'variable.other.constant',
        ],
        settings: {
          foreground: this.theme.builtInConstant,
        },
      },
      {
        name: 'Function name',
        scope: 'entity.name.function',
        settings: {
          foreground: this.theme.functionName,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Class name',
        scope: [
          'entity.name.class',
          'meta.class entity.name.type.class',
        ],
        settings: {
          foreground: this.theme.className,
        },
      },
      {
        name: 'Boolean (false)',
        scope: 'constant.language.boolean.false',
        settings: {
          foreground: this.theme.booleanFalse,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Boolean (true)',
        scope: 'constant.language.boolean.true',
        settings: {
          foreground: this.theme.booleanTrue,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Null',
        scope: 'constant.language.null',
        settings: {
          foreground: this.theme.null,
        },
      },
      {
        name: 'Object',
        scope: 'object',
        settings: {
          foreground: this.theme.object,
        },
      },
      {
        name: 'Global settings',
        settings: {
          foreground: this.theme.globalSettingsForeground,
        },
      },
      {
        name: 'String Quoted',
        scope: [
          'string.quoted',
          'variable.other.readwrite.js',
        ],
        settings: {
          foreground: this.theme.stringQuoted,
        },
      },
      {
        name: 'Support Constant Math',
        scope: 'support.constant.math',
        settings: {
          foreground: this.theme.supportConstantMath,
        },
      },
      {
        name: 'Built-in constant',
        scope: [
          'constant.language',
          'punctuation.definition.constant',
          'variable.other.constant',
        ],
        settings: {
          foreground: this.theme.builtInConstant,
        },
      },
      {
        name: 'User-defined constant',
        scope: [
          'constant.character',
          'constant.other',
        ],
        settings: {
          foreground: this.theme.userDefinedConstant,
        },
      },
      {
        name: 'Constant Character Escape',
        scope: 'constant.character.escape',
        settings: {
          foreground: this.theme.constantCharacterEscape,
        },
      },
      {
        name: 'RegExp String',
        scope: [
          'string.regexp',
          'string.regexp keyword.other',
        ],
        settings: {
          foreground: this.theme.regExpString,
        },
      },
      {
        name: 'Comma in functions',
        scope: 'meta.function punctuation.separator.comma',
        settings: {
          foreground: this.theme.commaInFunctions,
        },
      },
      {
        name: 'Storage',
        scope: [
          'storage',
          'meta.var.expr',
          'meta.class meta.method.declaration meta.var.expr storage.type.js',
          'storage.type.property.js',
          'storage.type.property.ts',
          'storage.type.property.tsx',
        ],
        settings: {
          foreground: this.theme.storage,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Storage type',
        scope: 'storage.type',
        settings: {
          foreground: this.theme.storageType,
        },
      },
      {
        name: 'Storage type',
        scope: 'storage.type.function.arrow.js',
        settings: {
          fontStyle: '',
        },
      },
      {
        name: 'Inherited class',
        scope: 'entity.other.inherited-class',
        settings: {
          foreground: this.theme.inheritedClass,
        },
      },
      {
        name: 'Meta Tag',
        scope: [
          'punctuation.definition.tag',
          'meta.tag',
        ],
        settings: {
          foreground: this.theme.metaTag,
        },
      },
      {
        name: 'Tag attribute',
        scope: 'entity.other.attribute-name',
        settings: {
          fontStyle: this.fontStyle,
          foreground: this.theme.tagAttributes,
        },
      },
      {
        name: 'Entity Name Tag Custom',
        scope: 'entity.name.tag.custom',
        settings: {
          foreground: this.theme.entityNameTagCustom,
        },
      },
      {
        name: 'Library (function & constant)',
        scope: [
          'support.function',
          'support.constant',
        ],
        settings: {
          foreground: this.theme.libraryFunctionAndConstant,
        },
      },
      {
        name: 'Support Constant Property Value meta',
        scope: 'support.constant.meta.property-value',
        settings: {
          foreground: this.theme.supportConstantPropertyValueMeta,
        },
      },
      {
        name: 'Library class/type',
        scope: [
          'support.type',
          'support.class',
        ],
        settings: {
          foreground: this.theme.libraryClassType,
        },
      },
      {
        name: 'Support Variable DOM',
        scope: 'support.variable.dom',
        settings: {
          foreground: this.theme.supportVariableDom,
        },
      },
      {
        name: 'Invalid',
        scope: 'invalid',
        settings: {
          foreground: this.theme.invalidForeground,
        },
      },
      {
        name: 'Invalid deprecated',
        scope: 'invalid.deprecated',
        settings: {
          foreground: this.theme.invalidForeground,
        },
      },
      {
        name: 'Keyword Operator',
        scope: 'keyword.operator',
        settings: {
          foreground: this.theme.keywordOperator,
        },
      },
      {
        name: 'Keyword Operator Relational',
        scope: 'keyword.operator.relational',
        settings: {
          foreground: this.theme.keywordOperatorRelational,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Keyword Operator Assignment',
        scope: 'keyword.operator.assignment',
        settings: {
          foreground: this.theme.keywordOperatorAssignment,
        },
      },
      {
        name: 'Keyword Operator Arithmetic',
        scope: 'keyword.operator.arithmetic',
        settings: {
          foreground: this.theme.keywordOperatorArithmetic,
        },
      },
      {
        name: 'Keyword Operator Bitwise',
        scope: 'keyword.operator.bitwise',
        settings: {
          foreground: this.theme.keywordOperatorBitwise,
        },
      },
      {
        name: 'Keyword Operator Increment',
        scope: 'keyword.operator.increment',
        settings: {
          foreground: this.theme.keywordOperatorIncrement,
        },
      },
      {
        name: 'Keyword Operator Ternary',
        scope: 'keyword.operator.ternary',
        settings: {
          foreground: this.theme.keywordOperatorTernary,
        },
      },
      {
        name: 'Double-Slashed Comment',
        scope: 'comment.line.double-slash',
        settings: {
          foreground: this.theme.doubleSlashedComment,
        },
      },
      {
        name: 'Meta Brace',
        scope: 'meta.brace',
        settings: {
          foreground: this.theme.metaBrace,
        },
      },
      {
        name: 'Meta Delimiter Period',
        scope: 'meta.delimiter.period',
        settings: {
          foreground: this.theme.metaDelimiterPeriod,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Punctuation Definition String',
        scope: 'punctuation.definition.string',
        settings: {
          foreground: this.theme.punctuationDefinitionString,
        },
      },
      {
        name: 'Punctuation Definition String Markdown',
        scope: 'punctuation.definition.string.begin.markdown',
        settings: {
          foreground: this.theme.punctuationDefinitionStringMarkdown,
        },
      },
      {
        name: 'Object Comma',
        scope: 'object.comma',
        settings: {
          foreground: this.theme.objectComma,
        },
      },
      {
        name: 'Variable Parameter Function',
        scope: 'variable.parameter.function',
        settings: {
          foreground: this.theme.variableParameterFunction,
          fontStyle: '',
        },
      },
      {
        name: 'Support Type Property Name & entity name tags',
        scope: [
          'support.type.vendor.property-name',
          'support.constant.vendor.property-value',
          'support.type.property-name',
          'meta.property-list entity.name.tag',
        ],
        settings: {
          foreground: this.theme.supportTypePropertyNameAndEntityTags,
          fontStyle: '',
        },
      },
      {
        name: 'Entity Name tag reference in stylesheets',
        scope: 'meta.property-list entity.name.tag.reference',
        settings: {
          foreground: this.theme.entityNameTagReferenceInStylesheets,
        },
      },
      {
        name: 'Constant Other Color RGB Value Punctuation Definition Constant',
        scope: 'constant.other.color.rgb-value punctuation.definition.constant',
        settings: {
          foreground: this.theme.constantOtherColorRGBValuePunctuationDefinition,
        },
      },
      {
        name: 'Constant Other Color',
        scope: 'constant.other.color',
        settings: {
          foreground: this.theme.constantOtherColor,
        },
      },
      {
        name: 'Keyword Other Unit',
        scope: 'keyword.other.unit',
        settings: {
          foreground: this.theme.keywordOtherUnit,
        },
      },
      {
        name: 'Meta Selector',
        scope: 'meta.selector',
        settings: {
          foreground: this.theme.metaSelector,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Entity Other Attribute Name Id',
        scope: 'entity.other.attribute-name.id',
        settings: {
          foreground: this.theme.entityOtherAttributeNameId,
        },
      },
      {
        name: 'Meta Property Name',
        scope: 'meta.property-name',
        settings: {
          foreground: this.theme.metaPropertyName,
        },
      },
      {
        name: 'Doctypes',
        scope: [
          'entity.name.tag.doctype',
          'meta.tag.sgml.doctype',
        ],
        settings: {
          foreground: this.theme.doctypes,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Punctuation Definition Parameters',
        scope: 'punctuation.definition.parameters',
        settings: {
          foreground: this.theme.punctuationDefinitionParameters,
        },
      },
      {
        name: 'Keyword Control Operator',
        scope: 'keyword.control.operator',
        settings: {
          foreground: this.theme.keywordControlOperator,
        },
      },
      {
        name: 'Keyword Operator Logical',
        scope: 'keyword.operator.logical',
        settings: {
          foreground: this.theme.keywordOperatorLogical,
          fontStyle: '',
        },
      },
      {
        name: 'Variable Instances',
        scope: [
          'variable.instance',
          'variable.other.instance',
          'variable.readwrite.instance',
          'variable.other.readwrite.instance',
          'variable.other.property',
        ],
        settings: {
          foreground: this.theme.variableInstance,
        },
      },
      {
        name: 'Variable Property Other object property',
        scope: [
          'variable.other.object.property',
        ],
        settings: {
          foreground: this.theme.variablePropertyOtherObjectProperty,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Entity Name Function',
        scope: [
          'entity.name.function',
        ],
        settings: {
          foreground: this.theme.entityNameFunction,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Keyword Operator Comparison, imports, returns and Keyword Operator Ruby',
        scope: [
          'keyword.operator.comparison',
          'keyword.control.flow.js',
          'keyword.control.flow.ts',
          'keyword.control.flow.tsx',
          'keyword.control.ruby',
          'keyword.control.module.ruby',
          'keyword.control.class.ruby',
          'keyword.control.def.ruby',
          'keyword.control.loop.js',
          'keyword.control.loop.ts',
          'keyword.control.import.js',
          'keyword.control.import.ts',
          'keyword.control.import.tsx',
          'keyword.control.from.js',
          'keyword.control.from.ts',
          'keyword.control.from.tsx',
          'keyword.operator.instanceof.js',
          'keyword.operator.expression.instanceof.ts',
          'keyword.operator.expression.instanceof.tsx',
        ],
        settings: {
          foreground: this.theme.keywordOperatorComparison,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Keyword Control Conditional',
        scope: [
          'keyword.control.conditional.js',
          'keyword.control.conditional.ts',
          'keyword.control.switch.js',
          'keyword.control.switch.ts',
        ],
        settings: {
          foreground: this.theme.keywordControlConditional,
          fontStyle: '',
        },
      },
      {
        name: 'Support Constant, `new` keyword, Special Method Keyword, `debugger`, other keywords',
        scope: [
          'support.constant',
          'keyword.other.special-method',
          'keyword.other.new',
          'keyword.other.debugger',
          'keyword.control',
        ],
        settings: {
          foreground: this.theme.supportConstant,
        },
      },
      {
        name: 'Support Function',
        scope: 'support.function',
        settings: {
          foreground: this.theme.supportFunction,
        },
      },
      {
        name: 'Language Variable',
        scope: 'variable.language',
        settings: {
          foreground: this.theme.variableLanguage,
        },
      },
      {
        name: 'Support Variable Property',
        scope: 'support.variable.property',
        settings: {
          foreground: this.theme.supportVariableProperty,
        },
      },
      {
        name: 'Variable Function',
        scope: 'variable.function',
        settings: {
          foreground: this.theme.variableFunction,
        },
      },
      {
        name: 'Variable Interpolation',
        scope: 'variable.interpolation',
        settings: {
          foreground: this.theme.variableInterpolation,
        },
      },
      {
        name: 'Meta Function Call',
        scope: 'meta.function-call',
        settings: {
          foreground: this.theme.metaFunctionCall,
        },
      },
      {
        name: 'Punctuation Section Embedded',
        scope: 'punctuation.section.embedded',
        settings: {
          foreground: this.theme.punctuationSectionEmbedded,
        },
      },
      {
        name: 'Punctuation Tweaks',
        scope: [
          'punctuation.terminator.expression',
          'punctuation.definition.arguments',
          'punctuation.definition.array',
          'punctuation.section.array',
          'meta.array',
        ],
        settings: {
          foreground: this.theme.punctuationTweaks,
        },
      },
      {
        name: 'More Punctuation Tweaks',
        scope: [
          'punctuation.definition.list.begin',
          'punctuation.definition.list.end',
          'punctuation.separator.arguments',
          'punctuation.definition.list',
        ],
        settings: {
          foreground: this.theme.morePunctuationTweaks,
        },
      },
      {
        name: 'Template Strings',
        scope: 'string.template meta.template.expression',
        settings: {
          foreground: this.theme.templateStrings,
        },
      },
      {
        name: 'Backtics(``) in Template Strings',
        scope: 'string.template punctuation.definition.string',
        settings: {
          foreground: this.theme.backticsInTemplateStrings,
        },
      },
      {
        name: 'Italics',
        scope: this.fontStyle,
        settings: {
          foreground: this.theme.italics,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Bold',
        scope: 'bold',
        settings: {
          foreground: this.theme.bold,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Quote',
        scope: 'quote',
        settings: {
          foreground: this.theme.quote,
          fontStyle: this.fontStyle,
        },
      },
      {
        name: 'Raw Code',
        scope: 'raw',
        settings: {
          foreground: this.theme.rawCode,
        },
      },
      {
        name: 'Invalid Broken',
        scope: 'invalid.broken',
        settings: {
          foreground: this.theme.invalidBrokenForeground,
          background: this.theme.invalidBrokenBackground,
        },
      },
      {
        name: 'Invalid Unimplemented',
        scope: 'invalid.unimplemented',
        settings: {
          foreground: this.theme.invalidUnimplementedForeground,
          background: this.theme.invalidUnimplementedBackground,
        },
      },
      {
        name: 'Invalid Illegal',
        scope: 'invalid.illegal',
        settings: {
          foreground: this.theme.invalidIllegalForeground,
          background: this.theme.invalidIllegalBackground,
        },
      },
      {
        name: 'normalize font style of certain components',
        scope: [
          'meta.property-list.css meta.property-value.css variable.other.less',
          'meta.property-list.scss variable.scss',
          'meta.property-list.sass variable.sass',
          'meta.brace',
          'keyword.operator.operator',
          'keyword.operator.or.regexp',
          'keyword.operator.expression.in',
          'keyword.operator.relational',
          'keyword.operator.assignment',
          'keyword.operator.comparison',
          'keyword.operator.type',
          'keyword.operator',
          'keyword',
          'punctuation.definintion.string',
          'punctuation',
          'variable.other.readwrite.js',
          'storage.type',
          'source.css',
          'string.quoted',
        ],
        settings: {
          fontStyle: "",
        },
      },
    ];
  }
}
