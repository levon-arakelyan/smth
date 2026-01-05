import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import type { MainEquationProps } from "../../../../core/activities/ReachTheNumber/props";
import { WarningTooltip } from "../WarningTooltip/WarningTooltip";
import { styles } from "./styles";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BlockIcon from '@mui/icons-material/Block';
import type { ICalculationResult } from '../../../../core/activities/ReachTheNumber/expressions/expression';
import { restrictions } from "../AllLevels/restrictions";
import type { ExpressionMember } from "../../../../core/activities/ReachTheNumber/expressions/members/expression-member";
import { MathJax } from "better-react-mathjax";
import { LatexService } from "../../../../core/services/latex/latex-service";

export function MainEquation({expression, historyStepsDiscarded, currentResult, onExpressionMemberSelected, onSubmitted}: MainEquationProps) {
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = useState<{
    id: string;
    anchor: HTMLElement | null;
  }>({ id: '', anchor: null });

  const onMenuOpened = (member: ExpressionMember, e: React.MouseEvent<HTMLButtonElement>): void => {
    setMenuAnchor({ id: member.id, anchor: e.currentTarget });
  };

  const onMenuClosed = (): void => {
    setMenuAnchor({ id: '', anchor: null });
  };

  const onMenuItemClicked = (member: ExpressionMember, i: number): void => {
    onExpressionMemberSelected(member, i)
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

    if (Number.isInteger(expression.start.choice.calculationSymbol) && !Number.isInteger(currentResult)) {
      return {
        errorText: t('divResNoInt'),
        errorIcon: <BlockIcon sx={styles.expressionReultBtnIcon} />
      };
    }

    return {result: currentResult};
  }

  const renderMath = (math: string) => {
    return <MathJax>{LatexService.render(math)}</MathJax>
  }

  const renderExpressionMember = (member: ExpressionMember) => {
    if (member.choices.length <= 1) {
      return renderMath(member.render());
    }

    return <>
      <Button
        variant='contained'
        color={member.color}
        onClick={e => onMenuOpened(member, e)}
        sx={styles.expressionMemberBtn}
      >
        <Typography>{renderMath(member.render())}</Typography>
        {member.choices.length > 1 && <ArrowDropDownIcon sx={styles.expressionMemberBtnDropdownIcon}/>}
      </Button>
      {member.choices.length > 1 && <Menu
        anchorEl={menuAnchor.id === member.id ? menuAnchor.anchor : null}
        open={menuAnchor.id === member.id}
        onClose={onMenuClosed}
        sx={styles.expressionMemberMenu}
      >
        {member.choices.map((choice, j) => <MenuItem key={`${member.id} ${j}`} onClick={() => onMenuItemClicked(member, j)}>
          <Button variant='contained' color={member.color}>
            <Typography variant='h5'>{choice.visualSymbol}</Typography>
          </Button>
        </MenuItem>)}
      </Menu>}
    </>;
  }

  const renderSubmember = (member: ExpressionMember) => {
    const sub = member.submember;
    if (!sub || (member.choices.length <= 1 && sub.choices.length <= 1)) {
      return null;
    }

    return <Box sx={styles.submemberBox}>
      {sub.choices.length <= 1 ? sub.choice.visualSymbol : renderExpressionMember(sub)}
    </Box>;
  }

  const result = getResultValue();

  return <Box sx={styles.mainBox}>
    <Box sx={styles.equationBox}>
      <Box sx={styles.equationSubBox}>
        {expression.full().map(member => (
          <Box sx={styles.expressionMemberBox} key={member.id}>
            {renderExpressionMember(member)}
            {renderSubmember(member)}
          </Box>
        ))}
      </Box>
      <Box sx={styles.expressionResultBox}>
        <Button disabled variant='outlined' sx={styles.expressionReultBtn}>
          <Typography sx={styles.expressionReultBtnText}>
            {result.errorText ? result.errorIcon : renderMath(`${result.result}`)}
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