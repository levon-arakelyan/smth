import type { ExpressionMemberViewProps } from "../../../../../core/activities/ReachTheNumber/props";
import { Latex } from "../../Latex.tsx/Latex";

export function ExpressionPowerMemberView({ member }: ExpressionMemberViewProps) {
  return member.choices.length <= 1 ?
    <Latex mathExpr={member.choice.viewSymbol}></Latex> :
    member.renderBaseView();
}