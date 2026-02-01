import { ExpressionMemberChoice } from "../expression-member-choice";

export class ParenthesisEnd extends ExpressionMemberChoice {
  constructor() {
    super('\\Large)', ')', ')');
  }
}