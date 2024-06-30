import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from '../localisation/en.json';
import ar from '../localisation/ar.json';

const initializeLocalization = async () => {
    const fallbackLng = 'en';
    let lng;
    try {
        const savedLanguage = await AsyncStorage.getItem('lang');
        lng = savedLanguage || fallbackLng;
    } catch (error) {
        console.error('Failed to fetch the language from AsyncStorage', error);
        lng = fallbackLng;
    }

    await i18n
        .use(initReactI18next)
        .init({
            compatibilityJSON: 'v3',
            fallbackLng,
            lng,
            resources: {
                en: { translation: en },
                ar: { translation: ar },
            },
            interpolation: {
                escapeValue: false,
            },
        });
};

initializeLocalization();

export default i18n;