import type { MuiColor } from '../ui/colors';
import { ExpressionStepType, type ExpressionStep } from './expression-step';

const colorsMap = new Map<ExpressionStepType, MuiColor>([
  [ExpressionStepType.Number, 'success'],
  [ExpressionStepType.Operation, 'info'],
  [ExpressionStepType.Helper, 'secondary'],
  [ExpressionStepType.Equals, 'primary']
]);
export class ExpressionStepOptions {
  public id: string;
  public options: ExpressionStep[] = [];
  public type: ExpressionStepType;
  public selectedId: number;
  public color: MuiColor;

  constructor (options: ExpressionStep[], type: ExpressionStepType, i: number) {
    this.options = options;
    this.type = type;
    this.selectedId = 0;
    this.color = colorsMap.get(this.type) ?? 'primary';
    this.id = `${i}`;
  }
}