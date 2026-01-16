import { Card, IconButton, CardContent, Typography, Box, Button, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import RefreshIcon from '@mui/icons-material/Refresh';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import type { EquationsHistoryProps } from '../../../../core/activities/ReachTheNumber/props';
import { styles, dynamicStyles } from './styles';
import { useEffect, useRef } from 'react';
import { Latex } from '../Latex.tsx/Latex';
import { useMenuAnchor } from '../../../../hooks/useMenuAnchor';
import { LocalStorageKey } from '../../../../core/services/local-storage/local-storage-keys';
import { useLevel } from '../../../../hooks/useLevel';

export function EquationsHistory({
  history, onClearClicked, onRevertClicked, onRemoveFromThisStepClicked, onUndoClicked
}: EquationsHistoryProps) {
  const { t } = useTranslation();
  const { anchorEl, openMenu, closeMenu, isOpen } = useMenuAnchor();
  const { getStepsEnding } = useLevel(LocalStorageKey.ReachTheNumber);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) {
      return;
    }
    el.scrollTo({ top: el.scrollHeight });
  }, [history.length]);

  const clearBtn = <Button variant='contained' onClick={onClearClicked} disabled={history.isEmpty()} sx={styles.actionBtn}>
    <Typography sx={styles.actionBtnText} variant='h6'>
      <RefreshIcon sx={styles.actionBtnIcon}/>{t('clear')}
    </Typography>
  </Button>;

  const backBtn = <Button variant='contained' onClick={onUndoClicked} sx={styles.undoBtn} disabled={history.isEmpty() || history.hasDiscarded()}>
    <Typography sx={styles.actionBtnText} variant='h6'>
      <UndoIcon sx={styles.actionBtnIcon}/>{t('back')}
    </Typography>
  </Button>;

  const revertBtn = <Button variant='contained' sx={styles.actionBtn} onClick={onRevertClicked} disabled={!history.hasDiscarded()}>
    <Typography sx={styles.actionBtnText} variant='h6'>
      <RedoIcon sx={styles.actionBtnIcon}/>{t('bringBack')}
    </Typography>
  </Button>;

  return <Box sx={styles.mainBox}>
    <Box>
      <Typography variant='h5' sx={styles.historyTitleText}>
        {t('history', { steps: history.length, ending: getStepsEnding(history.length) })}
      </Typography>
    </Box>
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
      <Box sx={styles.actionOnBigScreen}>
        <Box sx={styles.mainActionsBox}>
          {clearBtn}
          {backBtn}
        </Box>
        {revertBtn}
      </Box>
      <Button sx={styles.actionsMenu} variant='contained' color='info' onClick={openMenu}>
        <Typography sx={styles.actionBtnText} variant='h6'>
          {t('actions')}
        </Typography>
      </Button>
      <Menu
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={closeMenu}
        slotProps={{paper: {sx: styles.actionsMenuArrow }}}
      >
        <MenuItem onClick={closeMenu}>{clearBtn}</MenuItem>
        <MenuItem>{backBtn}</MenuItem>
        <MenuItem onClick={closeMenu}>{revertBtn}</MenuItem>
      </Menu>
    </Box>
  </Box>;
}