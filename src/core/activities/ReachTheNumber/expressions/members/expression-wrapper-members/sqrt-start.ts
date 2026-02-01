import { ExpressionMemberChoice } from "../expression-member-choice";

export class SqrtStart extends ExpressionMemberChoice {
  constructor() {
    super('\\sqrt{', 'sqrt(');
  }
}