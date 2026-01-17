import { Box, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { Expression } from '../../../../core/activities/ReachTheNumber/expressions/expression';
import { History } from '../../../../core/activities/ReachTheNumber/history/equations-history';
import { MainEquation } from '../MainEquation/MainEquation';
import { EquationsHistory } from '../EquationsHistory/EquationsHistory';
import { styles } from './styles';
import { VictoryModal } from '../VictoryModal/VictoryModal';
import { LevelHeader } from '../LevelHeader/LevelHeader';
import { MainMenu } from '../MainMenu/MainMenu';
import { useLevel } from '../../../../hooks/useLevel';
import levelWinSound from '../../../../assets/sounds/level-win.mp3';
import { useAudio } from '../../../../hooks/useAudio';
import { LocalStorageKey } from '../../../../core/services/local-storage/local-storage-keys';
import { SoundProvider } from '../../../../contexts/SoundContext';
import { MathJaxContext } from 'better-react-mathjax';

export function ReachTheNumber() {
  const { currentLevelIndex, currentLevel, lastLevelIndex, saveLevel } = useLevel(LocalStorageKey.ReachTheNumber);
  const { start, members, goal } = currentLevel;
  const { play } = useAudio(levelWinSound, { volume: 0.5 });

  const [expression, setExpression] = useState<Expression>(new Expression(start, members));
  const [currentResult, setCurrentResult] = useState<number>(expression.calculate());
  const [history, setHistory] = useState<History>(new History());

  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [victory, setVictory] = useState<boolean>(false);

  useEffect(() => {
    restart();
  }, [currentLevel]);

  const onExpressionMemberSelected = (): void => {
    setCurrentResult(expression.calculate());
  }

  const onSubmitted = (): void => {
    if (!history.insert(expression)) {
      onHistoryChanged(expression);
      return;
    }

    const result = expression.calculate();
    if (result === goal) {
      saveLevel(currentLevelIndex, Math.min(lastLevelIndex, currentLevelIndex + 1));
      setVictory(true);
      onHistoryChanged(undefined, false, result);
      play();
    } else {
      onHistoryChanged(new Expression(result, expression.members))
    }
  }

  const retryLevel = (): void => {
    setVictory(false);
    restart();
  }

  const toNextLevel = (): void => {
    setVictory(false);
    const newLevel = currentLevelIndex + 1;
    saveLevel(newLevel > lastLevelIndex ? 0 : newLevel);
  }

  const restart = () => {
    const expr = new Expression(start, members);
    setHistory(new History());
    setExpression(expr);
    setCurrentResult(expr.calculate());
    setShowTooltip(false);
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
  return <SoundProvider><MathJaxContext><ThemeProvider theme={theme}>
    <VictoryModal
      history={history}
      open={victory}
      onNextLevelClicked={toNextLevel}
      onRetryClicked={retryLevel}
    />
    <Box sx={styles.mainBox}>
      <Box sx={styles.playgroundBox}>
        <Box sx={styles.mainMenuBox}>
          <MainMenu onLevelSelected={(i) => saveLevel(i)}/>
        </Box>
        <LevelHeader />
        <MainEquation
          expression={expression}
          historyStepsDiscarded={showTooltip}
          currentResult={currentResult}
          onExpressionMemberSelected={onExpressionMemberSelected}
          onSubmitted={onSubmitted}
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
  </ThemeProvider></MathJaxContext></SoundProvider>
}
