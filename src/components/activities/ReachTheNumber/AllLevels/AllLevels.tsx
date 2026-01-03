import { useState } from "react";
import { ReachTheNumberLevel } from "../SingleLevel/SingleLevel";
import { levels } from "./levels";

export function ReachTheNumberAllLevels() {
  const [level, setLevel] = useState<number>(0);

  const onLevelCompleted = () => {
    setLevel(level === levels.length - 1 ? 0 : level + 1);
  }

  return <ReachTheNumberLevel key={level} {...levels[level]} onLevelCompleted={onLevelCompleted}/>
}