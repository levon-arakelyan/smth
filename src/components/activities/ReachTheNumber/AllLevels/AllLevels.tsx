import { levels } from "../../../../core/activities/ReachTheNumber/levels";
import { MathJaxContext } from "better-react-mathjax";
import { CurrentLevel } from "../CurrentLevel/CurrentLevel";
import { useLevel } from "../../../../core/activities/ReachTheNumber/hooks/useLevel";
import { SoundProvider } from "../../../../contexts/SoundContext";

export function ReachTheNumber() {
  const { currentLevelIndex, lastLevelIndex, saveLevel } = useLevel();
  const onLevelSelected = (levelIndex: number | null) => {
    if (levelIndex == null) {
      return;
    }
    saveLevel(levelIndex > lastLevelIndex ? 0 : levelIndex)
  };

  const allLevels = levels.map(l => ({...l, expr: l.expr.build()}));
  const level = allLevels[currentLevelIndex];

  return <SoundProvider>
    <MathJaxContext>
      <CurrentLevel
        key={level.N}
        start={level.start}
        goal={level.goal}
        level={level.N}
        members={level.expr}
        onLevelSelected={onLevelSelected}
      />
    </MathJaxContext>
  </SoundProvider>;
}
