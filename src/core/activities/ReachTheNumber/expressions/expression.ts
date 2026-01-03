import type { OperationConstructor } from './operations/ibasic-operation';
import { ExpressionEqualsStep, ExpressionNumberStep, ExpressionOperationStep, ExpressionStepType, type ExpressionStep } from './expression-step';
import { ExpressionStepOptions } from './expression-step-options';
import * as math from 'mathjs';

export type ExpressionStepConstructorOptions = OperationConstructor[] | number[];
export class Expression {
  public start: number = 0;
  public expressionStepOptions: ExpressionStepOptions[] = [];

  constructor(start: number, expressionOptions: ExpressionStepConstructorOptions[]) {
    this.start = start;
    let i = 0;

    const startExpression = new ExpressionStepOptions([new ExpressionNumberStep(this.start)], ExpressionStepType.Number, i++);
    const midExpressions = expressionOptions.map(options => {
      let steps: ExpressionStep[] = [];
      let type = ExpressionStepType.Number;
      if (this.isNumberArr(options)) {
        steps = options.map(x => new ExpressionNumberStep(x as number));
      } else {
        type = ExpressionStepType.Operation;
        steps = (options as OperationConstructor[]).map(Op => new ExpressionOperationStep(new Op()));
      }
      return new ExpressionStepOptions(steps, type, i++);
    });
    const goalExpressions = new ExpressionStepOptions([new ExpressionEqualsStep()], ExpressionStepType.Equals, i++);
    this.expressionStepOptions = [startExpression, ...midExpressions, goalExpressions];
  }

  public static from(start: number, expressionOptions: ExpressionStepConstructorOptions[], steps: ExpressionStepOptions[]): Expression {
    let newExpr: Expression = new Expression(start, expressionOptions);
    for (let i = 0; i < steps.length; i++) {
      newExpr.expressionStepOptions[i].selectedId = steps[i].selectedId;
    }
    return newExpr;
  }

  public isNumberArr(arr: any[]): boolean {
    return typeof arr[0] === 'number';
  }

  public get(forUi = false): string {
    return this.expressionStepOptions.map(x => x.options[x.selectedId].get(!forUi)).join(forUi ? ' ' : '');
  }

  public getVisual(): string {
    return `${this.get(true)}= ${this.calculate()}`
  }

  public calculate(): number {
    return math.round(math.evaluate(this.get()), 4);
  }
}