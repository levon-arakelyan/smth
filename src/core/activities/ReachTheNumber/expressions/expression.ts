import * as math from 'mathjs';
import type { JSX } from '@emotion/react/jsx-runtime';
import { Abs } from './members/operation-members/abs';
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
    return Number(this._start.choices[0].visualSymbol);
  }
  private end: ExpressionOperationMember;
  private _members: ExpressionMember[] = [];
  public get members(): ExpressionMember[] {
    return this._members;
  }

  constructor(start: number, members: ExpressionMember[]) {
    this._start = new ExpressionNumberMember([new ExpressionNumberMemberChoice(start)]);
    this.end = new ExpressionOperationMember([new Equality()]);
    this._members = [...members.map(m => m.clone())].map((member, i) => {
      member.setId(i);
      return member;
    });
  }

  public get(): ExpressionMember[] {
    return [this._start, ...this.members, this.end];
  }

  public getEquality(): string {
    const equality = this.members.map(x => {
      const choice = x.choices[x.selectedChoiceIndex];
      return choice.visualSymbol;
    }).join(' ');
    return `${this.start} ${equality} = ${this.calculate()}`
  }

  public calculate(): number {
    try {
      return math.round(math.evaluate(this.getForCalculation()), 2);
    } catch {
      return NaN;
    }
  }

  private getForCalculation(): string {
    return new Abs().parse(this.parseForCalculation());
  }

  private parseForCalculation(): string {
    const equality = this.members.map(x => {
      const choice = x.choices[x.selectedChoiceIndex];
      return choice.mathSymbol;
    }).join('');

    return `${this.start}${equality}`
  }
}