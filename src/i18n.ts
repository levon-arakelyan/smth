import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    gb: {
      translation: {
        level: 'LEVEL',
        goal: 'Goal',
        next: 'Confirm',
        clear: 'Restart',
        back: 'Undo',
        bringBack: 'Bring back',
        removeAllFaded: 'This action will remove all faded equations',
        lastNonFaded: ', as well as last non-faded one',
        addNewOne: ' and add new one',
        victory: 'Victory!',
        userReachedNumber: 'You have successfully reached the number {{number}}!',
        nextLevel: 'Next level'
      },
    },
    ru: {
      translation: {
        level: 'УРОВЕНЬ',
        goal: 'Цель',
        next: 'Подтвердить',
        clear: 'Перезапуск',
        back: 'Назад',
        bringBack: 'Вернуть',
        removeAllFaded: 'Это действие удалит не только все затускневшие равенства',
        lastNonFaded: ', но и последнее не затускневшее',
        addNewOne: ', но и создаст новое равенство',
        victory: 'Победа!',
        userReachedNumber: 'Ты успешно дошёл до числа {{number}}!',
        nextLevel: 'Следующий уровень'
      }
    }
  },
  lng: 'gb',
  fallbackLng: 'gb',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
