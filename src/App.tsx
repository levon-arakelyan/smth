import { LanguageSwitcher } from './components/main/LanguageSwitcher/LanguageSwitcher';
import { CssBaseline } from '@mui/material';
import { ReachTheNumber } from './components/activities/ReachTheNumber/AllLevels/AllLevels';

function App() {
  return (
    <>
      <CssBaseline />
      <LanguageSwitcher />
      <ReachTheNumber />
    </>
  )
}

export default App
