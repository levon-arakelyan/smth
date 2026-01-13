import type { SxProps, Theme } from "@mui/material";
import { centeredModal } from "../../../../core/components/shared-styles";

export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    p: 4,
    width: 350,
    ...centeredModal
  },
  victoryIcon: {
    fontSize: 64
  },
  emoji: {
    color: 'black'
  },
  cakeIcon: {
    fontSize: 100
  }
}
