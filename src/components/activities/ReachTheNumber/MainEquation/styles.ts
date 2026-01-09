import type { SxProps, Theme } from "@mui/material";
import { mainVisibleBox } from "../shared-styles";

const latexFontSize: number = 32;
const expressionMemberBoxWidth = 64;
const resultIconFontSize = 2;
const expressionMemberBtnShadow = '0px 3px 5px 0px rgba(0,0,0,0.1);';

export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    width: '100%',
    boxShadow: mainVisibleBox.boxShadow,
    bgcolor: mainVisibleBox.backgroundColor,
    padding: mainVisibleBox.padding,
    display: 'flex',
    flexDirection: 'column',
    gap: mainVisibleBox.padding
  },
  equationBox: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center'
  },
  equationSubBox: {
    fontSize: `${latexFontSize}px`,
    display: 'flex',
    alignItems: 'center',
  },
  expressionMemberBox: {
    position: 'relative'
  },
  expressionMemberBtn: {
    ['&:disabled']: {
      color: '#646e8f'
    },
    boxShadow: expressionMemberBtnShadow,
    position: 'relative',
    width: `${expressionMemberBoxWidth}px`,
    '& p': {
      fontSize: `${latexFontSize}px`,
    },
  },
  expressionMemberBtnDropdownIcon: {
    position: 'absolute',
    bottom: -2,
    right: 0
  },
  expressionMemberMenu: {
    display: 'flex',
    flexDirection: 'column'
  },
  submemberBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(50%, -25%) scale(0.5)'
  },
  expressionResultBox: {
    position: 'relative'
  },
  expressionReultBtn: {
    boxShadow: expressionMemberBtnShadow,
    position: 'relative',
    minWidth: `${expressionMemberBoxWidth}px`,
  },
  expressionReultBtnText: {
    fontSize: `${latexFontSize}px`,
    display: 'flex',
  },
  expressionReultBtnIcon: {
    fontSize: `${resultIconFontSize}rem`,
  },
  expressionReultBtnNegInfinity: {
    marginLeft: 1,
    fontSize: `${resultIconFontSize}rem`
  },
  nextBtnBox: {
    display: 'flex',
    justifyContent: 'center'
  },
  nextBtn: {
    position: 'relative'
  },
  nextBtnText: {
    display: 'flex',
    alignItems: 'center'
  },
  nextBtnExclmation: {
    marginLeft: '3px',
    fontWeight: 'bold'
  }
};