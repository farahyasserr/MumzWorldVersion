import React from 'react'
import { I18nManager, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import colors from '../../theme/colors';
import i18n from '../../config/i18n';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToggleLanguageButton = () => {

    const toggleLanguage = async () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLanguage)
        I18nManager.forceRTL(newLanguage === 'ar');
        await AsyncStorage.setItem('lang', newLanguage);
        await Updates.reloadAsync();
    };

    return (
        <TouchableOpacity onPress={toggleLanguage}>
            <Entypo name="globe" size={20} color={colors.grey} />
        </TouchableOpacity>
    )
}

export default ToggleLanguageButton