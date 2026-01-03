import { Box, Card, CardActionArea, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";

const languages: Map<string, string> = new Map<string, string>([
  ['gb', 'English'],
  ['ru', 'Русский']
]);

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setAnchor(null);
  };

  const languageOption = (code: string) => {
    return <Box sx={styles.languageOptionBox}>
      <Box sx={styles.flagBox}>
        <img src={`https://flagcdn.com/${code}.svg`} width={24} />
      </Box>
      <Typography sx={styles.countryCodeText}>{languages.get(code)}</Typography>
    </Box>
  }

  return <Box sx={styles.mainBox}>
    <Card onClick={(e) => setAnchor(e.currentTarget)} sx={styles.languageCard}>
      <CardActionArea>
      {languageOption(i18n.language)}
      </CardActionArea>
    </Card>
    <Menu anchorEl={anchor} open={!!anchor} onClose={() => setAnchor(null)}>
      <MenuItem onClick={() => changeLanguage('gb')}>
        {languageOption('gb')}
      </MenuItem>
      <MenuItem onClick={() => changeLanguage('ru')}>
        {languageOption('ru')}
      </MenuItem>
    </Menu>
  </Box>;
}