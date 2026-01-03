import type { Expression, ExpressionStepConstructorOptions } from '../expressions/expression';

export interface HistoryStep {
  start: number;
  removed: boolean;
  expr: Expression;
}

export type ReachTheNumberProps = {
  start: number;
  steps: ExpressionStepConstructorOptions[];
  goal: number;
}

export type EquationsHistoryProps = {
  onCleared: () => void;
  onChanged: (expr: Expression) => void;
  onStepsRemoved: (expr: Expression) => void;
  onReverted: (lastExpr: Expression) => void;
};

export type RemovedHistoryStepsTooltipProps = {
  additionalText?: string;
};