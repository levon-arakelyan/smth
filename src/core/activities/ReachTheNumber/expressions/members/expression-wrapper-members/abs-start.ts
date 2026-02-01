import { ExpressionMemberChoice } from "../expression-member-choice";

export class AbsStart extends ExpressionMemberChoice {
  constructor() {
    super('\\Large|', 'abs(', '|');
  }
}