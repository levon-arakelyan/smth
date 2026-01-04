import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  mainBox: {
    borderRadius: 6,
    boxShadow: '0 2px 4px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.06), 0 16px 32px rgba(0,0,0,0.04)',
    bgcolor: 'background.paper',
    padding: 2,
  },
  equationBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: 1,
    marginBottom: 2,
  },
  expressionStepBtn: {
    ['&:disabled']: {
      color: '#646e8f'
    },
    boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.1);',
    position: 'relative'
  },
  expressionStepBtnDropdownIcon: {
    position: 'absolute',
    bottom: -2,
    right: 0
  },
  expressionStepMenu: {
    display: 'flex',
    flexDirection: 'column'
  },
  expressionResultBox: {
    position: 'relative'
  },
  expressionReultBtn: {
    boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.1);',
    position: 'relative'
  },
  expressionReultBtnText: {
    color: '#e0e0e0',
  },
  expressionReultBtnIcon: {
    fontSize: '2rem'
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