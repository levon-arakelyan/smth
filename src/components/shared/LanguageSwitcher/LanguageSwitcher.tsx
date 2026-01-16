import { Box, Dialog, DialogContent, MenuItem, MenuList, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";
import { LocalStorageKey } from "../../../core/services/local-storage/local-storage-keys";
import type { LanguageSwitcherProps } from "../../../core/components/props";
import CheckIcon from '@mui/icons-material/Check';
import { defaultLanguage, Language, languageFlagUrl, languagesMap } from "../../../i18n";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

export function LanguageSwitcher({open, onLanguageSelected}: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage<Language>(LocalStorageKey.Language, defaultLanguage)

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    onLanguageSelected();
  };

  const languageOption = (lng: Language) => {
    return <Box sx={styles.languageMainBox}>
      <Box sx={styles.languageOptionBox}>
        <Box sx={styles.flagBox}>
          <img src={languageFlagUrl(lng)} width={28} />
        </Box>
        <Typography variant='h6' sx={styles.countryCodeText}>{languagesMap.get(lng)}</Typography>
      </Box>
      {language == lng && <CheckIcon fontSize="large" color='success' />}
    </Box>
  }

  return <Dialog open={open} onClose={onLanguageSelected} slotProps={{paper: {sx: styles.mainBox}}}>
    <DialogContent>
      <MenuList>
        <MenuItem onClick={() => changeLanguage(Language.English)}>
          {languageOption(Language.English)}
        </MenuItem>
        <MenuItem onClick={() => changeLanguage(Language.Russian)}>
          {languageOption(Language.Russian)}
        </MenuItem>
      </MenuList>
    </DialogContent>
  </Dialog>
}