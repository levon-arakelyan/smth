import type { JSX } from "@emotion/react/jsx-runtime";
import type { MuiColor } from "../../../../../core/ui/colors";
import React from "react";
import { ExpressionMemberView } from "../../../../../components/activities/ReachTheNumber/MainEquation/expression-member/ExpressionMemberView";
import { ExpressionMemberChoice } from "./expression-member-choice";

export abstract class ExpressionMember {
  public id: string = '';
  public choices: ExpressionMemberChoice[] = [];
  public choiceIndex: number;
  public submembers: ExpressionMember[] = [];
  public onChoiceUpdated?: (i: number) => void;

  public abstract color: MuiColor;
  public abstract renderView(): JSX.Element;
  public abstract renderMath(): string;
  public abstract renderViewMath(): string;

  constructor (choices: ExpressionMemberChoice[]) {
    this.choices = choices;
    this.choiceIndex = 0;
  }

  public get choice(): ExpressionMemberChoice {
    return this.choices[this.choiceIndex]
  }

  public setId(index: number) {
    this.id = index.toString();
  }

  public setSubmembers(subs: ExpressionMember[]): void {
    this.submembers = subs;
  }

  public clone(): ExpressionMember {
    const Cls = this.constructor as new (choices: ExpressionMemberChoice[]) => ExpressionMember;
    const cloned = new Cls(this.choices.map(c => c.clone()));
    cloned.choiceIndex = this.choiceIndex;
    cloned.id = this.id;
    if (this.submembers?.length) {
      cloned.submembers = this.submembers;
    }
    return cloned;
  }

  public renderBaseView(): JSX.Element {
    return React.createElement(ExpressionMemberView, {
      member: this,
      onExpressionMemberSelected: (i: number) => this.setChoice(i, () => this.onChoiceUpdated?.(i))
    });
  }

  private setChoice(newChoice: number, onChanged: () => void): void {
    if (this.choiceIndex === newChoice) {
      return;
    }
    this.choiceIndex = newChoice
    onChanged();
  }
}
