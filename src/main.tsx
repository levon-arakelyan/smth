import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './router.tsx'
import './i18n.ts';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const createRoot = ViteReactSSG(
  { routes },
);
