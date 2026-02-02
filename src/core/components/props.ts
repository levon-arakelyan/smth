export type LanguageSwitcherProps = {
  open: boolean
  onLanguageSelected: () => void;
}

export type SeoProps = {
  title: string;
  description: string;
  image?: string;
  schemaMarkup?: object;
  children: React.ReactNode;
}