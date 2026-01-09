import { Box, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Expression } from '../../../../core/activities/ReachTheNumber/expressions/expression';
import { History } from '../../../../core/activities/ReachTheNumber/history/equations-history';
import { MainEquation } from '../MainEquation/MainEquation';
import { EquationsHistory } from '../EquationsHistory/EquationsHistory';
import { styles } from './styles';
import { VictoryModal } from '../VictoryModal/VictoryModal';
import type { CurrentLevelProps } from '../../../../core/activities/ReachTheNumber/props';
import { LevelHeader } from '../LevelHeader/LevelHeader';

export function CurrentLevel({start, members, goal, level, onLevelCompleted}: CurrentLevelProps) {
  const [expression, setExpression] = useState<Expression>(new Expression(start, members));
  const [currentResult, setCurrentResult] = useState<number>(expression.calculate());
  const [history, setHistory] = useState<History>(new History());

  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [victory, setVictory] = useState<boolean>(false);

  const onExpressionMemberSelected = (): void => {
    setCurrentResult(expression.calculate());
  }

  const calculate = (): void => {
    history.insert(expression);
    const result = expression.calculate();
    if (result === goal) {
      setVictory(true);
      onHistoryChanged(undefined, false, result);
    } else {
      onHistoryChanged(new Expression(result, expression.members))
    }
  }

  const toNextLevel = (): void => {
    setVictory(false);
    if (onLevelCompleted) {
      onLevelCompleted();
    }
  }

  const onHistoryCleared = () => {
    history.clear(() => {
      const expr = new Expression(start, members);
      onHistoryChanged(expr)
    });
  }

  const onHistoryReverted = () => {
    history.revertDiscarded();
    const expr = new Expression(history.last.expr.calculate(), members);
    onHistoryChanged(expr)
  }

  const onHistoryStepsDiscarded = (selectedItemIndex: number | null) => {
    history.discardFrom(selectedItemIndex, step => onHistoryChanged(step.expr, true));
  }

  const onHistoryStepUndid = () => {
    history.removeLast(step => onHistoryChanged(step.expr));
  }

  const onHistoryChanged = (expr?: Expression, tooltip?: boolean, result?: number) => {
    if (expr) {
      setExpression(expr);
    }

    setShowTooltip(tooltip == null ? false : tooltip);

    if (result != null) {
      setCurrentResult(result);
    } else if (expr != null) {
      setCurrentResult(expr.calculate());
    }

    setHistory(history.new())
  }

  const theme = responsiveFontSizes(createTheme());
  return <ThemeProvider theme={theme}>
    <VictoryModal open={victory} goal={goal} onNextLevelClicked={toNextLevel}/>
    <Box sx={styles.mainBox}>
      <Box sx={styles.playgroundBox}>
        <LevelHeader
          goal={goal}
          level={level}
        />
        <MainEquation
          expression={expression}
          historyStepsDiscarded={showTooltip}
          currentResult={currentResult}
          onExpressionMemberSelected={onExpressionMemberSelected}
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
  </ThemeProvider>
}
