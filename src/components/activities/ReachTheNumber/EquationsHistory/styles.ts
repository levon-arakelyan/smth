import type { SxProps, Theme } from "@mui/material";
import type { IHistoryStep } from "../../../../core/activities/ReachTheNumber/history/ihistory-step";
import { mainVisibleBox } from "../../../../core/components/shared-styles";

const scrollbarWidth = 6;

const boxPadding = mainVisibleBox.padding * 8;
const historyBoxPadding = (boxPadding - scrollbarWidth) / 2;
const historyBoxMargin = boxPadding - historyBoxPadding;
const actionBtnWidth = {xs: '100%', sm: 'auto'};

export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    ...mainVisibleBox,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
    minHeight: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  historyContainerBox: {
    marginX: `-${historyBoxMargin}px`,
    paddingX: `${historyBoxPadding}px`,
    display: 'grid',
    flexDirection: 'column',
    gap: 1,
    overflow: 'auto',
    scrollBehavior: 'smooth',
    flexGrow: 1,
    height: 0,
    gridAutoRows: 'min-content',
    scrollbarGutter: 'stable both-edges',
    '&::-webkit-scrollbar': {
      width: `${scrollbarWidth}px`,
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
    justifyContent: { xs: 'end', sm: 'start' },
    paddingTop: 2,
    flexShrink: 0,
    '& > div': {
      display: { xs: 'none', sm: 'flex' },
    }
  },
  actionOnBigScreen: {
    width: '100%',
    justifyContent: 'space-between',
    gap: 1
  },
  mainActionsBox: {
    gap: 1,
    display: 'flex'
  },
  actionBtn: {
    width: actionBtnWidth
  },
  undoBtn: {
    position: 'relative',
    width: actionBtnWidth
  },
  actionBtnText: {
    display: 'flex',
    alignItems: 'center'
  },
  actionBtnIcon: {
    marginRight: 1
  },
  actionsMenu: {
    width: '100%',
    display: {xs: 'flex', sm: 'none'}
  },
  actionsMenuArrow: {
    mt: -1,
    overflow: 'visible',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      top: 'calc(100% - 5px)',
      left: '50%',
      transform: 'rotate(45deg)',
      zIndex: 0,
    },
  }
};

export const dynamicStyles: Record<string, ((...x: any) => SxProps<Theme>)> = {
  historyItemCard: (item: IHistoryStep) => ({
    position: 'relative',
    opacity: item.discarded ? 0.3 : 1,
    overflowX: 'auto',
    borderRadius: mainVisibleBox.borderRadius / 2,
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