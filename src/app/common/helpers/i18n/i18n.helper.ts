import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { it } from '../../../../assets/i18n/it.lang';

const resources = { it };

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it',
    interpolation: {
      escapeValue: false,
    },
  })
  .then((data) => console.log('i18n initialized', data))
  .catch((err) => console.error('i18n initialization error', err));

export default i18n;

export const translate = (key: string, options?: any): string => {
  return i18n.t(key, options);
};
