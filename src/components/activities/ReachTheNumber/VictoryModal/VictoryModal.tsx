import { Box, Button, Typography, Modal, Fade, Backdrop, Stack } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useTranslation } from 'react-i18next';
import type { VictoryModalProps } from '../../../../core/activities/ReachTheNumber/props';
import { styles, themeStyles } from "./styles";

export function VictoryModal({open, goal, onNextLevelClicked}: VictoryModalProps) {
  const { t } = useTranslation();

  return <Modal
    open={open}
    closeAfterTransition
    slots={{ backdrop: Backdrop }}
    slotProps={{
      backdrop: { timeout: 300 },
    }}
  >
    <Fade in={open}>
      <Box sx={themeStyles.mainBox}>
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
    </Fade>
  </Modal>
}