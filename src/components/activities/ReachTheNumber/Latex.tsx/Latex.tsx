import { MathJax } from "better-react-mathjax";
import type { LatexProps } from "../../../../core/activities/ReachTheNumber/props";
import { useState } from "react";
import { styles } from "./styles";

export function Latex({mathExpr}: LatexProps) {
  const [visible, setVisible] = useState(false);
  const handleTypeset = () => {
    setVisible(true);
  };

  return <>
    <MathJax dynamic inline style={styles.mathJax(visible)} onTypeset={handleTypeset}>
      {`\\(${mathExpr}\\)`}
    </MathJax>
    <span style={styles.placeholder(visible)}>00</span>
  </>;
}