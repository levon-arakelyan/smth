import type { SxProps, Theme } from "@mui/material";
import { centeredModal } from "../../../core/main/shared-styles";

export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    ...centeredModal,
    py: 2,
    width: 350
  },
  languageCard: {
    padding: 1
  },
  languageMainBox: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  languageOptionBox: {
    display: 'flex',
    alignItems: 'center'
  },
  flagBox: {
    display: 'flex',
    alignItems: 'center',
    border: '0.5px solid black'
  },
  countryCodeText: {
    ml: 1,
    fontWeight: 'normal'
  }
}