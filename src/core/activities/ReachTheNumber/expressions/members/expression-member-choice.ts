export class ExpressionMemberChoice {
  public visualSymbol: string;
  public mathSymbol: string;

  constructor(visual: string, math?: string) {
    this.visualSymbol = visual;
    this.mathSymbol = math == null ? this.visualSymbol : math;
  }
}

export class ExpressionNumberMemberChoice extends ExpressionMemberChoice {
  constructor(n: number) {
    super(n.toString());
  }
}

export class ExpressionPowerMemberChoice extends ExpressionMemberChoice {
  constructor(n: number) {
    super(n.toString());
  }
}

export type OperationConstructor = new (...args: any[]) => ExpressionOperationMemberChoice;
export class ExpressionOperationMemberChoice extends ExpressionMemberChoice {

}

