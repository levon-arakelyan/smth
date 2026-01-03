import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  victoryIcon: {
    fontSize: 64
  }
}

export const themeStyles: Record<string, SxProps<Theme>> = {
  mainBox: (theme) => ({
    outline: 'none',
    border: 'none',
    backgroundClip: 'padding-box',
    WebkitTransform: 'translate(-50%, -50%)',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: theme.palette.background.paper,
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    width: 350,
    animation: 'pop 0.4s ease-out',
    '@keyframes pop': {
      '0%': { transform: 'translate(-50%, -50%) scale(0.7)', opacity: 0 },
      '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
    },
  })
}