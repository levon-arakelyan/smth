import type { JSX } from "@emotion/react/jsx-runtime";
import type { MuiColor } from "../../../../../ui/colors";
import React from "react";
import { ExpressionOperationMemberView } from "../../../../../../components/activities/ReachTheNumber/MainEquation/expression-operation-member/ExpressionOperationMember";
import { ExpressionMember } from "../expression-member";
import type { ExpressionMemberChoice } from "../expression-member-choice";

export class ExpressionOperationMember extends ExpressionMember {

  public color: MuiColor;

  constructor(choices: ExpressionMemberChoice[]) {
    super(choices);
    this.color = 'info';
  }

  public renderMath(): string {
    return this.choice.mathSymbol;
  }

  public renderViewMath(): string {
    return this.choice.viewSymbol;
  }

  public renderView(): JSX.Element {
    return React.createElement(ExpressionOperationMemberView, { member: this });
  }
}