import { Box, Button, Typography, Stack } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useTranslation } from 'react-i18next';
import type { VictoryModalProps } from '../../../../core/activities/ReachTheNumber/props';
import { styles } from "./styles";
import { FadeModal } from '../../../main/FadeModal/FadeModal';

export function VictoryModal({open, goal, onNextLevelClicked}: VictoryModalProps) {
  const { t } = useTranslation();

  return <FadeModal open={open}>
    <Box sx={styles.mainBox}>
      <Stack spacing={2} alignItems="center">
        <EmojiEventsIcon color="warning" sx={styles.victoryIcon} />
        <Typography variant="h4" fontWeight="bold">
          {t('victory')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t('userReachedNumber', {number: goal})}
        </Typography>
        <Button variant="contained" color="success" onClick={onNextLevelClicked}>
          {t('nextLevel')}
        </Button>
      </Stack>
    </Box>
  </FadeModal>
}