export type ExpressionMemberChoiceConstructor = new (...args: any[]) => ExpressionMemberChoice;
export class ExpressionMemberChoice {
  public viewSymbol: string;
  public mathSymbol: string;

  constructor(view: any, math?: any) {
    this.viewSymbol = view.toString();
    this.mathSymbol = math?.toString() ?? this.viewSymbol
  }

  public clone(): ExpressionMemberChoice {
    return new ExpressionMemberChoice(this.viewSymbol, this.mathSymbol);
  }
}