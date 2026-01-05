import { ExpressionOperationMemberChoice } from '../expression-member-choice';

export class Division extends ExpressionOperationMemberChoice {
  constructor() {
    super('÷', '/', ' ÷ ');
  }
}