import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import type { ExpressionStepOptions } from "../../../../core/activities/ReachTheNumber/expressions/expression-step-options";
import type { MainEquationProps } from "../../../../core/activities/ReachTheNumber/props";
import { WarningTooltip } from "../WarningTooltip/WarningTooltip";
import { styles } from "./styles";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BlockIcon from '@mui/icons-material/Block';
import type { ICalculationResult } from '../../../../core/activities/ReachTheNumber/expressions/expression';
import { restrictions } from "../AllLevels/restrictions";

export function MainEquation({expression, historyStepsDiscarded, currentResult, onExpressionStepSelected, onSubmitted}: MainEquationProps) {
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = useState<{
    id: string;
    anchor: HTMLElement | null;
  }>({ id: '', anchor: null });

  const onMenuOpened = (step: ExpressionStepOptions, e: React.MouseEvent<HTMLButtonElement>): void => {
    setMenuAnchor({ id: step.id, anchor: e.currentTarget });
  };

  const onMenuClosed = (): void => {
    setMenuAnchor({ id: '', anchor: null });
  };

  const onMenuItemClicked = (step: ExpressionStepOptions, i: number): void => {
    onExpressionStepSelected(step, i)
    onMenuClosed();
  }

  const getResultValue = (): ICalculationResult => {
    if (Number.isNaN(currentResult)) {
      return {
        errorText: t('calcError'),
        errorIcon: <BlockIcon sx={styles.expressionReultBtnIcon} />
      };
    }

    if (currentResult >= restrictions.maxNumber) {
      return {
        errorText: t('tooBigRes'),
        errorIcon: <AllInclusiveIcon sx={styles.expressionReultBtnIcon} />
      };
    }

    if (currentResult <= restrictions.minNumber) {
      return {
        errorText: t('tooSmallRes'),
        errorIcon: <Box>-<AllInclusiveIcon sx={styles.expressionReultBtnNegInfinity}/></Box>
      };
    }

    if (Number.isInteger(expression.start) && !Number.isInteger(currentResult)) {
      return {
        errorText: t('divResNoInt'),
        errorIcon: <BlockIcon sx={styles.expressionReultBtnIcon} />
      };
    }

    return {result: currentResult};
  }

  const result = getResultValue();

  return <Box sx={styles.mainBox}>
    <Box sx={styles.equationBox}>
      {expression.expressionStepOptions.map((step, i) => <React.Fragment key={i}>
        <Button
          variant={step.options.length > 1 ? 'contained' : 'outlined'}
          disabled={step.options.length <= 1}
          color={step.color}
          onClick={e => onMenuOpened(step, e)}
          sx={styles.expressionStepBtn}
        >
          <Typography variant='h3'>{step.options[step.selectedId].appearance}</Typography>
          {step.options.length > 1 && <ArrowDropDownIcon sx={styles.expressionStepBtnDropdownIcon}/>}
        </Button>
        {step.options.length > 1 ? <Menu
          anchorEl={menuAnchor.id === step.id ? menuAnchor.anchor : null}
          open={menuAnchor.id === step.id}
          onClose={onMenuClosed}
          sx={styles.expressionStepMenu}
        >
          {step.options.map((option, j) => <MenuItem key={j} onClick={() => onMenuItemClicked(step, j)}>
            <Button
              variant='contained'
              color={step.color}
            >
              <Typography variant='h5'>{option.appearance}</Typography>
            </Button>
          </MenuItem>)}
        </Menu> : null}
      </React.Fragment>)}

      <Box sx={styles.expressionResultBox}>
        <Button disabled variant='outlined' sx={styles.expressionReultBtn}>
          <Typography variant='h3' sx={styles.expressionReultBtnText}>
            {result.errorText ? result.errorIcon : result.result}
          </Typography>
        </Button>
        {result.errorText && <WarningTooltip text={result.errorText}/>}
      </Box>
    </Box>
    <Box sx={styles.nextBtnBox}>
      <Button variant='contained' onClick={onSubmitted} sx={styles.nextBtn} disabled={!!result.errorText}>
        <Typography variant='h5' sx={styles.nextBtnText}>{t('next')}</Typography>
        <Typography variant='h5' sx={styles.nextBtnExclmation}>!</Typography>
        {historyStepsDiscarded && <WarningTooltip text={t('removeAllFaded') + t('addNewOne')} />}
      </Button>
    </Box>
  </Box>
}