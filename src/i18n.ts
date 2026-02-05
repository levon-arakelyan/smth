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

export const flagWidth = 28;

i18n.use(initReactI18next).init({
  resources: {
    gb: {
      translation: {
        sitePrefix: 'You always can find',
        sitePostfix: 'here!',
        alTitle: 'Something fun',
        alDescription: 'Browse and choose from a variety of engaging and fun activities designed to test your skills and knowledge.',
        backToAL: 'Back to activities list',
        ucTitle: 'Under construction',
        ucDescription: 'This activity is still under construction. We are working hard to bring it to you as soon as possible. Stay tuned!',
        rtnTitle: 'Reach the Number',
        rtnDescription: 'A fun and challenging number game where you aim to reach a target number by combining other numbers using basic arithmetic operations.',
        play: 'Play',
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
        levelPassed: 'Great job! You completed the level in exactly {{steps}} step{{ending}} as it was intended. Ready for the next challenge?',
        levelRespect: 'Excellent! You found an even better solution than it was intended. Keep it up! Wanna continue?',
        mute: 'Mute',
        unmute: 'Unmute'
      },
    },
    ru: {
      translation: {
        sitePrefix: 'Ты всегда можешь найти',
        sitePostfix: 'здесь!',
        alTitle: 'Что-то весёлое',
        alDescription: 'Просматривай и выбирай из множества увлекательных и забавных занятий, разработанных для проверки твоих навыков и знаний.',
        backToAL: 'Назад к списку активностей',
        ucTitle: 'В разработке',
        ucDescription: 'Эта активность всё ещё в разработке. Мы усердно работаем, чтобы представить её тебе как можно скорее. Следи за обновлениями!',
        rtnTitle: 'Достигни Числа',
        rtnDescription: 'Весёлая и увлекательная игра, в которой тебе нужно достичь целевого числа, комбинируя другие числа с помощью базовых арифметических операций.',
        play: 'Играть',
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
        levelPassed: "Отлично! Ты прошёл уровень ровно за {{steps}} шаг{{ending}}, как и задумывалось. Продолжаем?",
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
