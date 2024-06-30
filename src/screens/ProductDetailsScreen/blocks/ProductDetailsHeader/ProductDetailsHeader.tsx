import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { I18nManager, Text, TouchableOpacity, View } from 'react-native'
import { AddToWishlistButton } from '../../../../shared'
import translations from '../../../../localisation/Translations'
import { useTranslation } from 'react-i18next'
import { styles } from './ProductDetailsHeader.styles'
import colors from '../../../../theme/colors'

const ProductDetailsHeader = ({ onPressBack }: { onPressBack: () => void }) => {
    const { t } = useTranslation();

    return (
        <View style={styles.mainContainer} >
            <TouchableOpacity onPress={onPressBack}>
                <Ionicons name={I18nManager.isRTL ? 'arrow-forward' : 'arrow-back'} size={22} color={colors.black} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{t(translations.productDetails)}</Text>
            <AddToWishlistButton />
        </View>

    )
}

export default ProductDetailsHeader