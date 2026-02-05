import { Box, Button, Dialog, DialogContent, Menu, MenuItem, MenuList, Typography } from "@mui/material";
import { styles } from "./styles";
import i18n, { defaultLanguage, flagWidth, Language, languageFlagUrl, languagesMap } from "../../../i18n";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { LocalStorageKey } from "../../../core/services/local-storage/local-storage-keys";
import { useMenuAnchor } from "../../../hooks/useMenuAnchor";
import CheckIcon from '@mui/icons-material/Check';
import type { LanguageSwitcherProps } from "../../../core/components/props";
import React from "react";

export function LanguageSwitcher({isModal, open, onLanguageSelected}: LanguageSwitcherProps) {
  const { anchorEl, openMenu, closeMenu, isOpen } = useMenuAnchor();
  const [language, setLanguage] = useLocalStorage<Language>(LocalStorageKey.Language, defaultLanguage)

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    if (onLanguageSelected) {
      onLanguageSelected();
    } else {
      closeMenu();
    }
  };

  const languageOption = (lng: Language) => {
    return <Box sx={styles.languageMainBox}>
      <Box sx={styles.languageOptionBox}>
        <Box sx={styles.flagBox}>
          <img src={languageFlagUrl(lng)} width={flagWidth} />
        </Box>
        <Typography variant={isModal ? 'h6' : 'body1'} sx={styles.countryCodeText}>{languagesMap.get(lng)}</Typography>
      </Box>
      {language == lng && <CheckIcon sx={{ml: isModal ? 0 : 2}} fontSize={isModal ? 'large' : 'medium'} color='success' />}
    </Box>
  }

  const menuItems = Array.from(languagesMap.keys()).map((lng => (
    <MenuItem key={lng} onClick={() => changeLanguage(lng as Language)}>
      {languageOption(lng as Language)}
    </MenuItem>
  )));

  return isModal ?
    <Dialog open={open || false} onClose={onLanguageSelected} slotProps={{paper: {sx: styles.mainBox}}}>
      <DialogContent>
        <MenuList>{menuItems}</MenuList>
      </DialogContent>
    </Dialog> :
    <React.Fragment>
      <Button color='inherit' sx={{textTransform: 'none'}} onClick={openMenu}>
        <Box sx={styles.languageOptionBox}>
          <Box sx={styles.flagBox}>
            <img src={languageFlagUrl(language)} width={flagWidth} />
          </Box>
          <Typography variant='body1' sx={styles.countryCodeText}>{languagesMap.get(language)}</Typography>
          <ExpandMoreIcon/>
        </Box>
      </Button>
      <Menu anchorEl={anchorEl} onClose={closeMenu} open={isOpen}>{menuItems}</Menu>
    </React.Fragment>
}