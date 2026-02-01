import { useCallback, useEffect, useState } from "react";
import { LocalStorageKey } from "../core/services/local-storage/local-storage-keys";
import { levels } from "../core/activities/ReachTheNumber/levels";
import { useLocalStorage } from "./useLocalStorage";
import { defaultLanguage, Language } from "../i18n";

export interface ILevelStore {
  levelIdx: number;
  maxLevelIdx: number
}

export function useLevel(activity: LocalStorageKey) {
  const [levelStore, setLevelStore] = useLocalStorage<ILevelStore>(activity, { levelIdx: 0, maxLevelIdx: 0 });
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(levelStore.levelIdx);
  const [maxLevelIndex, setMaxLevelIndex] = useState<number>(levelStore.maxLevelIdx);
  const [language] = useLocalStorage<Language>(LocalStorageKey.Language, defaultLanguage);

  const saveLevel = (levelIndex: number, maxLevelIndex: number = 0) => {
    setLevelStore({
      levelIdx: levelIndex,
      maxLevelIdx: Math.max(...[levelStore.maxLevelIdx, levelIndex, maxLevelIndex]),
    });
  };

  const getStepsEnding = useCallback((steps: number) => {
    if (steps === 1) return '';

    switch (language) {
      case Language.English:
        return 's';
      case Language.Russian:
        const n = steps % 100;
        const last = n % 10;
        if (n > 10 && n < 20) return 'ов';
        if (last === 1) return '';
        if (last >= 2 && last <= 4) return 'а';
        return 'ов';
      default:
        return '';
    }
  }, [language])

  useEffect(() => {
    setCurrentLevelIndex(levelStore.levelIdx);
    setMaxLevelIndex(levelStore.maxLevelIdx);
  }, [levelStore]);

  return {
    currentLevelIndex,
    currentLevel: levels[currentLevelIndex],
    maxLevelIndex,
    lastLevelIndex: levels.length - 1,
    maxLevel: levels[maxLevelIndex],
    saveLevel,
    getStepsEnding
  };
}