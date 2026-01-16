import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useMenuAnchor } from '../../../../hooks/useMenuAnchor';
import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { LevelSelection } from '../LevelSelection/LevelSelection';
import type { MainMenuProps } from '../../../../core/activities/ReachTheNumber/props';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useSoundSettings } from '../../../../contexts/SoundContext';
import { LanguageSwitcher } from '../../../shared/LanguageSwitcher/LanguageSwitcher';

export function MainMenu({ onLevelSelected }: MainMenuProps) {
  const { t } = useTranslation();
  const { muted, toggleMute } = useSoundSettings();

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

  const setVolume = () => {
    closeMenu();
    toggleMute();
  }

  return <>
    <IconButton onClick={openMenu}>
      <MoreVert sx={styles.menuIcon}/>
    </IconButton>
    <Menu anchorEl={anchorEl} onClose={closeMenu} open={isOpen}>
      <MenuItem onClick={selectLevel}>
        <FormatListNumberedIcon sx={styles.menuItemIcon}/>{t('levels')}
      </MenuItem>
      <MenuItem onClick={selectLanguage}>
        <LanguageIcon sx={styles.menuItemIcon}/>{t('selectLang')}
      </MenuItem>
      <MenuItem onClick={setVolume}>
        {muted ?
          <><VolumeOffIcon sx={styles.menuItemIcon}/>{t('unmute')}</> :
          <><VolumeUpIcon sx={styles.menuItemIcon}/>{t('mute')}</>}
      </MenuItem>
    </Menu>
    <LanguageSwitcher
      open={isLangModalOpen}
      onLanguageSelected={() => setIsLangModalOpen(false)}/>
    <LevelSelection
      open={isLevelModalOpen}
      onLevelSelected={(i) => { setIsLevelModalOpen(false); onLevelSelected(i) }}
      onClosed={() => setIsLevelModalOpen(false)}/>
  </>
}