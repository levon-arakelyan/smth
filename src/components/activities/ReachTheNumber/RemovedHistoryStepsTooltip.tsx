import { Tooltip, styled, type TooltipProps, tooltipClasses } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { useTranslation } from 'react-i18next';
import type { RemovedHistoryStepsTooltipProps } from '../../../core/props/ReachTheNumber';

const ArrowedTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export function RemovedHistoryStepsTooltip({additionalText}: RemovedHistoryStepsTooltipProps) {
  const { t } = useTranslation();

  return <ArrowedTooltip title={t('removeAllFaded') + (additionalText ?? '')} placement='top-start'>
    <ErrorIcon color='error' sx={{position: 'absolute', top: 0, right: 0, transform: 'translate(50%, -50%)', borderRadius: '50%', background: 'white'}}/>
  </ArrowedTooltip>
}