import { ExpressionOperationMemberChoice } from '../expression-member-choice';

export class Equality extends ExpressionOperationMemberChoice {
  constructor() {
    super('=', '=', ' = ');
  }
}