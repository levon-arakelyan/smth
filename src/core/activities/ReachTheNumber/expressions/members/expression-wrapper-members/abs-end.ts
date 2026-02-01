import { ExpressionMemberChoice } from "../expression-member-choice";

export class AbsEnd extends ExpressionMemberChoice {
  constructor() {
    super('\\Large|', ')', '|');
  }
}