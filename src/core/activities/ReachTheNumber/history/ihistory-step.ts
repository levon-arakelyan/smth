import type { Expression } from "../expressions/expression";

export interface IHistoryStep {
  discarded: boolean;
  expr: Expression;
}