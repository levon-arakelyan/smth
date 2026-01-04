import ErrorIcon from '@mui/icons-material/Error';
import type { WarningTooltipProps } from '../../../../core/activities/ReachTheNumber/props';
import { ArrowedTooltip, styles } from './styles';

export function WarningTooltip({text}: WarningTooltipProps) {
  return <ArrowedTooltip title={`${text}`} placement='top-start'>
    <ErrorIcon color='error' sx={styles.icon}/>
  </ArrowedTooltip>
}