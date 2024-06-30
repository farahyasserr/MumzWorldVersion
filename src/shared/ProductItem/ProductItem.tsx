import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SimpleProduct } from '../../types/Product'
import { Image } from 'expo-image';
import { styles } from './ProductItem.styles'
import { formatPrice } from '../../utils/Format.utils';
import Price from '../Price';
import AddToWishlistButton from '../AddToWishlistButton';

interface ProductItemProps {
    product: SimpleProduct
    onPressItem: (item: SimpleProduct) => void
}

const blurhash =
    '|LHlE2%1xH_3#oNGNHWV00?G00RjNGM|axayj[j[tRk#NGay%MsE1~WpNHE0kCt6#Rjt7#R9-1xoJoNofRjt7MxS1j[axayt7xayj[j[t7j[ay%Mt7Mxayt7xaj[ayj[ayt7j[';

const ProductItem = ({ product, onPressItem }: ProductItemProps) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => onPressItem(product)}>
            <Image
                style={styles.image}
                source={product.small_image.url}
                placeholder={{ blurhash }}
                contentFit="contain"
                transition={1000}
            />
            <AddToWishlistButton style={styles.heartIcon} size={20} />

            <Text numberOfLines={2} style={styles.name}>{product.name}</Text>
            <Price
                discountPercentage={product.price_range?.minimum_price?.discount?.percent_off}
                basePrice={formatPrice(product?.base_price_range?.minimum_price?.regular_price?.value) + ' ' + product?.base_price_range?.minimum_price?.regular_price?.currency}
                finalPrice={formatPrice(product?.base_price_range?.minimum_price?.final_price?.value) + ' ' + product?.base_price_range?.minimum_price?.final_price?.currency}
                fontSize={13}
            />
        </TouchableOpacity>
    )
}

export default ProductItem