import { ExpressionOperationMemberChoice } from '../expression-member-choice';

export class Multiplication extends ExpressionOperationMemberChoice {
  constructor() {
    super('×', '*', ' × ');
  }
}