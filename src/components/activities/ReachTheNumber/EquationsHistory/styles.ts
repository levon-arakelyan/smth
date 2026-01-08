import type { SxProps, Theme } from "@mui/material";
import type { IHistoryStep } from "../../../../core/activities/ReachTheNumber/history/ihistory-step";

export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
    minHeight: 0,
    borderRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    boxShadow: '0 2px 4px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.06), 0 16px 32px rgba(0,0,0,0.04)',
    bgcolor: 'background.paper',
    padding: 2,
    marginTop: 2,
  },
  historyContainerBox: {
    marginX: '-10px',
    paddingX: '4px',
    display: 'grid',
    flexDirection: 'column',
    gap: 1,
    overflow: 'auto',
    scrollBehavior: 'smooth',
    minHeight: 0,
    flexGrow: 1,
    gridAutoRows: 'min-content',
    scrollbarGutter: 'stable both-edges',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'transparent',
      borderRadius: 4,
    },
    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(0,0,0,0.25)',
      }
    },
  },
  removeIconContainerBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: 'transparent',
    transition: 'transform 0.25s ease, opacity 0.25s ease',
    transform: 'translateY(-100%)',
    opacity: 0,
  },
  historyItemCardContent: {
    pb: '16px !important',
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  historyItemNumber: {
    position: 'absolute',
    top: 4,
    left: 8
  },
  historyItemText: {
    textAlign: 'center',
    p: 1,
    width: '100%'
  },
  actionsContainerBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 2,
    flexShrink: 0
  },
  mainActionsBox: {
    display: 'flex',
    gap: 1
  },
  undoBtn: {
    position: 'relative',
  },
  actionBtnText: {
    display: 'flex',
    alignItems: 'center'
  },
  actionBtnIcon: {
    marginRight: 1
  }
};

export const dynamicStyles: Record<string, ((...x: any) => SxProps<Theme>)> = {
  historyItemCard: (item: IHistoryStep) => ({
    position: 'relative',
    opacity: item.discarded ? 0.3 : 1,
    overflowX: 'auto',
    borderRadius: 3,
    transition: '0.2s ease',
    '&:hover': {
      bgcolor: item.discarded ? 'initial' : 'rgba(229,115,115,0.5)',
      cursor: item.discarded ? 'initial' : 'pointer',
      '& .remove-btn': {
        transform: 'translateY(0)',
        opacity: 1,
      },
    },
  }),
}