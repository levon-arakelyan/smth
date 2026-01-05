export class ExpressionMemberChoice {
  public visualSymbol: string;
  public calculationSymbol: string;

  constructor(visual: string, calculation?: string) {
    this.visualSymbol = visual;
    this.calculationSymbol = calculation ?? this.visualSymbol;
  }
}

export class ExpressionNumberMemberChoice extends ExpressionMemberChoice {
  constructor(n: number) {
    super(`${n}`);
  }
}

export class ExpressionPowerMemberChoice extends ExpressionMemberChoice {
  constructor(n: number) {
    super(`${n}`,`^${n}`);
  }
}

export type OperationConstructor = new (...args: any[]) => ExpressionOperationMemberChoice;
export class ExpressionOperationMemberChoice extends ExpressionMemberChoice {

}

