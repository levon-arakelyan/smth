import {Tooltip, styled, tooltipClasses, type SxProps, type Theme, type TooltipProps } from "@mui/material";

export const ArrowedTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export const styles: Record<string, SxProps<Theme>> = {
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(50%, -50%)',
    borderRadius: '50%',
    background: 'white'
  }
}