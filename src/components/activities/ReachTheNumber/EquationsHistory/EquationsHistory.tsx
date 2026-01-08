import { Card, IconButton, CardContent, Typography, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import RefreshIcon from '@mui/icons-material/Refresh';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import type { EquationsHistoryProps } from '../../../../core/activities/ReachTheNumber/props';
import { WarningTooltip } from '../WarningTooltip/WarningTooltip';
import { styles, dynamicStyles } from './styles';
import { useEffect, useRef } from 'react';
import { Latex } from '../Latex.tsx/Latex';

export function EquationsHistory({history, onClearClicked, onRevertClicked, onRemoveFromThisStepClicked, onUndoClicked}: EquationsHistoryProps) {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) {
      return;
    }
    el.scrollTo({ top: el.scrollHeight });
  }, [history.steps.length]);

  return <Box sx={styles.mainBox}>
    <Box sx={styles.historyContainerBox} ref={containerRef}>
      {history.steps.map((item, i) => (
        <Card
          key={i}
          variant="outlined"
          sx={dynamicStyles.historyItemCard(item)}
          onClick={() => onRemoveFromThisStepClicked(i)}
        >
          {!item.discarded && (
            <IconButton className='remove-btn' sx={styles.removeIconContainerBtn}>
              <HighlightOffIcon color="error"/>
            </IconButton>
          )}
          <CardContent sx={styles.historyItemCardContent}>
            <Typography sx={styles.historyItemNumber}>
              {i + 1}
            </Typography>
            <Typography variant="h5" sx={styles.historyItemText}>
              <Latex mathExpr={item.renderedExpr} />
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    <Box sx={styles.actionsContainerBox}>
      <Box sx={styles.mainActionsBox}>
        <Button variant='contained' onClick={onClearClicked} disabled={history.isEmpty()}>
          <Typography sx={styles.actionBtnText} variant='h6'>
            <RefreshIcon sx={styles.actionBtnIcon}/>{t('clear')}
          </Typography>
        </Button>
        <Button variant='contained' onClick={onUndoClicked} sx={styles.undoBtn} disabled={history.isEmpty() || history.allDiscarded()}>
          <Typography sx={styles.actionBtnText} variant='h6'>
            <UndoIcon sx={styles.actionBtnIcon}/>{t('back')}
          </Typography>
          {(!history.isEmpty() && history.hasDiscarded() && !history.allDiscarded()) && <WarningTooltip text={t('removeAllFaded') + t('lastNonFaded')}/>}
        </Button>
      </Box>
      <Button variant='contained' onClick={onRevertClicked} disabled={!history.hasDiscarded()}>
        <Typography sx={styles.actionBtnText} variant='h6'>
          <RedoIcon sx={styles.actionBtnIcon}/>{t('bringBack')}
        </Typography>
      </Button>
    </Box>
  </Box>;
}