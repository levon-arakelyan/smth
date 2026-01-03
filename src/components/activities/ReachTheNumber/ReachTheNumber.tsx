import { Button, Box, Typography, Menu, MenuItem, Modal, Paper } from '@mui/material';
import React, { useRef, useState } from 'react';
import { EquationsHistory, type EquationsHistoryHandle } from './EquationsHistory';
import { RemovedHistoryStepsTooltip } from './RemovedHistoryStepsTooltip';
import { useTranslation } from 'react-i18next';
import type { ReachTheNumberProps } from '../../../core/props/ReachTheNumber';
import { Expression } from '../../../core/expressions/expression';
import type { ExpressionStepOptions } from '../../../core/expressions/expression-step-options';

export function ReachTheNumber({start, steps, goal}: ReachTheNumberProps) {
  const { t } = useTranslation();
  const historyRef = useRef<EquationsHistoryHandle>(null);

  const [menuAnchor, setMenuAnchor] = useState<{
    id: string;
    anchor: HTMLElement | null;
  }>({ id: '', anchor: null });
  const [expression, setExpression] = useState<Expression>(new Expression(start, steps));
  const [currentResult, setCurrentResult] = useState<number>(expression.calculate());
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [won, setWon] = useState<boolean>(false);

  const onMenuOpened = (step: ExpressionStepOptions, e: React.MouseEvent<HTMLButtonElement>): void => {
    setMenuAnchor({ id: step.id, anchor: e.currentTarget });
  };

  const onMenuClosed = (): void => {
    setMenuAnchor({ id: '', anchor: null });
  };

  const onMenuItemClicked = (step: ExpressionStepOptions, id: number): void => {
    step.selectedId = id;
    setCurrentResult(expression.calculate());
    setMenuAnchor({ id: '', anchor: null });
  }

  const calculate = (): void => {
    const result = expression.calculate();
    if (result === goal) {
      setWon(true);
    }

    const expr = Expression.from(result, steps, expression.expressionStepOptions);
    historyRef?.current?.insert({ start: result, removed: false, expr: expression })
    setExpression(expr);
    setCurrentResult(expr.calculate());
  }

  const onHistoryCleared = () => {
    const expr = new Expression(start, steps);
    onHistoryChanged(expr)
  }

  const onHistoryReverted = (lastExpr: Expression) => {
    const expr = new Expression(lastExpr.calculate(), steps);
    onHistoryChanged(expr)
  }

  const onHistoryStepsRemoved = (expr: Expression) => {
    onHistoryChanged(expr, true);
  }

  const onHistoryChanged = (expr: Expression, tooltip: boolean = false) => {
    setExpression(expr);
    setCurrentResult(expr.calculate());
    setShowTooltip(tooltip);
  }

  return <>
    <Modal open={won}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        p: 4,
      }}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {t('win')}
        </Typography>
      </Box>
    </Modal>

    <Box sx={{
      padding: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      flexDirection: 'column',
    }}
    >
      <Paper
        elevation={4}
        sx={{
          width: { xs: '100%', md: '75%', lg: '50%' },
          textAlign: 'center',
          marginBottom: 2
        }}
      >
        <Typography variant='h1'>{t('level')} 1</Typography>
        <Typography variant='h2'>
          {t('goal')}: {goal}
        </Typography>
      </Paper>
      <Paper
        elevation={4}
        sx={{
          width: { xs: '100%', md: '75%', lg: '50%' },
          height: '0',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <Paper elevation={0} sx={{display: 'flex', justifyContent: 'center', gap: 1, paddingY: 3}}>  
            {expression.expressionStepOptions.map((step, i) => <React.Fragment key={i}>
              <Button
                variant={step.options.length > 1 ? 'contained' : 'outlined'}
                disabled={step.options.length <= 1}
                color={step.color}
                onClick={e => onMenuOpened(step, e)}
              >
                <Typography variant='h3'>{step.options[step.selectedId].appearance}</Typography>
              </Button>
              {step.options.length > 1 ? <Menu
                anchorEl={menuAnchor.id === step.id ? menuAnchor.anchor : null}
                open={menuAnchor.id === step.id}
                onClose={onMenuClosed}
                sx={{display: 'flex', flexDirection: 'column'}}
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
            <Button disabled variant='outlined'>
              <Typography variant='h3'>{currentResult}</Typography>
            </Button>
          </Paper>
          <Box sx={{display: 'flex', justifyContent: 'center', gap: 1}}>
            <Button variant='outlined' onClick={calculate} sx={{position: 'relative'}}>
              <Typography variant='h5'>{t('next')}</Typography>
              {showTooltip ? <RemovedHistoryStepsTooltip additionalText={t('addNewOne')} /> : null}
            </Button>
          </Box>
        </Box>

        <EquationsHistory
          ref={historyRef}
          onCleared={onHistoryCleared}
          onChanged={onHistoryChanged}
          onStepsRemoved={onHistoryStepsRemoved}
          onReverted={onHistoryReverted}></EquationsHistory>
      </Paper>
    </Box>
  </>
}
