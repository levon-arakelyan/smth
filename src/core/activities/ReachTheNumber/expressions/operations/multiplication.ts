import type { IBasicOperation } from './ibasic-operation';

export class Multiplication implements IBasicOperation {
  public appearance: string;
  public jsOperator: string;

  constructor() {
    this.appearance = '×';
    this.jsOperator = '*';
  }
}