import { ExpressionNumberMember } from "./members/expression-number-member";
import { ExpressionOperationMember } from "./members/expression-operation-members/expression-operation-member";
import { ExpressionPowerMember } from "./members/expression-power-member";
import type { ExpressionMember } from "./members/expression-member";
import { ExpressionMemberChoice, type ExpressionMemberChoiceConstructor } from "./members/expression-member-choice";

export class ExpressionBuilder {
  private members: ExpressionMember[] = [];

  private constructor() {}

  // Entry points (static)
  public static nums(...choices: number[]): ExpressionBuilder {
    return new ExpressionBuilder().nums(...choices);
  }

  public static pows(...choices: number[]): ExpressionBuilder {
    return new ExpressionBuilder().pows(...choices);
  }

  public static ops(...choices: ExpressionMemberChoiceConstructor[]): ExpressionBuilder {
    return new ExpressionBuilder().ops(...choices);
  }

  // Chainable instance methods
  public nums(...choices: number[]): this {
    const member = new ExpressionNumberMember(choices.map(n => new ExpressionMemberChoice(n.toString())));
    this.members.push(member);
    return this;
  }

  public pows(...choices: number[]): this {
    const member = new ExpressionPowerMember(choices.map(n => new ExpressionMemberChoice(n.toString())));
    this.members[this.members.length - 1].setSubmembers([member]);
    return this;
  }

  public ops(...choices: ExpressionMemberChoiceConstructor[]): this {
    const member = new ExpressionOperationMember(choices.map(Op => new Op()));
    this.members.push(member);
    return this;
  }

  public build(): ExpressionMember[] {
    return this.members;
  }
}
