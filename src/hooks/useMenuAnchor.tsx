import { useState } from 'react';

export function useMenuAnchor() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    openMenu,
    closeMenu,
    isOpen: Boolean(anchorEl),
  };
}