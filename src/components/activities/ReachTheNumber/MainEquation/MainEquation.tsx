import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { MainEquationProps } from "../../../../core/activities/ReachTheNumber/props";
import { WarningTooltip } from "../WarningTooltip/WarningTooltip";
import { dynamicStyles, styles } from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { useExpressionResult } from "./ExpressionResult";

export function MainEquation({expression, historyStepsDiscarded, currentResult, onExpressionMemberSelected, onSubmitted}: MainEquationProps) {
  const { t } = useTranslation();
  const [handledResult, expressionResultComponent] = useExpressionResult({
    start: expression.start.choice.viewSymbol,
    result: currentResult,
  });
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const equationBoxRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const box = equationBoxRef.current;
    if (!box) return;

    const checkScroll = () => {
      const horizontal = box.scrollWidth > box.clientWidth;
      setHasScrollbar(horizontal);
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);

    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const renderMembers = () => {
    const expr = [...expression.members, expression.end];
    return expr.map(member => {
      member.onChoiceUpdated = () => {
        onExpressionMemberSelected();
      }
      member.submembers.forEach(m => m.onChoiceUpdated = () => onExpressionMemberSelected());

      return <React.Fragment key={member.id}>
        <Box sx={{
          marginLeft: 2,
        }}>
          {member.renderJSX()}
        </Box>
      </React.Fragment>;
    });
  }

  return <Box sx={styles.mainBox}>
    <Box sx={dynamicStyles.equationBox(hasScrollbar)} ref={equationBoxRef}>
      <Box sx={styles.expressionResultBox}>
        <Button disabled variant='outlined' sx={styles.expressionReultBtn}>
          <Typography sx={styles.expressionReultBtnText}>
            {expression.start.renderJSX()}
          </Typography>
        </Button>
      </Box>
      <Box sx={styles.equationSubBox}>
        {renderMembers()}
      </Box>
      <Box sx={{...styles.expressionResultBox, ml: 2}}>
        {expressionResultComponent}
      </Box>
    </Box>
    <Box sx={styles.nextBtnBox}>
      <Button variant='contained' onClick={onSubmitted} sx={styles.nextBtn} disabled={!!handledResult?.errorText}>
        <Typography variant='h5' sx={styles.nextBtnText}>{t('next')}</Typography>
        <Typography variant='h5' sx={styles.nextBtnExclmation}>!</Typography>
        {historyStepsDiscarded && <WarningTooltip text={t('removeAllFaded')} />}
      </Button>
    </Box>
  </Box>
}