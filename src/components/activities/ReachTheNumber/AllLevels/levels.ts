import { Addition } from "../../../../core/activities/ReachTheNumber/expressions/operations/addition";
import { Multiplication } from "../../../../core/activities/ReachTheNumber/expressions/operations/multiplication";
import { Subtraction } from "../../../../core/activities/ReachTheNumber/expressions/operations/subtraction";
import type { ReachTheNumberLevelProps } from "../../../../core/activities/ReachTheNumber/props";

export const levels: ReachTheNumberLevelProps[] = [
  {
    level: 1,
    start: 1,
    goal: 19,
    steps: [[Addition], [4, 5]]
  }, {
    level: 2,
    start: 5,
    goal: 31,
    steps: [[Addition, Subtraction], [7, 10]]
  }, {
    level: 3,
    start: 8,
    goal: 9,
    steps: [[Multiplication, Subtraction], [4, 9]]
  }
]