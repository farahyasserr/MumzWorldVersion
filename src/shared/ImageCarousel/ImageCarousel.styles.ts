import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 18
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8
    },
    paginationDot: {
        width: 6,
        height: 6,
        borderRadius: 4,
        backgroundColor: 'grey',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: colors.blue,
    },
})
