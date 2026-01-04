import { ExpressionMember, ExpressionNumberMember, ExpressionPowerMember, ExpressionOperationMember } from "./members/expression-member";
import { ExpressionNumberMemberChoice, ExpressionPowerMemberChoice, type OperationConstructor } from "./members/expression-member-choice";

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

  public static ops(...choices: OperationConstructor[]): ExpressionBuilder {
    return new ExpressionBuilder().ops(...choices);
  }

  // Chainable instance methods
  public nums(...choices: number[]): this {
    const member = new ExpressionNumberMember(choices.map(n => new ExpressionNumberMemberChoice(n)));
    this.members.push(member);
    return this;
  }

  public pows(...choices: number[]): this {
    const member = new ExpressionPowerMember(choices.map(n => new ExpressionPowerMemberChoice(n)));
    this.members.push(member);
    return this;
  }

  public ops(...choices: OperationConstructor[]): this {
    const member = new ExpressionOperationMember(choices.map(Op => new Op()));
    this.members.push(member);
    return this;
  }

  public build(): ExpressionMember[] {
    return this.members;
  }
}
