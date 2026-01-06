import { Box, Button, Typography } from "@mui/material";
import type { IHandledResult } from "../../../../../core/activities/ReachTheNumber/expressions/expression";
import { restrictions } from "../../AllLevels/restrictions";
import { styles } from "../styles";
import BlockIcon from '@mui/icons-material/Block';
import { useTranslation } from "react-i18next";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import type { ExpressionResultProps } from "../../../../../core/activities/ReachTheNumber/props";
import { Latex } from "../../Latex.tsx/Latex";
import { WarningTooltip } from "../../WarningTooltip/WarningTooltip";
import type { JSX } from "@emotion/react/jsx-runtime";

export function useExpressionResult({start, result}: ExpressionResultProps): [IHandledResult, JSX.Element] {
  const { t } = useTranslation();

  const handledResult = ((): IHandledResult => {
    if (Number.isNaN(result)) {
      return {
        errorText: t('calcError'),
        errorIcon: <BlockIcon sx={styles.expressionReultBtnIcon} />
      };
    }

    if (result >= restrictions.maxNumber) {
      return {
        errorText: t('tooBigRes'),
        errorIcon: <AllInclusiveIcon sx={styles.expressionReultBtnIcon} />
      };
    }

    if (result <= restrictions.minNumber) {
      return {
        errorText: t('tooSmallRes'),
        errorIcon: <Box>-<AllInclusiveIcon sx={styles.expressionReultBtnNegInfinity}/></Box>
      };
    }

    if (Number.isInteger(start) && !Number.isInteger(result)) {
      return {
        errorText: t('divResNoInt'),
        errorIcon: <BlockIcon sx={styles.expressionReultBtnIcon} />
      };
    }

    return { result };
  })();

  return [
    handledResult,
    <>
      <Button disabled variant='outlined' sx={styles.expressionReultBtn}>
        <Typography sx={styles.expressionReultBtnText}>
          {handledResult.errorText ? handledResult.errorIcon : <Latex mathExpr={handledResult.result} />}
        </Typography>
      </Button>
      {handledResult.errorText && <WarningTooltip text={handledResult.errorText}/>}
    </>
  ];
}