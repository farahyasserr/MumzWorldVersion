import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    noSearchResultTitle: {
        color: colors.grey,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    noSearchResultText: {
        color: colors.grey,
        textAlign: 'center',
        marginTop: 8,
        width: '70%'
    },
    emptySearchView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})