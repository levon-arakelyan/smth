import { ExpressionBuilder as Expr } from "../../../../core/activities/ReachTheNumber/expressions/expression-builder";
import { Addition } from "../../../../core/activities/ReachTheNumber/expressions/members/expression-operation-members/addition";
import { Division } from "../../../../core/activities/ReachTheNumber/expressions/members/expression-operation-members/division";
import { Factorial } from "../../../../core/activities/ReachTheNumber/expressions/members/expression-operation-members/factorial";
import { Multiplication } from "../../../../core/activities/ReachTheNumber/expressions/members/expression-operation-members/multiplication";
import { Subtraction } from "../../../../core/activities/ReachTheNumber/expressions/members/expression-operation-members/subtraction";
import { AbsEnd } from "../../../../core/activities/ReachTheNumber/expressions/members/expression-wrapper-members/abs-end";
import { AbsStart } from "../../../../core/activities/ReachTheNumber/expressions/members/expression-wrapper-members/abs-start";

export interface ILevel {
  start: number;
  goal: number;
  expr: Expr;
}

const levels: ILevel[] = [];
levels[0] = {
  start: 1,
  goal: 19,
  expr: new Expr()
    .ops(Addition)
    .nums(4, 5)
};
levels[1] = {
  start: 10,
  goal: 14,
  expr: new Expr()
    .ops(Division, Addition)
    .nums(6, 8)
};
levels[2] = {
  start: 5,
  goal: 31,
  expr: new Expr()
    .ops(Addition, Subtraction)
    .nums(7, 10)
};
levels[3] = {
  start: 1,
  goal: 24,
  expr: new Expr()
    .ops(Multiplication, Subtraction)
    .nums(12, 15)
};
levels[4] = {
  start: 0,
  goal: 99,
  expr: new Expr()
    .ops(Multiplication, Addition)
    .nums(10)
    .ops(Multiplication, Addition)
    .nums(3)
};
  // {
  //   start: 8,
  //   goal: 59,
  //   expr: new Expr()
  //     .ops(Addition, Division, Subtraction)
  //     .nums(2, 3, 5)
  // }
export { levels };