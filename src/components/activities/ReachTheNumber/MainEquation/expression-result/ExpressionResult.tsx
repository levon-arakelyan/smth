import { Button, Typography } from "@mui/material";
import type { IHandledResult } from "../../../../../core/activities/ReachTheNumber/expressions/expression";
import { restrictions } from "../../AllLevels/restrictions";
import { styles } from "../styles";
import { useTranslation } from "react-i18next";
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
        errorIcon: '\\varnothing'
      };
    }

    if (result >= restrictions.maxNumber) {
      return {
        errorText: t('tooBigRes'),
        errorIcon: '\\infty'
      };
    }

    if (result <= restrictions.minNumber) {
      return {
        errorText: t('tooSmallRes'),
        errorIcon: '-\\infty'
      };
    }
    if (Number.isInteger(Number(start)) && !Number.isInteger(result)) {
      return {
        errorText: t('divResNoInt'),
        errorIcon: '\\varnothing'
      };
    }

    return { result };
  })();

  return [
    handledResult,
    <>
      <Button disabled variant='outlined' sx={styles.expressionReultBtn}>
        <Typography sx={styles.expressionReultBtnText}>
          <Latex mathExpr={handledResult.result ?? handledResult.errorIcon} />
        </Typography>
      </Button>
      {handledResult.errorText && <WarningTooltip text={handledResult.errorText}/>}
    </>
  ];
}