import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { MainEquationProps } from "../../../../core/activities/ReachTheNumber/props";
import { WarningTooltip } from "../WarningTooltip/WarningTooltip";
import { styles } from "./styles";
import { useExpressionResult } from "./expression-result/ExpressionResult";
import React from "react";

export function MainEquation({expression, historyStepsDiscarded, currentResult, onExpressionMemberSelected, onSubmitted}: MainEquationProps) {
  const { t } = useTranslation();
  const [handledResult, expressionResultComponent] = useExpressionResult({
    start: expression.start.choice.viewSymbol,
    result: currentResult,
  });

  const renderMembers = () => {
    return expression.full().map(member => {
      member.onChoiceUpdated = () => {
        onExpressionMemberSelected();
      }
      member.submembers.forEach(m => m.onChoiceUpdated = () => onExpressionMemberSelected());
      return <React.Fragment key={member.id}>{member.renderView()}</React.Fragment>;
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