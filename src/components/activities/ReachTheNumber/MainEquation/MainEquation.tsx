import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import type { ExpressionStepOptions } from "../../../../core/activities/ReachTheNumber/expressions/expression-step-options";
import type { MainEquationProps } from "../../../../core/activities/ReachTheNumber/props";
import { RemovedHistoryStepsTooltip } from "../RemovedHistoryStepsTooltip/RemovedHistoryStepsTooltip";
import { styles } from "./styles";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export function MainEquation({expressionStepOptions, showTooltip, currentResult, onExpressionStepSelected, onSubmitted}: MainEquationProps) {
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

  return <Box sx={styles.mainBox}>
    <Box sx={styles.equationBox}>
      {expressionStepOptions.map((step, i) => <React.Fragment key={i}>
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
      <Button disabled variant='outlined' sx={styles.expressionReultBtn}>
        <Typography variant='h3' sx={styles.expressionReultBtnText}>{currentResult}</Typography>
      </Button>
    </Box>
    <Box sx={styles.nextBtnBox}>
      <Button variant='contained' onClick={onSubmitted} sx={styles.nextBtn}>
        <Typography variant='h5' sx={styles.nextBtnText}>{t('next')}</Typography>
        <Typography variant="h5" sx={styles.nextBtnExclmation}>!</Typography>
        {showTooltip && <RemovedHistoryStepsTooltip additionalText={t('addNewOne')} />}
      </Button>
    </Box>
  </Box>
}