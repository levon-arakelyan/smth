import { useEffect, useState } from "react";
import { LocalStorageKey } from "../core/services/local-storage/local-storage-keys";
import { levels } from "../core/activities/ReachTheNumber/levels";
import { useLocalStorage } from "./useLocalStorage";

export interface ILevelStore {
  levelIdx: number;
  maxLevelIdx: number
}

export function useLevel(activity: LocalStorageKey) {
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [maxLevelIndex, setMaxLevelIndex] = useState<number>(0);
  const [levelStore, setLevelStore] = useLocalStorage<ILevelStore>(activity, { levelIdx: 0, maxLevelIdx: 0 });

  const saveLevel = (levelIndex: number) => {
    setLevelStore(prev => {
      const newStore: ILevelStore = {
        levelIdx: levelIndex,
        maxLevelIdx: Math.max(prev.maxLevelIdx, levelIndex),
      };
      return newStore;
    });
  };

  useEffect(() => {
    setCurrentLevelIndex(levelStore.levelIdx);
    setMaxLevelIndex(levelStore.maxLevelIdx);
  }, [levelStore]);

  return {
    currentLevelIndex,
    currentLevel: levels[currentLevelIndex].N,
    maxLevelIndex,
    lastLevelIndex: levels.length - 1,
    maxLevel: levels[maxLevelIndex].N,
    saveLevel
  };
}