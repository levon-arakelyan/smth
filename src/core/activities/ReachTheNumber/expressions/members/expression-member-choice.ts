export class ExpressionMemberChoice {
  public mainEquationSymbol: string;
  public calculationSymbol: string;
  public historySymbol: string;

  constructor(mainEquation: string, calculation?: string, history?: string) {
    this.mainEquationSymbol = mainEquation;
    this.calculationSymbol = calculation ?? this.mainEquationSymbol;
    this.historySymbol = history ?? this.mainEquationSymbol;
  }
}

export class ExpressionNumberMemberChoice extends ExpressionMemberChoice {
  constructor(n: number) {
    super(n.toString());
  }
}

export class ExpressionPowerMemberChoice extends ExpressionMemberChoice {
  private static powersMap: Record<string, string> = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻'
  };

  constructor(n: number) {
    super(`${n}`,  `^${n}`, ExpressionPowerMemberChoice.toSuperscript(n));
  }

  private static toSuperscript(n: number) {
    return String(n).split('').map(ch => this.powersMap[ch] || ch).join('');
  }
}

export type OperationConstructor = new (...args: any[]) => ExpressionOperationMemberChoice;
export class ExpressionOperationMemberChoice extends ExpressionMemberChoice {

}

