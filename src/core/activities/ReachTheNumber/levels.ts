import { ExpressionBuilder as Expr } from "./expressions/expression-builder";
import { Addition } from "./expressions/members/expression-operation-members/addition";
import { Division } from "./expressions/members/expression-operation-members/division";
import { Multiplication } from "./expressions/members/expression-operation-members/multiplication";
import { Subtraction } from "./expressions/members/expression-operation-members/subtraction";

export interface ILevel {
  N: number;
  start: number;
  goal: number;
  expr: Expr;
}

export const levels: ILevel[] = [
  {
    N: 1,
    start: 1,
    goal: 19,
    expr: new Expr()
      .ops(Addition)
      .nums(4, 5),
  }, {
    N: 2,
    start: 10,
    goal: 14,
    expr: new Expr()
      .ops(Division, Addition, Subtraction, Multiplication)
      .nums(6, 8),
  }, {
    N: 3,
    start: 5,
    goal: 31,
    expr: new Expr()
      .ops(Addition, Subtraction)
      .nums(7, 10),
  }, //{
  //   N: 4,
  //   start: 1,
  //   goal: 24,
  //   expr: new Expr()
  //     .ops(Multiplication, Subtraction)
  //     .nums(12, 15),
  // }, {
  //   N: 5,
  //   start: 0,
  //   goal: 99,
  //   expr: new Expr()
  //     .ops(Multiplication, Addition)
  //     .nums(10)
  //     .ops(Multiplication, Addition)
  //     .nums(3),
  // },
  // {
  //   N: 6,
  //   start: 1,
  //   goal: 19,
  //   expr: new Expr()
  //     .ops(Addition)
  //     .nums(4, 5),
  // }, {
  //   N: 7,
  //   start: 10,
  //   goal: 14,
  //   expr: new Expr()
  //     .ops(Division, Addition)
  //     .nums(6, 8),
  // }, {
  //   N: 8,
  //   start: 5,
  //   goal: 31,
  //   expr: new Expr()
  //     .ops(Addition, Subtraction)
  //     .nums(7, 10),
  // }, {
  //   N: 9,
  //   start: 1,
  //   goal: 24,
  //   expr: new Expr()
  //     .ops(Multiplication, Subtraction)
  //     .nums(12, 15),
  // }, {
  //   N: 10,
  //   start: 0,
  //   goal: 99,
  //   expr: new Expr()
  //     .ops(Multiplication, Addition)
  //     .nums(10)
  //     .ops(Multiplication, Addition)
  //     .nums(3),
  // },{
  //   N: 11,
  //   start: 1,
  //   goal: 19,
  //   expr: new Expr()
  //     .ops(Addition)
  //     .nums(4, 5),
  // }, {
  //   N: 12,
  //   start: 10,
  //   goal: 14,
  //   expr: new Expr()
  //     .ops(Division, Addition)
  //     .nums(6, 8),
  // }, {
  //   N: 13,
  //   start: 5,
  //   goal: 31,
  //   expr: new Expr()
  //     .ops(Addition, Subtraction)
  //     .nums(7, 10),
  // }, {
  //   N: 14,
  //   start: 1,
  //   goal: 24,
  //   expr: new Expr()
  //     .ops(Multiplication, Subtraction)
  //     .nums(12, 15),
  // }, {
  //   N: 15,
  //   start: 0,
  //   goal: 99,
  //   expr: new Expr()
  //     .ops(Multiplication, Addition)
  //     .nums(10)
  //     .ops(Multiplication, Addition)
  //     .nums(3),
  // },{
  //   N: 16,
  //   start: 0,
  //   goal: 99,
  //   expr: new Expr()
  //     .ops(Multiplication, Addition)
  //     .nums(10)
  //     .ops(Multiplication, Addition)
  //     .nums(3),
  // },
];