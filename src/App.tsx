import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, responsiveFontSizes } from '@mui/material';
import { MathJaxContext } from 'better-react-mathjax';
import { Outlet } from 'react-router-dom';
import { SoundProvider } from './contexts/SoundContext';

const mathJaxConfig = {
  loader: { load: ['input/tex', 'output/chtml'] },
};

export default function App() {
  const theme = responsiveFontSizes(createTheme());
  return <SoundProvider><MathJaxContext config={mathJaxConfig} src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><ThemeProvider theme={theme}>
    <CssBaseline />
    <Outlet />
  </ThemeProvider></MathJaxContext></SoundProvider>;
}