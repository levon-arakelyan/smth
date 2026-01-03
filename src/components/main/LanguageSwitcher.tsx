import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
    return <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{display: 'flex', alignItems: 'center', border: '0.5px solid black'}}>
        <img src={`https://flagcdn.com/${code}.svg`} width={24} />
      </Box>
      <Typography sx={{ml: 1}}>{languages.get(code)}</Typography>
    </Box>
  }

  return <Box sx={{position: 'absolute', right: 0, padding: 2}}>
    <Button variant='outlined' onClick={(e) => setAnchor(e.currentTarget)} sx={{textTransform: 'none'}}>
      {languageOption(i18n.language)}
    </Button>
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