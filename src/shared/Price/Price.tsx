import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './Price.styles'
import colors from '../../theme/colors'

interface PriceProps {
    discountPercentage: number | undefined
    finalPrice: string | undefined
    basePrice: string
    fontSize?: number
    priceColor?: string
}

const Price = ({ discountPercentage, finalPrice, basePrice, fontSize, priceColor }: PriceProps) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.rowContainer}>
                <Text style={[discountPercentage !== 0 ? styles.lineThroughText : styles.finalPrice, fontSize ? { fontSize: fontSize } : null]}>
                    {basePrice}
                </Text>
                {discountPercentage !== 0 && discountPercentage &&
                    <Text style={[styles.discountPercentage, fontSize ? { fontSize: fontSize } : null]}>
                        -{discountPercentage}%
                    </Text>
                }
            </View>

            {finalPrice && discountPercentage !== 0 &&
                <Text style={[styles.finalPrice, { fontSize: fontSize ? fontSize : 16, color: priceColor ? priceColor : colors.blue }]}>
                    {finalPrice}
                </Text>
            }
        </View>


    )
}

export default Price