import type { JSX } from "@emotion/react/jsx-runtime";
import type { MuiColor } from "../../../../ui/colors";
import React from "react";
import { ExpressionMember } from "./expression-member";
import type { ExpressionMemberChoice } from "./expression-member-choice";
import { ExpressionNumberMemberView } from "../../../../../components/activities/ReachTheNumber/MainEquation/ExpressionNumberMemberView";
import { ExpressionOperationMember } from "./expression-operation-members/expression-operation-member";

export class ExpressionNumberMember extends ExpressionMember {
  public color: MuiColor;

  constructor(choices: ExpressionMemberChoice[]) {
    super(choices);
    this.color = 'success';
  }

  public renderMathJS(): string {
    const { submembers, choice } = this;
    if (!submembers.length) {
      return choice.mathSymbol;
    }

    const power = submembers[0];
    return `${choice.viewSymbol}^${power.choice.mathSymbol}`;
  }

  public renderLatex(): string {
    const { submembers, choice } = this;
    if (!submembers.length) {
      return choice.mathSymbol;
    }

    const power = submembers[0];
    return `${choice.viewSymbol}^{${power.choice.mathSymbol}}`;
  }

  public renderHistoryLatex(prevMember: ExpressionMember | null = null): string {
    const nStr = this.choice.historySymbol;
    const n = Number(nStr);
    if (n > 0 || prevMember == null) {
      return nStr;
    }
    if (prevMember instanceof ExpressionOperationMember) {
      return `(${n})`;
    }
    return nStr;
  }

  public renderJSX(): JSX.Element {
    return React.createElement(ExpressionNumberMemberView, { member: this });
  }
}