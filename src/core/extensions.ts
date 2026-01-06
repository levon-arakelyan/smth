import { Power } from "./activities/ReachTheNumber/expressions/members/expression-operation-members/power";

declare global {
  interface Array<T> {
    /**
     * Adds powers to a numeric array using Power.get().
     * Example: [4, 9].withPowers([3, 4])
     */
    withPowers(this: number[], powers: number[]): (number | Power[])[];
  }
}

Array.prototype.withPowers = function (this: number[], powers: number[]): (number | Power[])[] {
  return [...this, Power.get(powers)];
};
