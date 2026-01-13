import type { SxProps, Theme } from "@mui/material";
import { mainVisibleBox } from "../../../../core/components/shared-styles";

export const styles: Record<string, SxProps<Theme>> = {
  levelContainerBox: {
    ...mainVisibleBox,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  levelText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  goalText: {
    textAlign: 'center',
  },
}