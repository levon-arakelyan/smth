import type { Theme } from "@mui/material";
import type { SxProps } from "@mui/material/styles";
import { centeredModal } from "../../../../core/components/shared-styles";

export const rows = 3;
export const cols = {xs: 3, sm: 5};
export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    ...centeredModal,
    width: {xs: 'calc(100% - 32px)', sm: 450},
    pt: 2,
    pb: 3,
    px: 1
  },
  selectLvlText: {
    mb: 2
  },
  mainContentBox: {
    display: 'flex',
    alignItems: 'center'
  },
  arrowIcon: {
    borderRadius: '30%'
  },
  levelsBox: {
    display: 'grid',
    gridTemplateColumns: {xs: `repeat(${cols.xs}, 1fr)`, sm: `repeat(${cols.sm}, 1fr)`},
    gap: 2,
    flexGrow: 1
  },
  levelIcon: {
    height: 52,
    width: 52,
    borderColor: 'info.main',
    borderRadius: 2,
    backgroundColor: 'background.paper',
    '&:hover': {
      backgroundColor: 'info.light',
      color: 'white'
    },
    '&:disabled': {
      borderColor: 'action.disabled'
    }
  },
  levelIconText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
}