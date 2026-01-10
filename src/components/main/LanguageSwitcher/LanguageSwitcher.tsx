import { Box, MenuItem, MenuList, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";
import { LocalStorageService } from "../../../core/services/local-storage/local-storage";
import { LocalStorageKey } from "../../../core/services/local-storage/local-storage-keys";
import type { LanguageSwitcherProps } from "../../../core/main/props";
import CheckIcon from '@mui/icons-material/Check';
import { FadeModal } from "../FadeModal/FadeModal";
import { defaultLanguage, Language, languageFlagUrl, languagesMap } from "../../../i18n";
import { useEffect } from "react";

export function LanguageSwitcher({open, onLanguageSelected}: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!LocalStorageService.get(LocalStorageKey.Language)) {
      changeLanguage(defaultLanguage);
    }
  }, []);

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    LocalStorageService.set(LocalStorageKey.Language, lng);
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
      {LocalStorageService.get(LocalStorageKey.Language) == lng && <CheckIcon fontSize="large" color='success' />}
    </Box>
  }

  return <FadeModal open={open} onClose={onLanguageSelected}>
    <Box sx={styles.mainBox}>
      <MenuList>
        <MenuItem onClick={() => changeLanguage(Language.English)}>
          {languageOption(Language.English)}
        </MenuItem>
        <MenuItem onClick={() => changeLanguage(Language.Russian)}>
          {languageOption(Language.Russian)}
        </MenuItem>
      </MenuList>
    </Box>
  </FadeModal>
}