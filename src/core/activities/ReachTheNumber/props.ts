import type { Expression } from "./expressions/expression";
import type { ExpressionMember } from "./expressions/members/expression-member";
import type { History } from "./history/equations-history";

export type ReachTheNumberLevelProps = {
  start: number;
  members: ExpressionMember[];
  goal: number;
  level: number;
  onLevelCompleted?: () => void;
}

export type MainEquationProps = {
  expression: Expression;
  historyStepsDiscarded: boolean;
  currentResult: number;
  onExpressionMemberSelected: () => void
  onSubmitted: () => void;
}

export type ExpressionMemberViewProps = {
  member: ExpressionMember;
  onExpressionMemberSelected?: (index: number) => void
}

export type ExpressionResultProps = {
  start: string;
  result: number;
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

export type LatexProps = {
  mathExpr: string | number | undefined;
}