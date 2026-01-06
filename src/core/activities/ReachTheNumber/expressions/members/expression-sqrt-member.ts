// import type { JSX } from "@emotion/react/jsx-runtime";
// import type { MuiColor } from "../../../../ui/colors";
// import React from "react";
// import { ExpressionPowerMemberView } from "../../../../../components/activities/ReachTheNumber/MainEquation/expression-power-member/ExpressionPowerMember";
// import { ChoosableExpressionMember } from "./choosable-expression-member";

// export class ExpressionSqrtMember extends ChoosableExpressionMember {
//   public color: MuiColor;

//   constructor(choices: ChoosableExpressionMember[]) {
//     super(choices);
//     this.color = 'success';
//   }

//   public renderMath(): string {
//     return this.choice.viewSymbol;
//   }

//   public renderView(): JSX.Element {
//     return React.createElement(ExpressionPowerMemberView, { member: this });
//   }
// }