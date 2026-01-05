import { ExpressionOperationMemberChoice } from '../expression-member-choice';

export class LeftAbs extends ExpressionOperationMemberChoice {
  constructor() {
    super('|', 'abs(');
  }
}