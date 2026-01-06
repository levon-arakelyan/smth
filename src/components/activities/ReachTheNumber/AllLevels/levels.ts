import { ExpressionBuilder as Expr } from "../../../../core/activities/ReachTheNumber/expressions/expression-builder";
import { Addition } from "../../../../core/activities/ReachTheNumber/expressions/members/expression-operation-members/addition";
import { Division } from "../../../../core/activities/ReachTheNumber/expressions/members/expression-operation-members/division";
import { Multiplication } from "../../../../core/activities/ReachTheNumber/expressions/members/expression-operation-members/multiplication";
import { Subtraction } from "../../../../core/activities/ReachTheNumber/expressions/members/expression-operation-members/subtraction";

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
      // .ops(LeftAbs)
      .nums(2, 3)
      .pows(2, 3)
      .ops(Subtraction, Division)
      .nums(10, 20)
      // .ops(RightAbs)
  }
];