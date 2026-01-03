import type { IBasicOperation } from './ibasic-operation';

export class Addition implements IBasicOperation {
  public appearance: string;
  public jsOperator: string;

  constructor() {
    this.appearance = '+';
    this.jsOperator = '+';
  }
}