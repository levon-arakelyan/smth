import type { MuiColor } from '../../../../ui/colors';
import { ExpressionMemberChoice } from './expression-member-choice';

export abstract class ExpressionMember {
  public id: string = '';
  public choices: ExpressionMemberChoice[] = [];
  public choiceIndex: number;
  public submember?: ExpressionMember;
  public abstract color: MuiColor;
  public abstract render(checkChoices?: boolean): string;

  constructor (choices: ExpressionMemberChoice[]) {
    this.choices = choices;
    this.choiceIndex = 0;
  }

  public get choice(): ExpressionMemberChoice {
    return this.choices[this.choiceIndex]
  }

  public setId(index: number) {
    this.id = index.toString();
  }

  public setSubmember(sub: ExpressionMember): void {
    this.submember = sub;
  }

  public clone(): ExpressionMember {
    const Cls = this.constructor as new (choices: ExpressionMemberChoice[]) => ExpressionMember;
    const cloned = new Cls(this.choices.map(c => new ExpressionMemberChoice(c.visualSymbol, c.calculationSymbol)));
    cloned.choiceIndex = this.choiceIndex;
    cloned.id = this.id;
    if (this.submember) {
      cloned.submember = this.submember.clone();
    }
    return cloned;
  }
}

export class ExpressionNumberMember extends ExpressionMember {
  public color: MuiColor;

  constructor(choices: ExpressionMemberChoice[]) {
    super(choices);
    this.color = 'success';
  }

  public render(checkChoices = false): string {
    const { submember: sub, choice, choices } = this;
    if (!sub) {
      return choice.visualSymbol;
    }

    if (!checkChoices && (sub.choices.length > 1 || choices.length > 1)) {
      return choice.visualSymbol;
    }

    return `${choice.visualSymbol}^{${sub.render()}}`;
  }

}

export class ExpressionPowerMember extends ExpressionMember {
  public color: MuiColor;

  constructor(choices: ExpressionMemberChoice[]) {
    super(choices);
    this.color = 'success';
  }

  public render(): string {
    return this.choice.visualSymbol;
  }
}

export class ExpressionOperationMember extends ExpressionMember {
  public color: MuiColor;

  constructor(choices: ExpressionMemberChoice[]) {
    super(choices);
    this.color = 'info';
  }

  public render(): string {
    return this.choice.visualSymbol;
  }
}

