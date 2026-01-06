import * as math from 'mathjs';
import type { JSX } from '@emotion/react/jsx-runtime';
import { Equality } from './members/expression-operation-members/equality';
import { LatexService } from '../../../services/latex/latex-service';
import { ExpressionNumberMember } from './members/expression-number-member';
import { ExpressionOperationMember } from './members/expression-operation-members/expression-operation-member';
import { ExpressionMember } from './members/expression-member';
import { ExpressionMemberChoice } from './members/expression-member-choice';

export interface IHandledResult {
  result?: number;
  errorIcon?: JSX.Element;
  errorText?: string;
}

export class Expression {
  public start: ExpressionNumberMember;
  private _end: ExpressionOperationMember;
  private _members: ExpressionMember[] = [];
  public get members(): ExpressionMember[] {
    return this._members;
  }

  constructor(start: number, members: ExpressionMember[]) {
    let j = 0;
    for (let i = 0; i < members.length; i++, j++) {
      const cloned = members[i].clone();
      cloned.setId(j);
      if (cloned.submembers?.length) {
        cloned.submembers.forEach(x => x.setId(++j));
      }
      this._members.push(cloned)
    }
    this.start = new ExpressionNumberMember([new ExpressionMemberChoice(start)]);
    this.start.setId(++j);
    this._end = new ExpressionOperationMember([new Equality()]);
    this._end.setId(++j);
  }

  public full(): ExpressionMember[] {
    return [this.start, ...this.members, this._end];
  }

  public render(): string {
    let equality = this.full().map(x => x.renderViewMath()).join('');
    const result = new ExpressionNumberMember([new ExpressionMemberChoice(this.calculate())])
    return LatexService.render(`${equality}${result.renderViewMath()}`)
  }

  public calculate(): number {
    try {
      return math.round(math.evaluate(this.getMathExpression()), 2);
    } catch {
      return NaN;
    }
  }

  private getMathExpression(): string {
    const equality = this.members.map(x => x.renderMath()).join('');
    return `${this.start.choice.mathSymbol}${equality}`
  }
}