import type { Expression } from "../expressions/expression";
import type { IHistoryStep } from "./ihistory-step";

export class History {
  public steps: IHistoryStep[] = [];

  public get last(): IHistoryStep {
    return this.steps[this.steps.length - 1];
  }

  public insert(expr: Expression): void {
    this.steps = this.steps.filter(x => !x.discarded);
    this.steps.push({expr, discarded: false});
  }

  public clear(onCleared: () => void): void {
    if (this.isEmpty()) {
      return;
    }
    this.steps = [];
    onCleared();
  }

  public discardFrom(index: number | null,  onDiscarded: (step: IHistoryStep) => void): void  {
    if (index == null || index >= this.steps.length) {
      return;
    }
    const step = this.steps[index];
    this.steps.forEach((x, i) => {
      if (i >= index) {
        x.discarded = true;
      }
    });

    onDiscarded(step);
  }

  public revertDiscarded(): void {
    this.steps.forEach(x => x.discarded = false);
  }

  public removeLast(onRemoved: (step: IHistoryStep) => void): void {
    if (this.isEmpty()) {
      return;
    }
    this.steps = this.steps.filter(x => !x.discarded);

    onRemoved(this.steps.pop()!);
  }

  public isEmpty(): boolean {
    return !this.steps.length;
  }

  public hasDiscarded(): boolean {
    return this.steps.some(x => x.discarded);
  }

  public new(): History {
    const newHistory = new History();
    newHistory.steps = this.steps.map(x => ({
      discarded: x.discarded,
      expr: x.expr
    }));
    return newHistory;
  }
}