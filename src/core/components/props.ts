export type LanguageSwitcherProps = {
  isModal: boolean;
  open?: boolean
  onLanguageSelected?: () => void;
}

export type SeoProps = {
  title: string;
  description: string;
  route?: string;
  children: React.ReactNode;
}