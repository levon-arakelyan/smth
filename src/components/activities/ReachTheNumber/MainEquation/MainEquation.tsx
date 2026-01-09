import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { MainEquationProps } from "../../../../core/activities/ReachTheNumber/props";
import { WarningTooltip } from "../WarningTooltip/WarningTooltip";
import { styles } from "./styles";
import React from "react";
import { useExpressionResult } from "./ExpressionResult";

export function MainEquation({expression, historyStepsDiscarded, currentResult, onExpressionMemberSelected, onSubmitted}: MainEquationProps) {
  const { t } = useTranslation();
  const [handledResult, expressionResultComponent] = useExpressionResult({
    start: expression.start.choice.viewSymbol,
    result: currentResult,
  });

  const renderMembers = () => {
    const expr = expression.full();
    return expr.map((member, i) => {
      member.onChoiceUpdated = () => {
        onExpressionMemberSelected();
      }
      member.submembers.forEach(m => m.onChoiceUpdated = () => onExpressionMemberSelected());

      const hasChoices = member.choices.length > 1;
      const nextIsLatexWithSpace = expr[i + 1]?.choice.viewSymbol[0] == '~';
      const prevIsLatexWithSpace = expr[i - 1]?.choice.viewSymbol[0] == '~';

      return <React.Fragment key={member.id}>
        <Box sx={{
          marginLeft: !prevIsLatexWithSpace && hasChoices ? 2 : 0,
          marginRight: !nextIsLatexWithSpace && hasChoices ? 2 : 0
        }}>
          {member.renderJSX()}
        </Box>
      </React.Fragment>;
    });
  }

  return <Box sx={styles.mainBox}>
    <Box sx={styles.equationBox}>
      <Box sx={styles.equationSubBox}>
        {renderMembers()}
      </Box>
      <Box sx={styles.expressionResultBox}>
        {expressionResultComponent}
      </Box>
    </Box>
    <Box sx={styles.nextBtnBox}>
      <Button variant='contained' onClick={onSubmitted} sx={styles.nextBtn} disabled={!!handledResult?.errorText}>
        <Typography variant='h5' sx={styles.nextBtnText}>{t('next')}</Typography>
        <Typography variant='h5' sx={styles.nextBtnExclmation}>!</Typography>
        {historyStepsDiscarded && <WarningTooltip text={t('removeAllFaded') + t('addNewOne')} />}
      </Button>
    </Box>
  </Box>
}