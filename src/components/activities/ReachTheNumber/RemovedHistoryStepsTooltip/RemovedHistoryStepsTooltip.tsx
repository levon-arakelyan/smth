import ErrorIcon from '@mui/icons-material/Error';
import { useTranslation } from 'react-i18next';
import type { RemovedHistoryStepsTooltipProps } from '../../../../core/activities/ReachTheNumber/props';
import { ArrowedTooltip, styles } from './styles';

export function RemovedHistoryStepsTooltip({additionalText}: RemovedHistoryStepsTooltipProps) {
  const { t } = useTranslation();

  return <ArrowedTooltip title={t('removeAllFaded') + (additionalText ?? '')} placement='top-start'>
    <ErrorIcon color='error' sx={styles.icon}/>
  </ArrowedTooltip>
}