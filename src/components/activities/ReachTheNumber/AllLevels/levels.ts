import { Addition } from "../../../../core/activities/ReachTheNumber/expressions/operations/addition";
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
  }
]