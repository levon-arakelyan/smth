import { ExpressionMemberChoice } from '../expression-member-choice';

export class Addition extends ExpressionMemberChoice {
  constructor() {
    super('~+~', '+', '+');
  }
}