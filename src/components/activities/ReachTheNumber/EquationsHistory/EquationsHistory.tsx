import { Card, IconButton, CardContent, Typography, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import RefreshIcon from '@mui/icons-material/Refresh';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import type { EquationsHistoryProps } from '../../../../core/activities/ReachTheNumber/props';
import { RemovedHistoryStepsTooltip } from '../RemovedHistoryStepsTooltip/RemovedHistoryStepsTooltip';
import { styles, dynamicStyles } from './styles';

export function EquationsHistory({history, onClearClicked, onRevertClicked, onRemoveFromThisStepClicked, onUndoClicked}: EquationsHistoryProps) {
  const { t } = useTranslation();

  return <Box sx={styles.mainBox}>
    <Box sx={styles.historyContainerBox}>
      {history.steps.map((item, i) => (
        <Card
          key={i}
          variant="outlined"
          sx={dynamicStyles.historyItemCard(item)}
        >
          {!item.discarded && (
            <IconButton className='remove-btn' sx={styles.removeIconContainerBtn} onClick={() => onRemoveFromThisStepClicked(i)}>
              <HighlightOffIcon color="error"/>
            </IconButton>
          )}
          <CardContent sx={styles.historyItemCardContent}>
            <Typography sx={styles.historyItemNumber}>
              {i + 1}
            </Typography>
            <Typography variant="h5" sx={styles.historyItemText}>
              {item.expr.getVisual()}
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
        <Button variant='contained' onClick={onUndoClicked} sx={styles.undoBtn} disabled={history.isEmpty()}>
          <Typography sx={styles.actionBtnText} variant='h6'>
            <UndoIcon sx={styles.actionBtnIcon}/>{t('back')}
          </Typography>
          {history.hasDiscarded() && <RemovedHistoryStepsTooltip additionalText={t('lastNonFaded')}/>}
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