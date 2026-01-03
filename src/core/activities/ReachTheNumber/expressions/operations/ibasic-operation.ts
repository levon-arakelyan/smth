export interface IBasicOperation {
  appearance: string;
  jsOperator: string;
}

export type OperationConstructor = new (...args: any[]) => IBasicOperation;