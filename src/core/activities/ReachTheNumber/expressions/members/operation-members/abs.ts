import { ExpressionOperationMemberChoice } from '../expression-member-choice';

export class Abs extends ExpressionOperationMemberChoice {
  constructor() {
    super('|');
  }

  public parse(expression: string) {
    const chars = expression.split('');
    const stack: number[] = [];

    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === this.mathSymbol) {
        if (stack.length && chars[stack[stack.length - 1]] === this.mathSymbol) {
          const start = stack.pop()!;
          const inner = chars.slice(start + 1, i).join('');
          const replacement = `abs(${inner})`;
          chars.splice(start, i - start + 1, ...replacement.split(''));
          i = start + replacement.length - 1;
        } else {
          stack.push(i);
        }
      }
    }

    return chars.join('');
  }
}