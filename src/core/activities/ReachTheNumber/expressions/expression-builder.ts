import { ExpressionNumberMember } from "./members/expression-number-member";
import { ExpressionOperationMember } from "./members/expression-operation-members/expression-operation-member";
import { ExpressionPowerMember } from "./members/expression-power-member";
import type { ExpressionMember } from "./members/expression-member";
import { ExpressionMemberChoice, type ExpressionMemberChoiceConstructor } from "./members/expression-member-choice";
import { AbsStart } from "./members/expression-wrapper-members/abs-start";
import { AbsEnd } from "./members/expression-wrapper-members/abs-end";
import { ParenthesisStart } from "./members/expression-wrapper-members/parenthesis-start";
import { ParenthesisEnd } from "./members/expression-wrapper-members/parenthesis-end";
import { Factorial } from "./members/expression-operation-members/factorial";

export class ExpressionBuilder {
  private members: ExpressionMember[] = [];
  private wrapperStack: ExpressionMember[] = []

  public nums(...choices: number[]): this {
    const member = new ExpressionNumberMember(choices.map(n => new ExpressionMemberChoice(n)));
    this.push(member);
    return this;
  }

  public ops(...choices: ExpressionMemberChoiceConstructor[]): this {
    const member = new ExpressionOperationMember(choices.map(Op => new Op()));
    this.push(member);
    return this;
  }

  public pows(...choices: number[]): this {
    const last = this.getLastMember();

    if (!(last instanceof ExpressionNumberMember)) {
      throw new Error(".pows() must be called right after .nums()");
    }

    const power = new ExpressionPowerMember(choices.map(n => new ExpressionMemberChoice(n)));
    last.setSubmembers([power]);
    return this;
  }

  public abs(start: boolean = false): this {
    const member = new ExpressionOperationMember([start ? new AbsStart() : new AbsEnd()]);
    this.push(member);
    return this;
  }

  public paren(start: boolean = false): this {
    const member = new ExpressionOperationMember([start ? new ParenthesisStart() : new ParenthesisEnd()]);
    this.push(member);
    return this;
  }

  public fact(): this {
    this.push(new ExpressionOperationMember([new Factorial()]));
    return this;
  }

  public build(): ExpressionMember[] {
    return this.members;
  }

  private push(member: ExpressionMember) {
    if (this.wrapperStack.length > 0) {
      const currentWrapper = this.wrapperStack[this.wrapperStack.length - 1];
      currentWrapper.submembers.push(member);
    } else {
      this.members.push(member);
    }
  }

  private getLastMember(): ExpressionMember | undefined {
    if (this.wrapperStack.length > 0) {
      const currentWrapper = this.wrapperStack[this.wrapperStack.length - 1];
      const subs = currentWrapper.submembers;
      return subs[subs.length - 1];
    }
    return this.members[this.members.length - 1];
  }
}
