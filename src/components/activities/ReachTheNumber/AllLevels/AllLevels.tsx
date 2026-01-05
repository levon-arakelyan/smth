import { useState } from "react";
import { ReachTheNumberLevel } from "../SingleLevel/SingleLevel";
import { levels } from "./levels";
import { LocalStorageService } from "../../../../core/services/local-storage/local-storage";
import { LocalStorageKey } from "../../../../core/services/local-storage/local-storage-keys";

export function ReachTheNumberAllLevels() {
  const loadLevel = (): number => {
    const saved = LocalStorageService.get<{ data: string; checksum: string }>(LocalStorageKey.ReachTheNumber);
    if (!saved) return 0;

    const { data, checksum } = saved;
    if (btoa(data).slice(0, 5) !== checksum) return 1;

    try {
      const parsed = JSON.parse(data);
      return parsed.level ?? 0;
    } catch {
      return 0;
    }
  };

  const saveLevel = (level: number) => {
    const data = JSON.stringify({ level });
    const checksum = btoa(data).slice(0, 5);
    LocalStorageService.set(LocalStorageKey.ReachTheNumber, { data, checksum });
  };

  const [levelIndex, setLevelIndex] = useState<number>(loadLevel());

  const onLevelCompleted = () => {
    const newLevel = levelIndex === levels.length - 1 ? 0 : levelIndex + 1;
    setLevelIndex(newLevel);
    saveLevel(newLevel);
  };

  const allLevels = levels.map(l => ({...l, expr: l.expr.build()}));
  const currentLevel = allLevels[levelIndex];
  return (
    <ReachTheNumberLevel
      key={levelIndex}
      start={currentLevel.start}
      goal={currentLevel.goal}
      level={levelIndex + 1}
      members={currentLevel.expr}
      onLevelCompleted={onLevelCompleted}
    />
  );
}
