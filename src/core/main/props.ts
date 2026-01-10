import type { ReactElement } from "react";

export type LanguageSwitcherProps = {
  open: boolean
  onLanguageSelected: () => void;
}

export type FadeModalProps = {
  open: boolean
  children?: ReactElement
  onClose?: () => void
}