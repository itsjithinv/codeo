import { AbstractTokenColorsConfig } from '../abstract-token-colors';

export class CoffeeScriptTokenColorConfig extends AbstractTokenColorsConfig {
  generateConfig(): object[] {
    return [
      {
        name: 'CoffeScript Variable Assignment',
        scope: 'variable.assignment.coffee',
        settings: {
          foreground: this.theme.coffeeScriptVariableAssignment,
        },
      },
      {
        name: 'CoffeScript Parameter Function',
        scope: 'variable.parameter.function.coffee',
        settings: {
          foreground: this.theme.coffeeScriptParameterFunction,
        },
      },
      {
        name: 'CoffeeScript Assignments',
        scope: 'variable.assignment.coffee',
        settings: {
          foreground: this.theme.coffeeScriptAssignments,
        },
      },
    ];
  }
} 