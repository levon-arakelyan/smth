import type { JSX } from "@emotion/react/jsx-runtime";
import type { MuiColor } from "../../../../ui/colors";
import React from "react";
import { ExpressionPowerMemberView } from "../../../../../components/activities/ReachTheNumber/MainEquation/expression-power-member/ExpressionPowerMemberView";
import { ExpressionMemberChoice } from "./expression-member-choice";
import { ExpressionMember } from "./expression-member";

export class ExpressionPowerMember extends ExpressionMember {
  public color: MuiColor;

  constructor(choices: ExpressionMemberChoice[]) {
    super(choices);
    this.color = 'success';
  }

  public renderJSX(): JSX.Element {
    return React.createElement(ExpressionPowerMemberView, { member: this });
  }
}