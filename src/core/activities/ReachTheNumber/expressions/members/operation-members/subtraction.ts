import { ExpressionOperationMemberChoice } from "../expression-member-choice";

export class Subtraction extends ExpressionOperationMemberChoice {
  constructor() {
    super('−', '-');
  }
}