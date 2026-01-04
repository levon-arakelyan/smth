import { ExpressionBuilder as Expr } from "../../../../core/activities/ReachTheNumber/expressions/expression-builder";
import { Addition } from "../../../../core/activities/ReachTheNumber/expressions/members/operation-members/addition";
import { Multiplication } from "../../../../core/activities/ReachTheNumber/expressions/members/operation-members/multiplication";
import { Subtraction } from "../../../../core/activities/ReachTheNumber/expressions/members/operation-members/subtraction";
import type { ReachTheNumberLevelProps } from "../../../../core/activities/ReachTheNumber/props";

export const levels: ReachTheNumberLevelProps[] = [
  {
    level: 1,
    start: 1,
    goal: 19,
    members: Expr
      .ops(Addition)
      .nums(4, 5)
    .build()
  }, {
    level: 2,
    start: 5,
    goal: 31,
    members: Expr
      .ops(Addition, Subtraction)
      .nums(7, 10)
    .build()
  }, {
    level: 3,
    start: 8,
    goal: 9,
    members: Expr
      .ops(Multiplication, Subtraction)
      .nums(1, 2)
    .build()
  }
]