import { useEffect, useState } from "react";
import { LocalStorageService } from "../../../services/local-storage/local-storage";
import { LocalStorageKey } from "../../../services/local-storage/local-storage-keys";
import { levels } from "../levels";

export interface ILevelStore {
  levelIdx: number;
  maxLevelIdx: number
}

export function useLevel() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [maxLevelIndex, setMaxLevelIndex] = useState<number>(0);

  const loadLevelStore = (): ILevelStore => {
    const saved = LocalStorageService.get<ILevelStore>(LocalStorageKey.ReachTheNumber);
    if (!saved) {
      const newStore = { levelIdx: 0, maxLevelIdx: 0 };
      LocalStorageService.set(LocalStorageKey.ReachTheNumber, newStore);
      return { levelIdx: 0, maxLevelIdx: 0 };
    }

    return saved;
  };

  const saveLevel = (levelIndex: number) => {
    const oldStore = loadLevelStore();
    const newStore: ILevelStore = {levelIdx: levelIndex, maxLevelIdx: oldStore.maxLevelIdx};

    if (newStore.levelIdx > newStore.maxLevelIdx) {
      newStore.maxLevelIdx = newStore.levelIdx;
    }

    LocalStorageService.set(LocalStorageKey.ReachTheNumber, newStore);
    setCurrentLevelIndex(newStore.levelIdx);
    setMaxLevelIndex(newStore.maxLevelIdx);
  };

  useEffect(() => {
    const idx = loadLevelStore();
    setCurrentLevelIndex(idx.levelIdx);
    setMaxLevelIndex(idx.maxLevelIdx);
  }, []);

  return {
    currentLevelIndex,
    currentLevel: levels[currentLevelIndex].N,
    maxLevelIndex,
    lastLevelIndex: levels.length - 1,
    maxLevel: levels[maxLevelIndex].N,
    saveLevel
  };
}