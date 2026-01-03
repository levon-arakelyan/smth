import { ReachTheNumber } from './components/activities/ReachTheNumber/ReachTheNumber';
import { LanguageSwitcher } from './components/main/LanguageSwitcher';
import { Addition } from './core/expressions/operations/addition';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <LanguageSwitcher />
      <ReachTheNumber
        start={1}
        steps={[
          [Addition], [4, 5]
        ]}
        goal={19}
      />
    </>
  )
}

export default App
