import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    searchIcon: {
        marginEnd: 6
    },
    searchView: {
        backgroundColor: colors.lightestGrey,
        borderRadius: 14,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 16,
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    textInput: {
        flex: 1,
    },
    clearButtonContainer: {
        marginEnd: 6
    },
    clearIcon: {
        marginEnd: 2
    }
})
