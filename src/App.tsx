import { LanguageSwitcher } from './components/main/LanguageSwitcher/LanguageSwitcher';
import { CssBaseline } from '@mui/material';
import { ReachTheNumberAllLevels } from './components/activities/ReachTheNumber/AllLevels/AllLevels';

function App() {
  return (
    <>
      <CssBaseline />
      <LanguageSwitcher />
      <ReachTheNumberAllLevels />
    </>
  )
}

export default App
