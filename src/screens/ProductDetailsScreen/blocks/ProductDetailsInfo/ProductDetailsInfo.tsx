import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Dividor, Price, TitleValueItem } from '../../../../shared'
import { SimpleProduct } from '../../../../types/Product'
import { useTranslation } from 'react-i18next'
import { formatPrice } from '../../../../utils/Format.utils'
import { styles } from './ProductDetailsInfo.styles'
import translations from '../../../../localisation/Translations'
import colors from '../../../../theme/colors'

interface ProductDetailsInfoProps {
    product: SimpleProduct
}

const ProductDetailsInfo = ({ product }: ProductDetailsInfoProps) => {
    const { t } = useTranslation()

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <Price
                discountPercentage={product.price_range.minimum_price.discount?.percent_off}
                basePrice={formatPrice(product.base_price_range.minimum_price.regular_price.value) + ' ' + product?.base_price_range.minimum_price.regular_price?.currency}
                finalPrice={formatPrice(product.base_price_range.minimum_price.final_price?.value) + ' ' + product?.base_price_range.minimum_price.final_price?.currency}
                priceColor={colors.primary}
            />

            <Dividor />

            <TitleValueItem title={t(translations.description)} value={product.meta_description} />

            <View style={styles.brandContainer}>
                <Text style={styles.brandTitle}>{product.brand_info.title} - </Text>
                <Image
                    source={{ uri: product.brand_info.img_src }}
                    style={styles.brandImage}
                    resizeMode="cover"
                />
            </View>

            <Dividor />

            <TitleValueItem title={t(translations.dimensions)} value={product.pkgdimensions} />
            <TitleValueItem title={t(translations.features)} value={product.features} />
            <TitleValueItem title={t(translations.cautions)} value={product.cautions} />
            <Dividor />
            <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>{t(translations.addToCart)}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductDetailsInfo
