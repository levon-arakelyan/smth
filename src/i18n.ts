import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    gb: {
      translation: {
        level: 'LEVEL',
        goal: 'Goal',
        win: 'YOU WON!',
        next: 'Next',
        clear: 'Clear',
        back: 'Back',
        bringBack: 'Bring back',
        removeAfter: 'Remove all steps after',
        goToStep: 'Go to this step',
        removeAllFaded: 'This action will remove all faded equations',
        lastNonFaded: ', as well as last non-faded one',
        addNewOne: ' and add new one'
      },
    },
    ru: {
      translation: {
        level: 'УРОВЕНЬ'
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
