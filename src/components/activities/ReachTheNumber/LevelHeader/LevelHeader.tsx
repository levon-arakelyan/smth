import { Card, Typography } from '@mui/material';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { useLevel } from '../../../../hooks/useLevel';
import { LocalStorageKey } from '../../../../core/services/local-storage/local-storage-keys';

export function LevelHeader() {
  const { t } = useTranslation();
  const { currentLevel } = useLevel(LocalStorageKey.ReachTheNumber);

  return <Card sx={styles.levelContainerBox}>
    <Typography variant='h2' sx={styles.levelText}>
      {t('level')} {currentLevel.level}
    </Typography>
    <Typography variant='h4' sx={styles.goalText}>🏅{t('goal')}: {currentLevel.goal}</Typography>
  </Card>
}