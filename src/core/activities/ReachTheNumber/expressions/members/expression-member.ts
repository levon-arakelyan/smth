import type { MuiColor } from '../../../../ui/colors';
import { ExpressionMemberChoice } from './expression-member-choice';

export abstract class ExpressionMember {
  public id: string = '';
  public choices: ExpressionMemberChoice[] = [];
  public selectedChoiceIndex: number;
  public submember?: ExpressionMember;
  public abstract color: MuiColor;

  constructor (choices: ExpressionMemberChoice[]) {
    this.choices = choices;
    this.selectedChoiceIndex = 0;
  }

  public setId(index: number) {
    this.id = index.toString();
  }

  public setSubmember(sub: ExpressionMember): void {
    this.submember = sub;
  }

  public clone(): ExpressionMember {
    const Cls = this.constructor as new (choices: ExpressionMemberChoice[]) => ExpressionMember;
    const cloned = new Cls(this.choices.map(c => new ExpressionMemberChoice(c.mainEquationSymbol, c.calculationSymbol, c.historySymbol)));
    cloned.selectedChoiceIndex = this.selectedChoiceIndex;
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
}

export class ExpressionPowerMember extends ExpressionMember {
  public color: MuiColor;

  constructor(choices: ExpressionMemberChoice[]) {
    super(choices);
    this.color = 'success';
  }
}

export class ExpressionOperationMember extends ExpressionMember {
  public color: MuiColor;

  constructor(choices: ExpressionMemberChoice[]) {
    super(choices);
    this.color = 'info';
  }
}

