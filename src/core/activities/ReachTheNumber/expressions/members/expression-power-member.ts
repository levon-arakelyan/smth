import type { JSX } from "@emotion/react/jsx-runtime";
import type { MuiColor } from "../../../../ui/colors";
import React from "react";
import { ExpressionPowerMemberView } from "../../../../../components/activities/ReachTheNumber/MainEquation/expression-power-member/ExpressionPowerMember";
import { ExpressionMemberChoice } from "./expression-member-choice";
import { ExpressionMember } from "./expression-member";

export class ExpressionPowerMember extends ExpressionMember {

  public color: MuiColor;

  constructor(choices: ExpressionMemberChoice[]) {
    super(choices);
    this.color = 'success';
  }

  public renderMath(): string {
    return this.choice.mathSymbol;
  }

  public renderViewMath(): string {
    throw this.choice.viewSymbol;
  }

  public renderView(): JSX.Element {
    return React.createElement(ExpressionPowerMemberView, { member: this });
  }
}