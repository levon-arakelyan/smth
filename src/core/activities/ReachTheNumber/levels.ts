import { ExpressionBuilder as Expr } from "./expressions/expression-builder";
import type { ExpressionMember } from "./expressions/members/expression-member";
import { Addition } from "./expressions/members/expression-operation-members/addition";
import { Division } from "./expressions/members/expression-operation-members/division";
import { Multiplication } from "./expressions/members/expression-operation-members/multiplication";
import { Subtraction } from "./expressions/members/expression-operation-members/subtraction";

export interface ILevel {
  level?: number;
  start: number;
  goal: number;
  members: ExpressionMember[];
  authorSteps: number
}

export const levels: ILevel[] = [
  {
    start: 8,
    goal: 20,
    authorSteps: 3,
    expr: new Expr()
      .ops(Addition)
      .nums(2, 4),
  }, {
    start: 1,
    goal: 19,
    authorSteps: 4,
    expr: new Expr()
      .ops(Addition)
      .nums(4, 5),
  }, {
    start: 5,
    goal: 37,
    authorSteps: 4,
    expr: new Expr()
      .ops(Addition)
      .nums(7, 11),
  }, {
    start: 16,
    goal: 4,
    authorSteps: 3,
    expr: new Expr()
      .ops(Division, Addition)
      .nums(8),
  }, {
    start: 7,
    goal: 9,
    authorSteps: 4,
    expr: new Expr()
      .ops(Multiplication, Subtraction)
      .nums(3),
  }, {
    start: 20,
    goal: 21,
    authorSteps: 3,
    expr: new Expr()
      .ops(Addition, Subtraction)
      .nums(5, 9),
  }, {
    start: 9,
    goal: 16,
    authorSteps: 4,
    expr: new Expr()
      .ops(Multiplication, Division)
      .nums(4, 3),
  }, {
    start: 18,
    goal: 4,
    authorSteps: 4,
    expr: new Expr()
      .ops(Addition, Division)
      .nums(5, 9),
  }, {
    start: 55,
    goal: 25,
    authorSteps: 5,
    expr: new Expr()
      .ops(Addition, Subtraction, Division)
      .nums(11),
  }, {
    start: 20,
    goal: 48,
    authorSteps: 4,
    expr: new Expr()
      .ops(Addition, Multiplication, Division)
      .nums(3, 10),
  }, {
    start: 4,
    goal: 48,
    authorSteps: 5,
    expr: new Expr()
      .ops(Addition, Subtraction)
      .nums(4)
      .ops(Addition, Subtraction)
      .nums(4)
  },
].map((lvl, i) => ({...lvl, level: i + 1, members: lvl.expr.build()}));