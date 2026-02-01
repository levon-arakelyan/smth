import * as math from 'mathjs';
import { Equality } from './members/expression-operation-members/equality';
import { ExpressionNumberMember } from './members/expression-number-member';
import { ExpressionOperationMember } from './members/expression-operation-members/expression-operation-member';
import { ExpressionMember } from './members/expression-member';
import { ExpressionMemberChoice } from './members/expression-member-choice';

export interface IHandledResult {
  result?: number;
  errorIcon?: string;
  errorText?: string;
}

export class Expression {
  public start: ExpressionNumberMember;
  private _end: ExpressionOperationMember;
  public get end(): ExpressionMember {
    return this._end;
  }
  private _members: ExpressionMember[] = [];
  public get members(): ExpressionMember[] {
    return this._members;
  }

  constructor(start: number, members: ExpressionMember[]) {
    let j = 0;
    for (let i = 0; i < members.length; i++) {
      const cloned = members[i].clone();
      cloned.setId(j++);
      if (cloned.submembers?.length) {
        cloned.submembers.forEach(x => x.setId(j++));
      }
      this._members.push(cloned)
    }
    this.start = new ExpressionNumberMember([new ExpressionMemberChoice(start)]);
    this.start.setId(j++);
    this._end = new ExpressionOperationMember([new Equality()]);
    this._end.setId(j++);
  }

  public full(): ExpressionMember[] {
    return [this.start, ...this.members, this._end];
  }

  public renderHistory(): string {
    const full = this.full();
    let equality = full.map((x, i) => x.renderHistoryLatex(full[i - 1])).join('');
    const result = new ExpressionNumberMember([new ExpressionMemberChoice(this.calculate())])
    return `${equality}${result.renderHistoryLatex()}`;
  }

  public calculate(): number {
    try {
      return math.floor(math.evaluate(this.getMathExpression()), 2);
    } catch {
      return NaN;
    }
  }

  private getMathExpression(): string {
    const equality = this.members.map(x => x.renderMathJS()).join('');
    return `${this.start.choice.mathSymbol}${equality}`
  }
}