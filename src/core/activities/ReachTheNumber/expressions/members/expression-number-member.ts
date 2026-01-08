import type { JSX } from "@emotion/react/jsx-runtime";
import type { MuiColor } from "../../../../ui/colors";
import React from "react";
import { ExpressionMember } from "./expression-member";
import type { ExpressionMemberChoice } from "./expression-member-choice";
import { ExpressionNumberMemberView } from "../../../../../components/activities/ReachTheNumber/MainEquation/expression-number-member/ExpressionNumberMemberView";

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

  public renderJSX(): JSX.Element {
    return React.createElement(ExpressionNumberMemberView, { member: this });
  }
}