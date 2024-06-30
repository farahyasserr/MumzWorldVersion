import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { styles } from './HomeScreen.styles'
import ProductsList from './blocks'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavType } from '../../navigation/Home/HomeStack'
import { useGetProductsList } from './hooks/useGetProductsList'
import colors from '../../theme/colors'
import HomeHeader from './blocks/HomeHeader/HomeHeader';

const HomeScreen = () => {
    const navigation = useNavigation<HomeStackNavType<'Home'>>();

    const { products, loading } = useGetProductsList();

    const onPressItem = () => {
        navigation.navigate('ProductDetails')
    }

    return (
        <View style={styles.mainContainer}>
            <HomeHeader />
            {loading ?
                <ActivityIndicator color={colors.primary} size={'large'} style={styles.loader} /> :
                products ?
                    <ProductsList products={products} onPressItem={onPressItem} /> : null
            }

        </View>
    )
}

export default HomeScreen
