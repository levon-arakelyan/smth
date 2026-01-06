import { MathJax } from "better-react-mathjax";
import type { LatexProps } from "../../../../core/activities/ReachTheNumber/props";

export function Latex({mathExpr}: LatexProps) {
  if (mathExpr == null) {
    return <></>;
  }
  return <MathJax>{`\\( ${mathExpr} \\)`}</MathJax>
}