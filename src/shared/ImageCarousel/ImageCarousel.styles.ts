import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 18
    },
    image: {
        width: '100%',
        height: '100%'
    },
    internalBadgeContainer: {
        alignSelf: 'flex-start',
        backgroundColor: colors.primary,
        borderRadius: 100,
        padding: 6
    },
    badgeMainContainer: {
        position: 'absolute',
        bottom: '5%',
        left: '82%'
    },
    discountText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 13
    },
    carouselItemView: {
        flex: 1,
        justifyContent: 'center'
    }
})
