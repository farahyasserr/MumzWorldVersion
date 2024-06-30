import { StyleSheet } from "react-native"
import colors from "../../theme/colors"

export const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 8,
    },
    rowContainer: {
        flexDirection: 'row'
    },
    lineThroughText: {
        textDecorationLine: 'line-through',
        marginEnd: 8,
        marginBottom: 6,
    },
    finalPrice: {
        fontWeight: 'bold',
        textAlign: 'left',
        color: colors.blue
    },
    discountPercentage: {
        color: colors.orange,
    }
})