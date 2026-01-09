import { keyframes } from "@emotion/react";
import type { SxProps, Theme } from "@mui/material";
import { mainVisibleBox } from "../shared-styles";

const bgAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    padding: {xs: 0, sm: mainVisibleBox.padding},
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100dvh',
    flexDirection: 'column',
    background: 'linear-gradient(-45deg, #c5cae9, #b3e5fc, #81d4fa, #e3f2fd)',
    backgroundSize: '400% 400%',
    animation: `${bgAnimation} 10s ease infinite`,
  },
  playgroundBox: {
    width: mainVisibleBox.width,
    borderRadius: mainVisibleBox.borderRadius,
    background: '#f9f8fe',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: mainVisibleBox.padding
  }
}