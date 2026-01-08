import type { SxProps, Theme } from "@mui/material";

const latexFontSize: number = 32;
const expressionMemberBoxWidth = 64;

export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    width: '100%',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.06), 0 16px 32px rgba(0,0,0,0.04)',
    bgcolor: 'background.paper',
    padding: 2,
  },
  equationBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  equationSubBox: {
    fontSize: `${latexFontSize}px`,
    display: 'flex',
    alignItems: 'center'
  },
  expressionMemberBox: {
    position: 'relative'
  },
  expressionMemberBtn: {
    ['&:disabled']: {
      color: '#646e8f'
    },
    boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.1);',
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
    boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.1);',
    position: 'relative',
    minWidth: `${expressionMemberBoxWidth}px`,
  },
  expressionReultBtnText: {
    fontSize: `${latexFontSize}px`,
    display: 'flex',
  },
  expressionReultBtnIcon: {
    fontSize: '2rem',
  },
  expressionReultBtnNegInfinity: {
    marginLeft: 1,
    fontSize: '2rem'
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