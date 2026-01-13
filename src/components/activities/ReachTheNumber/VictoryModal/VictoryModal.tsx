import { Box, Button, Typography, Stack } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useTranslation } from 'react-i18next';
import type { VictoryModalProps } from '../../../../core/activities/ReachTheNumber/props';
import { styles } from "./styles";
import { useLevel } from '../../../../hooks/useLevel';
import CakeIcon from '@mui/icons-material/Cake';
import { LocalStorageKey } from '../../../../core/services/local-storage/local-storage-keys';
import { FadeModal } from '../../../shared/FadeModal/FadeModal';

export function VictoryModal({open, goal, onNextLevelClicked}: VictoryModalProps) {
  const { t } = useTranslation();
  const { currentLevelIndex, lastLevelIndex } = useLevel(LocalStorageKey.ReachTheNumber);

  return <FadeModal open={open}>
    <Box sx={styles.mainBox}>
      <Stack spacing={2} alignItems="center">
        { currentLevelIndex < lastLevelIndex && <EmojiEventsIcon color="warning" sx={styles.victoryIcon} />}
        <Typography variant="h4" fontWeight="bold">
          {t('victory')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {currentLevelIndex < lastLevelIndex ?
            t('userReachedNumber', {number: goal}) :
            <>
              <Typography>{t('allLevelsPassed')}</Typography>
              <Typography>{t('cake')} <Typography component='span' sx={styles.emoji}>😊</Typography></Typography>
            </>
          }
        </Typography>
        {currentLevelIndex >= lastLevelIndex && <CakeIcon sx={styles.cakeIcon} color='warning'/>}
        <Button variant="contained" color="success" onClick={onNextLevelClicked}>
          {currentLevelIndex < lastLevelIndex ?
            t('nextLevel') :
            t('backToFirstLvl')}
        </Button>
      </Stack>
    </Box>
  </FadeModal>
}