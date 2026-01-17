import type { SxProps, Theme } from "@mui/material";
import { mainVisibleBox } from "../../../../core/components/shared-styles";

export const styles: Record<string, SxProps<Theme>> = {
  levelContainerBox: {
    ...mainVisibleBox,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  levelText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  goalText: {
    textAlign: 'center',
  },
  goalNumber: {
    fontWeight: 'bold',
    fontSize: '2rem',
    background: 'linear-gradient(270deg, #ff6ec4, #7873f5, #4ade80)',
    backgroundSize: '400% 400%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'textGradient 10s ease infinite',
    '@keyframes textGradient': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
  }
}