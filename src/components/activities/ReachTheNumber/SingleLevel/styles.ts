import { keyframes } from "@emotion/react";
import type { SxProps, Theme } from "@mui/material";

const bgAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    padding: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100vh',
    flexDirection: 'column',
    background: 'linear-gradient(-45deg, #c5cae9, #b3e5fc, #81d4fa, #e3f2fd)',
    backgroundSize: '400% 400%',
    animation: `${bgAnimation} 15s ease infinite`,
  },
  playgroundBox: {
    width: '75%',
    borderRadius: 6,
    background: '#f9f8fe',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  levelContainerBox: {
    width: '100%'
  },
  levelText: {
    textAlign: 'center',
    fontWeight: 'bold',
    background: '#f0f2fd',
    padding: 2,
    borderBottom: '1px solid #eae6f1',
    borderRadius: '24px 24px 0 0'
  },
  goalText: {
    textAlign: 'center',
    padding: 2
  },
  gameBox: {
    width: '100%',
    height: 0,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'space-between',
    paddingX: '10%'
  }
}