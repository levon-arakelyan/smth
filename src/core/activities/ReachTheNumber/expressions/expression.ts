import * as math from 'mathjs';
import type { JSX } from '@emotion/react/jsx-runtime';
import { Equality } from './members/operation-members/equality';
import { ExpressionMember, ExpressionNumberMember, ExpressionOperationMember } from './members/expression-member';
import { ExpressionNumberMemberChoice } from './members/expression-member-choice';

export interface ICalculationResult {
  result?: number;
  errorIcon?: JSX.Element;
  errorText?: string;
}

export class Expression {
  private _start: ExpressionNumberMember;
  public get start(): number {
    return Number(this._start.choices[0].mainEquationSymbol);
  }
  private end: ExpressionOperationMember;
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
    this._start = new ExpressionNumberMember([new ExpressionNumberMemberChoice(start)]);
    this._start.setId(++j);
    this.end = new ExpressionOperationMember([new Equality()]);
    this.end.setId(++j);
  }

  public full(): ExpressionMember[] {
    return [this._start, ...this.members, this.end];
  }

  public getEquality(): string {
    const equality = this.getChoices().map(x => x.historySymbol).join('');
    return `${this.start}${equality} = ${this.calculate()}`
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
    return `${this.start}${equality}`
  }

  private getChoices(): ExpressionNumberMemberChoice[] {
    const res: ExpressionNumberMemberChoice[] = [];

    this.members.forEach(x => {
      const choice = x.choices[x.selectedChoiceIndex];
      let submemberChoice: ExpressionNumberMemberChoice | null = null;

      if (x.submember) {
        submemberChoice = x.submember.choices[x.submember.selectedChoiceIndex];
      }

      res.push(choice);
      if (!!submemberChoice) {
        res.push(submemberChoice);
      }
    });
    return res;
  }
}