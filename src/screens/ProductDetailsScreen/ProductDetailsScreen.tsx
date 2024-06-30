import React from 'react'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import { styles } from './ProductDetailsScreen.styles';
import colors from '../../theme/colors';
import { ImageCarousel } from '../../shared';
import { useNavigation } from '@react-navigation/native';
import ProductDetailsInfo from './blocks/ProductDetailsInfo';
import useGetProductDetails from './hooks/useGetProductDetails';
import ProductDetailsHeader from './blocks/ProductDetailsHeader';

const ProductDetailsScreen = () => {
    const navigation = useNavigation();
    const { product, loading } = useGetProductDetails();

    const onPressBack = () => {
        navigation.goBack();
    }

    const renderContent = () => {
        if (loading) {
            return <ActivityIndicator color={colors.primary} size='large' style={styles.loader} />;
        }

        if (product) {
            return (
                <>
                    <ImageCarousel discountPercentage={product.price_range.minimum_price.discount?.percent_off} />
                    <ProductDetailsInfo product={product} />
                </>
            );
        }

        return null;
    };

    return (
        <View style={styles.mainContainer}>

            <ProductDetailsHeader onPressBack={onPressBack} />
            <ScrollView showsVerticalScrollIndicator={false} >
                {renderContent()}
            </ScrollView>
        </View>

    )
}

export default ProductDetailsScreen
