import { ExpressionMemberChoice } from "../expression-member-choice";

export class ParenthesisStart extends ExpressionMemberChoice {
  constructor() {
    super('\\Large(', '(', '(');
  }
}