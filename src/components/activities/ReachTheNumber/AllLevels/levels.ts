import { ExpressionBuilder as Expr } from "../../../../core/activities/ReachTheNumber/expressions/expression-builder";
import { Addition } from "../../../../core/activities/ReachTheNumber/expressions/members/operation-members/addition";
import { LeftAbs } from "../../../../core/activities/ReachTheNumber/expressions/members/operation-members/left-abs";
import { Multiplication } from "../../../../core/activities/ReachTheNumber/expressions/members/operation-members/multiplication";
import { RightAbs } from "../../../../core/activities/ReachTheNumber/expressions/members/operation-members/right-abs copy";
import { Subtraction } from "../../../../core/activities/ReachTheNumber/expressions/members/operation-members/subtraction";

export interface ILevel {
  start: number;
  goal: number;
  expr: Expr;
}

export const levels: ILevel[] = [
  {
    start: 1,
    goal: 19,
    expr: Expr
      .ops(Addition)
      .nums(4, 5)
  }, {
    start: 5,
    goal: 31,
    expr: Expr
      .ops(Addition, Subtraction)
      .nums(7, 10)
  }, {
    start: 8,
    goal: 9,
    expr: Expr
      .ops(Multiplication, Subtraction)
      .nums(5, 7)
      .pows(2, 3)
      .ops(Addition)
      .ops(LeftAbs)
      .nums(-5)
      .ops(Addition, Multiplication)
      .ops(LeftAbs)
      .nums(-4, -3, -2)
      .ops(RightAbs)
      .ops(RightAbs)
  }
];