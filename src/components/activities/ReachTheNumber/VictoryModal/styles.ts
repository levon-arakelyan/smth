import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    borderRadius: 4
  },
  victoryIcon: {
    fontSize: 64
  },
  emoji: {
    color: 'black'
  },
  cakeIcon: {
    fontSize: 100
  },
  retryBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: 1,
    pt: 2,
    width: '100%',
    flexDirection: { xs: 'column', sm: 'row' }
  },
  refreshIcon: {
    mr: 1
  },
  nextLevelBtn: {
    display: 'flex',
    alignItems: 'center'
  }
}
