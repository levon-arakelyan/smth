import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LocalStorageService } from './core/services/local-storage/local-storage';
import { LocalStorageKey } from './core/services/local-storage/local-storage-keys';

export enum Language {
  English = 'gb',
  Russian = 'ru'
}

export const languagesMap: Map<string, string> = new Map<string, string>([
  [Language.English, 'English'],
  [Language.Russian, 'Русский']
]);

export const defaultLanguage = Language.English;

export const languageFlagUrl = (lang: Language) => `https://flagcdn.com/${lang}.svg`

i18n.use(initReactI18next).init({
  resources: {
    gb: {
      translation: {
        level: 'LEVEL',
        goal: 'Target',
        next: 'Confirm',
        clear: 'Restart',
        back: 'Undo',
        bringBack: 'Restore',
        removeAllFaded: 'This action will remove all faded equations',
        lastNonFaded: ', as well as the last visible one',
        addNewOne: ', and create a new equation',
        victory: 'Victory!',
        userReachedNumber: 'You successfully reached {{number}}!',
        nextLevel: 'Next level',
        calcError: 'Calculation error',
        tooBigRes: 'The result is too large',
        tooSmallRes: 'The result is too small',
        divResNoInt: 'Division result must be an integer',
        actions: 'Actions',
        levels: 'All levels',
        selectLang: 'Select language',
        selectLvl: 'Select level',
      },
    },
    ru: {
      translation: {
        level: 'УРОВЕНЬ',
        goal: 'Цель',
        next: 'Подтвердить',
        clear: 'Заново',
        back: 'Отменить',
        bringBack: 'Восстановить',
        removeAllFaded: 'Это действие удалит все затускневшие уравнения',
        lastNonFaded: ', а также последнее видимое уравнение',
        addNewOne: ', и создаст новое уравнение',
        victory: 'Победа!',
        userReachedNumber: 'Ты успешно достиг числа {{number}}!',
        nextLevel: 'Следующий уровень',
        calcError: 'Ошибка вычисления',
        tooBigRes: 'Результат слишком большой',
        tooSmallRes: 'Результат слишком маленький',
        divResNoInt: 'Результат деления должен быть целым числом',
        actions: 'Действия',
        levels: 'Все уровни',
        selectLang: 'Выбрать язык',
        selectLvl: 'Выбрать уровень',
      },
    },
  },
  lng: LocalStorageService.get(LocalStorageKey.Language) ?? defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
