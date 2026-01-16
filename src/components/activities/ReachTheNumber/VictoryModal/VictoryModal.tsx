import { Box, Button, Typography, Stack, Dialog, DialogContent } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useTranslation } from 'react-i18next';
import type { VictoryModalProps } from '../../../../core/activities/ReachTheNumber/props';
import { styles } from "./styles";
import { useLevel } from '../../../../hooks/useLevel';
import CakeIcon from '@mui/icons-material/Cake';
import { LocalStorageKey } from '../../../../core/services/local-storage/local-storage-keys';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import RefreshIcon from '@mui/icons-material/Refresh';

export function VictoryModal({open, history, onNextLevelClicked, onRetryClicked}: VictoryModalProps) {
  const { t } = useTranslation();
  const { currentLevelIndex, currentLevel, lastLevelIndex, getStepsEnding } = useLevel(LocalStorageKey.ReachTheNumber);

  const levelPassedText = (() => {
    const ending = getStepsEnding(currentLevel.authorSteps);
    const steps = currentLevel.authorSteps;

    if (history.length < currentLevel.authorSteps) {
      return t('levelRespect', {steps, ending});
    }

    if (history.length > currentLevel.authorSteps) {
      return t('levelChallenge', {steps, ending});
    }

    return t('levelPassed', {steps, ending});
  })();

  return <Dialog open={open} slotProps={{paper: {sx: styles.mainBox}}}>
    <DialogContent>
      <Stack spacing={2} alignItems="center">
        { currentLevelIndex < lastLevelIndex && <EmojiEventsIcon color="warning" sx={styles.victoryIcon} />}
        <Typography variant="h3" fontWeight="bold">
          {t('victory')}
        </Typography>
        <Typography color="text.secondary" textAlign='center'>
          {currentLevelIndex < lastLevelIndex ?
            <Typography component='span' variant='h5'>{t('userReachedNumber', {number: currentLevel.goal})}</Typography> :
            <>
              <Typography component='span'>{t('allLevelsPassed')}</Typography>
              <Typography component='span'>{t('cake')} <Typography component='span' sx={styles.emoji}>😊</Typography></Typography>
            </>
          }
          <Typography component='span'>
            <br/>
            <br/>
            {levelPassedText}
          </Typography>
        </Typography>
        {currentLevelIndex >= lastLevelIndex && <CakeIcon sx={styles.cakeIcon} color='warning'/>}
        <Box sx={styles.retryBox}>
          <Button variant="outlined" color="info" onClick={onRetryClicked}>
            <RefreshIcon sx={styles.refreshIcon}/>
            <Typography>{t('tryAgain')}</Typography>
          </Button>
          <Button variant="contained" color="success" onClick={onNextLevelClicked} sx={styles.nextLevelBtn}>
            <Typography>{currentLevelIndex < lastLevelIndex ?
              t('nextLevel') :
              t('backToFirstLvl')}</Typography>
              <ChevronRightRoundedIcon/>
          </Button>
        </Box>
      </Stack>
    </DialogContent>
  </Dialog>
}