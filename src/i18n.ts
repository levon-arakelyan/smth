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
        victory: 'Victory!',
        userReachedNumber: 'You successfully reached {{number}}',
        nextLevel: 'Next level',
        calcError: 'Calculation error',
        tooBigRes: 'The result is too large',
        tooSmallRes: 'The result is too small',
        divResNoInt: 'Division result must be an integer',
        actions: 'Actions',
        levels: 'All levels',
        selectLang: 'Select language',
        selectLvl: 'Select level',
        allLevelsPassed: 'You passed all levels!',
        cake: 'Here is your cake',
        backToFirstLvl: 'Restart the game',
        history: 'History ({{steps}} step{{ending}})',
        tryAgain: 'Try again',
        levelChallenge: 'But a sign from above hints you could finish this level in just {{steps}} step{{ending}}. Wanna try?',
        levelPassed: 'Great job! You completed the level in exactly {{steps}} step{{ending}}. Ready for the next challenge?',
        levelRespect: 'Excellent! You found an even better solution than it was intended. Keep it up! Wanna continue?',
        mute: 'Mute',
        unmute: 'Unmute'
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
        victory: 'Победа!',
        userReachedNumber: 'Ты успешно достиг числа {{number}}',
        nextLevel: 'Продолжить',
        calcError: 'Ошибка вычисления',
        tooBigRes: 'Результат слишком большой',
        tooSmallRes: 'Результат слишком маленький',
        divResNoInt: 'Результат деления должен быть целым числом',
        actions: 'Действия',
        levels: 'Все уровни',
        selectLang: 'Выбрать язык',
        selectLvl: 'Выбрать уровень',
        allLevelsPassed: 'Ты прошёл все уровни!',
        cake: 'Вот твой торт',
        backToFirstLvl: 'Начать заново',
        history: 'История ({{steps}} шаг{{ending}})',
        tryAgain: 'Заново',
        levelChallenge: 'Но небеса подсказывают: ты сможешь пройти этот уровень всего за {{steps}} шаг{{ending}}. Хочешь попробовать?',
        levelPassed: "Отлично! Ты прошёл уровень ровно за {{steps}} шаг{{ending}}. Продолжаем?",
        levelRespect: "Превосходно! Твоё решение заняло меньше шагов, чем задумывалось. Так держать! Идём дальше?",
        mute: 'Выключить звуки',
        unmute: 'Включить звуки'
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
