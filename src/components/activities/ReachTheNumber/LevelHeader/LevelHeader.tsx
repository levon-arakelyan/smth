import { Card, Typography } from '@mui/material';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import type { LevelHeaderProps } from '../../../../core/activities/ReachTheNumber/props';

export function LevelHeader({level, goal}: LevelHeaderProps) {
  const { t } = useTranslation();

  return <Card sx={styles.levelContainerBox}>
    <Typography variant='h2' sx={styles.levelText}>
      {t('level')} {level}
    </Typography>
    <Typography variant='h4' sx={styles.goalText}>🏅{t('goal')}: {goal}</Typography>
  </Card>
}