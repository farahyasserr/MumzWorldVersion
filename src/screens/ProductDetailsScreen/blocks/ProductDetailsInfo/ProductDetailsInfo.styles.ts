import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";

export const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20
    },
    productName: {
        fontSize: 16,
        color: colors.black,
        textAlign: 'left',
    },
    brandContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginEnd: 8
    },
    brandTitle: {
        fontWeight: 'bold'
    },
    brandImage: {
        height: 28,
        width: 28
    },
    addToCartButton: {
        alignSelf: 'center',
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.blue,
        borderRadius: 10,
        width: '70%',
        marginVertical: 12,
    },
    addToCartText: {
        color: colors.white,
        fontWeight: 'bold',
    }
})