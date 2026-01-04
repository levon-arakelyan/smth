import type { IBasicOperation } from "./ibasic-operation";

export class SquareRoot implements IBasicOperation {
  public appearance: string;
  public jsOperator: string;

  constructor() {
    this.appearance = '√';
    this.jsOperator = 'sqrt(';
  }
}