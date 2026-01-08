export type ExpressionMemberChoiceConstructor = new (...args: any[]) => ExpressionMemberChoice;
export class ExpressionMemberChoice {
  public viewSymbol: string;
  public mathSymbol: string;
  public historySymbol: string;

  constructor(view: any, math?: any, history?: any) {
    this.viewSymbol = view.toString();
    this.mathSymbol = math?.toString() ?? this.viewSymbol
    this.historySymbol = history?.toString() ?? this.viewSymbol;
  }

  public clone(): ExpressionMemberChoice {
    return new ExpressionMemberChoice(this.viewSymbol, this.mathSymbol, this.historySymbol);
  }
}