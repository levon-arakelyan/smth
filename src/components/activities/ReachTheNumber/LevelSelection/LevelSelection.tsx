import { Box, IconButton, Typography } from "@mui/material";
import type { LevelSelectionProps } from "../../../../core/activities/ReachTheNumber/props";
import { rows, cols, styles } from "./styles";
import { levels, type ILevel } from "../../../../core/activities/ReachTheNumber/levels";
import { useLevel } from "../../../../hooks/useLevel";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme, useMediaQuery } from "@mui/material";
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { LocalStorageKey } from "../../../../core/services/local-storage/local-storage-keys";
import { FadeModal } from "../../../shared/FadeModal/FadeModal";

export function LevelSelection({open, onLevelSelected}: LevelSelectionProps) {
  const theme = useTheme();
  const { maxLevelIndex, currentLevelIndex, saveLevel } = useLevel(LocalStorageKey.ReachTheNumber);
  const { t } = useTranslation();

  const isSmDown =  useMediaQuery(theme.breakpoints.down('sm'));
  const itemsCount = rows * (isSmDown ? cols.xs : cols.sm);
  const [currentPage, setCurrentPage] = useState<number>(currentLevelIndex % itemsCount);

  const onLevelClicked = (level: ILevel | null, i: number) => {
    if (!level) {
      return;
    }
    saveLevel(i);
    onLevelSelected(i)
  }

  const isActive = (i: number): boolean => {
    return currentPage * itemsCount + i <= maxLevelIndex;
  }

  const chunked = (() => {
    const chunks = levels.reduce((acc, _, i) =>
      (i % itemsCount ? acc : [...acc, levels.slice(i, i + itemsCount)]), [] as (ILevel | null)[][]);
    const last = chunks[chunks.length - 1];
    while (last.length < itemsCount) {
      last.push(null);
    }
    return chunks;
  })();

  return <FadeModal open={open} onClose={() => onLevelSelected(null)}>
    <Box sx={styles.mainBox}>
      <Typography variant="h4" sx={styles.selectLvlText}>{t('selectLvl')}</Typography>
      <Box sx={styles.mainContentBox}>
        <IconButton
          color='info'
          sx={styles.arrowIcon}
          disabled={currentPage <= 0}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          <ChevronLeftIcon fontSize="large"/>
        </IconButton>
        <Box sx={styles.levelsBox}>
          {chunked[currentPage].map((level, i) => (
            <Box key={i}>
              <IconButton
                disabled={!isActive(i)}
                color="primary"
                sx={styles.levelIcon}
                onClick={() => onLevelClicked(level, i)}
              >
                {level && <Typography variant="h6" sx={styles.levelIconText}>
                  {isActive(i) ? level.N : <LockOutlineIcon/>}
                </Typography> }
              </IconButton>
            </Box>
          ))}
        </Box>
        <IconButton
          sx={styles.arrowIcon}
          color='info'
          disabled={currentPage >= chunked.length - 1}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  </FadeModal>;
}