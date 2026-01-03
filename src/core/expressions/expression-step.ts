import type { IBasicOperation } from './operations/ibasic-operation';

export enum ExpressionStepType {
  Number,
  Operation,
  Helper,
  Equals
}

export abstract class ExpressionStep {
  public abstract value: any;
  public abstract get(jsOperations: boolean): string;
  public appearance: string;

  constructor(appearance: string) {
    this.appearance = appearance;
  }
}

export class ExpressionNumberStep extends ExpressionStep {
  public value: number;
  constructor(value: number) {
    super(`${value}`);
    this.value = value;
  }

  public get(): string {
    return `${this.value}`;
  }
}

export class ExpressionOperationStep extends ExpressionStep {
  public value: IBasicOperation;

  constructor(value: IBasicOperation) {
    super(`${value.appearance}`);
    this.value = value;
  }

  public get(jsOperations: boolean = true): string {
    return `${jsOperations ? this.value.jsOperator : this.value.appearance}`;
  }
}

export class ExpressionHelperStep extends ExpressionStep {
  public value: string = '';

  constructor(value: string) {
    super(value);
    this.value = value;
  }

  public get(): string {
    return `${this.value}`;
  }
}

export class ExpressionEqualsStep extends ExpressionStep {
  public value: string = '';

  constructor() {
    const val = '=';
    super(val);
    this.value = val;
  }

  public get(): string {
    return '';
  }
}