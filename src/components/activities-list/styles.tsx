import type { SxProps, Theme } from "@mui/material";
import { lime } from "@mui/material/colors";
import { colorAnimatedText } from "../../core/components/shared-styles";

export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    padding: 3,
    minHeight: '100dvh',
    position: 'relative',
    backgroundColor: lime[50]
  },
  langBox: {
    display: 'flex',
    justifyContent: { xs: 'center', sm: 'flex-end' },
    pb: { xs: 2, sm: 0 }
  },
  titleBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 4
  },
  titleText: colorAnimatedText(['#ff6ec4', '#7873f5', '#4ade80']),
  titleMiniText: {
    color: 'text.secondary',
    fontWeight: '300'
  },
  activitesBox: {
    display: 'grid',
    gridTemplateColumns: {xs: `repeat(1, 1fr)`, lg: `repeat(2, 1fr)`},
    gap: 3
  },
  activityMedia: {
    height: { xs: 250, sm: 500 }
  },
  underConstructionBox: {
    height: {xs: 250, sm: 500},
    display: 'flex', justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme => theme.palette.grey[100]
  },
  underConstruction: {
    fontSize: 200
  }
}