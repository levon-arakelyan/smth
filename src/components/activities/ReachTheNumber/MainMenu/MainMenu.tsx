import { MoreVert } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { useMenuAnchor } from '../../../../hooks/useMenuAnchor';
import { LanguageSwitcher } from '../../../main/LanguageSwitcher/LanguageSwitcher';
import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { LevelSelection } from '../LevelSelection/LevelSelection';
import type { MainMenuProps } from '../../../../core/activities/ReachTheNumber/props';

export function MainMenu({ onLevelSelected }: MainMenuProps) {
  const { t } = useTranslation();

  const { anchorEl, openMenu, closeMenu, isOpen } = useMenuAnchor();
  const [isLangModalOpen, setIsLangModalOpen] = useState<boolean>(false);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState<boolean>(false);

  const selectLanguage = () => {
    closeMenu();
    setIsLangModalOpen(true);
  }

  const selectLevel = () => {
    closeMenu();
    setIsLevelModalOpen(true);
  }

  return <>
    <IconButton onClick={openMenu}>
      <MoreVert sx={{width: 40, height: 40}}/>
    </IconButton>
    <Menu anchorEl={anchorEl} onClose={closeMenu} open={isOpen}>
      <MenuItem onClick={selectLevel}>
        <FormatListNumberedIcon sx={styles.menuItemIcon}/>{t('levels')}
      </MenuItem>
      <MenuItem onClick={selectLanguage}>
        <LanguageIcon sx={styles.menuItemIcon}/>{t('selectLang')}
      </MenuItem>
    </Menu>
    <LanguageSwitcher open={isLangModalOpen} onLanguageSelected={() => setIsLangModalOpen(false)}/>
    <LevelSelection open={isLevelModalOpen} onLevelSelected={(i) => {setIsLevelModalOpen(false); onLevelSelected(i)}} />
  </>
}