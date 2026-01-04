import { ExpressionOperationMemberChoice } from "../expression-member-choice";

export class LeftParenthesis extends ExpressionOperationMemberChoice {
  constructor() {
    super('(');
  }
}