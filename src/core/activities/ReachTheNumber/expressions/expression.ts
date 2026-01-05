import * as math from 'mathjs';
import type { JSX } from '@emotion/react/jsx-runtime';
import { Equality } from './members/operation-members/equality';
import { ExpressionMember, ExpressionNumberMember, ExpressionOperationMember } from './members/expression-member';
import { ExpressionNumberMemberChoice } from './members/expression-member-choice';
import { LatexService } from '../../../services/latex/latex-service';

export interface ICalculationResult {
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
      if (cloned.submember) {
        cloned.submember.setId(++j);
      }
      this._members.push(cloned)
    }
    this.start = new ExpressionNumberMember([new ExpressionNumberMemberChoice(start)]);
    this.start.setId(++j);
    this._end = new ExpressionOperationMember([new Equality()]);
    this._end.setId(++j);
  }

  public full(): ExpressionMember[] {
    return [this.start, ...this.members, this._end];
  }

  public render(renderResult: boolean = false): string {
    let equality = this.full().map(x => x.render(renderResult)).join('');
    if (renderResult) {
      const result = new ExpressionNumberMember([new ExpressionNumberMemberChoice(this.calculate())])
      equality = `${equality}${result.render()}`
    }
    return LatexService.render(equality);
  }

  public calculate(): number {
    try {
      return math.round(math.evaluate(this.getMathExpression()), 2);
    } catch {
      return NaN;
    }
  }

  private getMathExpression(): string {
    const equality = this.getChoices().map(x => x.calculationSymbol).join('');
    return `${this.start.choice.calculationSymbol}${equality}`
  }

  private getChoices(): ExpressionNumberMemberChoice[] {
    const res: ExpressionNumberMemberChoice[] = [];

    this.members.forEach(x => {
      const choice = x.choice;
      let submemberChoice = x.submember?.choice;

      res.push(choice);
      if (submemberChoice) {
        res.push(submemberChoice);
      }
    });
    return res;
  }
}