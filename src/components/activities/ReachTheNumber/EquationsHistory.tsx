import { Card, IconButton, CardContent, Typography, Menu, MenuItem, Box, Button } from '@mui/material';
import { forwardRef, useImperativeHandle, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { RemovedHistoryStepsTooltip } from './RemovedHistoryStepsTooltip';
import { useTranslation } from 'react-i18next';
import type { EquationsHistoryProps, HistoryStep } from '../../../core/props/ReachTheNumber';

export type EquationsHistoryHandle = {
  insert: (step: HistoryStep) => void;
};

export const EquationsHistory = forwardRef<EquationsHistoryHandle, EquationsHistoryProps>(({onCleared, onChanged, onReverted, onStepsRemoved}, ref) => {
  const { t } = useTranslation();
  const [history, setHistory] = useState<HistoryStep[]>([]);
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<number | null>();

  useImperativeHandle(ref, () => ({
    insert(step: HistoryStep) {
      setHistory(prev => [...prev.filter(x => !x.removed), step])
    }
  }));

  const onMenuOpened = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    setMenuAnchor(e.currentTarget);
    setSelectedItemId(id);
  }

  const onMenuClosed = () => {
    setMenuAnchor(null);
    setSelectedItemId(null);
  }

  const clear = (): void => {
    if (!history.length) {
      return;
    }
    setHistory([]);
    onCleared();
  }

  const goBack = (): void => {
    if (!history.length) {
      return;
    }
    const hist = history.filter(x => !x.removed);
    const prevStep = hist.pop()!;
    setHistory([...hist])
    onChanged(prevStep.expr);
  }

  const goTo = (): void => {
    onMenuClosed();
    if (selectedItemId === history.length - 1 || selectedItemId == null) {
      return;
    }
    const step = history[selectedItemId + 1];
    history.forEach((x, i) => {
      if (i > selectedItemId) {
        x.removed = true;
      }
    });
    setHistory([...history]);
    onStepsRemoved(step.expr);
  }

  const removeAfter = (): void => {
    onMenuClosed();
    if (selectedItemId === history.length - 1 || selectedItemId == null) {
      return;
    }
    const step = history[selectedItemId + 1];
    history.splice(selectedItemId + 1);
    setHistory([...history]);
    onChanged(step.expr);
  }

  const revert = (): void => {
    history.forEach(x => x.removed = false);
    setHistory([...history]);
    onReverted(history[history.length - 1].expr);
  }

  const isRemoved = (): boolean => {
    return history.some(x => x.removed);
  }

  return <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexGrow: 1,
      minHeight: 0
    }}
  >
    <Box
      sx={{
        padding: theme => theme.spacing(0, 1, 1, 1),
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1,
        mt: 3,
        overflowY: 'auto',
        minHeight: 0,
        flexGrow: 1,
        gridAutoRows: 'min-content',
      }}
    >
      {history.map((item, i) => (
        <Card
          key={i}
          variant='outlined'
          sx={{position: 'relative', opacity: item.removed ? '0.25' : '1'}}
        >
          {!item.removed ? <IconButton
            aria-label='more'
            onClick={(e) => onMenuOpened(e, i)}
            sx={{
              position: 'absolute',
              top: 2,
              right: 2,
              zIndex: 2,
            }}
          >
            <MoreVertIcon />
          </IconButton> : null}
          <CardContent sx={{ pb: '16px !important' }}>
            <Typography variant='h5' sx={{ textAlign: 'center', p: 1 }}>
              {i + 1}) {item.expr.getVisual()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    <Box
      sx={{
        width: '100%',
        background: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 1,
        flexShrink: 0
      }}
    >
      <Box sx={{display: 'flex', gap: 1}}>
        <Button variant='contained' onClick={clear}>
          <Typography>{t('clear')}</Typography>
        </Button>
        <Button variant='contained' onClick={goBack} sx={{position: 'relative'}}>
          <Typography>{t('back')}</Typography>
          {isRemoved() ? <RemovedHistoryStepsTooltip additionalText={t('lastNonFaded')}/> : null}
        </Button>
      </Box>
      {isRemoved() ? <Button onClick={revert}>{t('bringBack')}</Button> : null}
    </Box>
    <Menu
      anchorEl={menuAnchor}
      open={Boolean(menuAnchor)}
      onClose={() => onMenuClosed()}
    >
      <MenuItem onClick={goTo}>
        {t('goToStep')}
      </MenuItem>
      <MenuItem onClick={removeAfter}>
        {t('removeAfter')}
      </MenuItem>
    </Menu>
  </Box>;
})