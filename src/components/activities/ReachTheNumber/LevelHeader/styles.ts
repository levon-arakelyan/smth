import type { SxProps, Theme } from "@mui/material";
import { colorAnimatedText, mainVisibleBox } from "../../../../core/components/shared-styles";
import { grey } from "@mui/material/colors";

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
  goalNumber: {
    fontSize: '2rem',
    ...colorAnimatedText([grey[500], grey[700], grey[900]]),
  }
}