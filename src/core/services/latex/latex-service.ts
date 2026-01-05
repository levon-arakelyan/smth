export class LatexService {
  public static render(mathExpr: string) {
    return `\\( ${mathExpr} \\)`;
  }
}