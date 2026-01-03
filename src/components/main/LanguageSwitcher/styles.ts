import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    position: 'absolute',
    right: 0,
    padding: 2
  },
  languageCard: {
    padding: 1
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
    ml: 1
  }
}