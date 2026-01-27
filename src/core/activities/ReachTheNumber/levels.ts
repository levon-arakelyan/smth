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
    authorSteps: 2,
    expr: new Expr()
      .ops(Subtraction, Multiplication)
      .nums(4)
      .ops(Subtraction, Multiplication)
      .nums(4)
  }, {
    start: 15,
    goal: 4,
    authorSteps: 2,
    expr: new Expr()
      .ops(Division)
      .nums(3, 5)
      .ops(Addition)
      .nums(3, 5)
  }, {
    start: 4,
    goal: 7,
    authorSteps: 1,
    expr: new Expr()
      .ops(Addition, Multiplication, Subtraction, Division)
      .nums(4)
      .ops(Addition, Multiplication, Subtraction, Division)
      .nums(4)
      .ops(Addition, Multiplication, Subtraction, Division)
      .nums(4)
  }, {
    start: 6,
    goal: -5,
    authorSteps: 2,
    expr: new Expr()
      .ops(Subtraction)
      .nums(2, 5)
  }, {
    start: -6,
    goal: 5,
    authorSteps: 4,
    expr: new Expr()
      .ops(Subtraction)
      .nums(-2, -5)
  }, {
    start: -6,
    goal: 5,
    authorSteps: 4,
    expr: new Expr()
      .ops(Addition, Subtraction)
      .nums(-4, 5)
  }, {
    start: 18,
    goal: 0,
    authorSteps: 4,
    expr: new Expr()
      .ops(Addition, Division)
      .nums(-4, 6)
  }, {
    start: 4,
    goal: -100,
    authorSteps: 4,
    expr: new Expr()
      .ops(Addition, Multiplication)
      .nums(-4, 6)
      .ops(Addition, Multiplication)
      .nums(-4, 6)
  }, {
    start: 4,
    goal: 5,
    authorSteps: 2,
    expr: new Expr()
      .ops(Subtraction, Multiplication)
      .paren(true)
        .nums(5)
        .ops(Addition, Subtraction)
        .nums(2)
      .paren()
  }
].map((lvl, i) => ({...lvl, level: i + 1, members: lvl.expr.build()}));