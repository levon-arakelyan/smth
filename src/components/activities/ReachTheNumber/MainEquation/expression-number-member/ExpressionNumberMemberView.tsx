import { Box } from "@mui/material";
import type { ExpressionMemberViewProps } from "../../../../../core/activities/ReachTheNumber/props";
import { Latex } from "../../Latex.tsx/Latex";
import { styles } from "../styles";

export function ExpressionNumberMemberView({member}: ExpressionMemberViewProps) {
  const power = member.submembers[0];
  const hasChoices = member.choices.length > 1;
  const hasPowerChoices = power?.choices.length > 1;

  if (hasChoices && power && hasPowerChoices) {
    return <Box sx={styles.expressionMemberBox}>
      {member.renderBaseView()}
      <Box sx={styles.submemberBox}>{power.renderJSX()}</Box>
    </Box>
  }

  if (hasChoices && power && !hasPowerChoices) {
    return <Box sx={styles.expressionMemberBox}>
      {member.renderBaseView()}
      <Box sx={styles.submemberBox}><Latex mathExpr={power.choice.viewSymbol} /></Box>
    </Box>
  }

  if (!hasChoices && power && hasPowerChoices) {
    return <Box sx={styles.expressionMemberBox}>
      {member.choice.viewSymbol}
      <Box sx={styles.submemberBox}>{power.renderJSX()}</Box>
    </Box>
  }

  if (!hasChoices && power && !hasPowerChoices) {
    return <Latex mathExpr={`${member.renderLatex()}`} />
  }

  if (!hasChoices && !power) {
    return <Latex mathExpr={member.choice.viewSymbol}/>;
  }

  return member.renderBaseView();
}
