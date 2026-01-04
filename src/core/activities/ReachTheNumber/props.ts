import type { Expression, ExpressionStepConstructorOptions } from "./expressions/expression";
import type { ExpressionStepOptions } from "./expressions/expression-step-options";
import type { History } from "./history/equations-history";

export type ReachTheNumberLevelProps = {
  start: number;
  steps: ExpressionStepConstructorOptions[];
  goal: number;
  level: number;
  onLevelCompleted?: () => void;
}

export type MainEquationProps = {
  expression: Expression;
  historyStepsDiscarded: boolean;
  currentResult: number;
  onExpressionStepSelected: (step: ExpressionStepOptions, id: number) => void
  onSubmitted: () => void;
}

export type EquationsHistoryProps = {
  history: History;
  onClearClicked: () => void;
  onRevertClicked: () => void;
  onRemoveFromThisStepClicked: (selectedItemIndex: number | null) => void;
  onUndoClicked: () => void;
};

export type WarningTooltipProps = {
  text?: string;
};

export type VictoryModalProps = {
  open: boolean;
  goal: number;
  onNextLevelClicked: () => void;
}