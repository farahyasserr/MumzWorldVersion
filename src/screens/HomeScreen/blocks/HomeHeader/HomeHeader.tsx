import { Feather, FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Alert, TouchableOpacity, View } from 'react-native'
import { SvgUri } from 'react-native-svg'
import { images } from '../../../../../assets/images'
import { ToggleLanguageButton } from '../../../../shared'
import colors from '../../../../theme/colors'
import { styles } from './HomeHeader.styles';

const HomeHeader = () => {
    const comingSoonAlert = () => {
        Alert.alert("coming soon!")

    }
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={comingSoonAlert}>
                <FontAwesome name='bars' size={20} color={colors.grey} />
            </TouchableOpacity>

            <SvgUri
                width={200}
                height={30}
                uri={images.logo}
            />

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.userIcon} onPress={comingSoonAlert}>
                    <Feather name='user' size={20} color={colors.grey} />
                </TouchableOpacity>
                <ToggleLanguageButton />
            </View>

        </View>
    )
}

export default HomeHeader