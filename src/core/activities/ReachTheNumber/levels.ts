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
    start: 1,
    goal: 19,
    authorSteps: 4,
    expr: new Expr()
      .ops(Addition)
      .nums(4, 5),
  }, {
    start: 10,
    goal: 14,
    authorSteps: 4,
    expr: new Expr()
      .ops(Division, Addition, Subtraction, Multiplication)
      .nums(6, 8),
  }, {
    start: 5,
    goal: 31,
    authorSteps: 6,
    expr: new Expr()
      .ops(Addition, Subtraction)
      .nums(7, 10),
  }, {
    start: 1,
    goal: 24,
    authorSteps: 4,
    expr: new Expr()
      .ops(Multiplication, Subtraction)
      .nums(12, 15),
  }, {
    start: 0,
    goal: 73,
    authorSteps: 3,
    expr: new Expr()
      .ops(Multiplication, Addition)
      .nums(10)
      .ops(Multiplication, Addition)
      .nums(3),
  },
  {
    start: 1,
    goal: 19,
    authorSteps: 999,
    expr: new Expr()
      .ops(Addition)
      .nums(4, 5),
  }, {
    start: 10,
    goal: 14,
    authorSteps: 999,
    expr: new Expr()
      .ops(Division, Addition)
      .nums(6, 8),
  }, {
    start: 5,
    goal: 31,
    authorSteps: 999,
    expr: new Expr()
      .ops(Addition, Subtraction)
      .nums(7, 10),
  }, {
    start: 1,
    goal: 24,
    authorSteps: 999,
    expr: new Expr()
      .ops(Multiplication, Subtraction)
      .nums(12, 15),
  }, {
    start: 0,
    goal: 99,
    authorSteps: 999,
    expr: new Expr()
      .ops(Multiplication, Addition)
      .nums(10)
      .ops(Multiplication, Addition)
      .nums(3),
  },{
    start: 1,
    goal: 19,
    authorSteps: 999,
    expr: new Expr()
      .ops(Addition)
      .nums(4, 5),
  }, {
    start: 10,
    goal: 14,
    authorSteps: 999,
    expr: new Expr()
      .ops(Division, Addition)
      .nums(6, 8),
  }, {
    start: 5,
    goal: 31,
    authorSteps: 999,
    expr: new Expr()
      .ops(Addition, Subtraction)
      .nums(7, 10),
  }, {
    start: 1,
    goal: 24,
    authorSteps: 999,
    expr: new Expr()
      .ops(Multiplication, Subtraction)
      .nums(12, 15),
  }, {
    start: 0,
    goal: 99,
    authorSteps: 999,
    expr: new Expr()
      .ops(Multiplication, Addition)
      .nums(10)
      .ops(Multiplication, Addition)
      .nums(3),
  },{
    start: 0,
    goal: 99,
    authorSteps: 999,
    expr: new Expr()
      .ops(Multiplication, Addition)
      .nums(10)
      .ops(Multiplication, Addition)
      .nums(3),
  },
].map((lvl, i) => ({...lvl, level: i + 1, members: lvl.expr.build()}));