import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Expression } from '../../../../core/activities/ReachTheNumber/expressions/expression';
import type { ExpressionStepOptions } from '../../../../core/activities/ReachTheNumber/expressions/expression-step-options';
import type { ReachTheNumberLevelProps } from '../../../../core/activities/ReachTheNumber/props';
import { History } from '../../../../core/activities/ReachTheNumber/history/equations-history';
import { MainEquation } from '../MainEquation/MainEquation';
import { EquationsHistory } from '../EquationsHistory/EquationsHistory';
import { styles } from './styles';
import { VictoryModal } from '../VictoryModal/VictoryModal';

export function ReachTheNumberLevel({start, steps, goal, level, onLevelCompleted}: ReachTheNumberLevelProps) {
  const { t } = useTranslation();

  const [expression, setExpression] = useState<Expression>(new Expression(start, steps));
  const [currentResult, setCurrentResult] = useState<number>(expression.calculate());
  const [history, setHistory] = useState<History>(new History());

  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [victory, setVictory] = useState<boolean>(false);

  const onExpressionStepSelected = (step: ExpressionStepOptions, id: number): void => {
    step.selectedId = id;
    setCurrentResult(expression.calculate());
  }

  const calculate = (): void => {
    const result = expression.calculate();
    if (result === goal) {
      setVictory(true);
    }

    const expr = Expression.from(result, steps, expression.expressionStepOptions);
    history.insert(expression);
    onHistoryChanged(expr)
  }

  const toNextLevel = (): void => {
    setVictory(false);
    if (onLevelCompleted) {
      onLevelCompleted();
    }
  }

  const onHistoryCleared = () => {
    history.clear(() => {
      const expr = new Expression(start, steps);
      onHistoryChanged(expr)
    });
  }

  const onHistoryReverted = () => {
    history.revertDiscarded();
    const expr = new Expression(history.last.expr.calculate(), steps);
    onHistoryChanged(expr)
  }

  const onHistoryStepsDiscarded = (selectedItemIndex: number | null) => {
    history.discardFrom(selectedItemIndex, step => onHistoryChanged(step.expr, true));
  }

  const onHistoryStepUndid = () => {
    history.removeLast(step => onHistoryChanged(step.expr));
  }

  const onHistoryChanged = (expr: Expression, tooltip: boolean = false) => {
    setExpression(expr);
    setCurrentResult(expr.calculate());
    setShowTooltip(tooltip);
    setHistory(history.new())
  }

  return <>
    <VictoryModal open={victory} goal={goal} onNextLevelClicked={toNextLevel}/>
    <Box sx={styles.mainBox}>
      <Box sx={styles.playgroundBox}>
        <Box sx={styles.levelContainerBox}>
          <Typography variant='h2' sx={styles.levelText}>
            {t('level')} {level}
          </Typography>
          <Typography variant='h4' sx={styles.goalText}>🏅{t('goal')}: {goal}</Typography>
        </Box>
        <Box sx={styles.gameBox}>
          <MainEquation
            expressionStepOptions={expression.expressionStepOptions}
            showTooltip={showTooltip}
            currentResult={currentResult}
            onExpressionStepSelected={onExpressionStepSelected}
            onSubmitted={calculate}
          />

          <EquationsHistory
            history={history}
            onClearClicked={onHistoryCleared}
            onRevertClicked={onHistoryReverted}
            onRemoveFromThisStepClicked={onHistoryStepsDiscarded}
            onUndoClicked={onHistoryStepUndid}
          />
        </Box>
      </Box>
    </Box>
  </>
}
