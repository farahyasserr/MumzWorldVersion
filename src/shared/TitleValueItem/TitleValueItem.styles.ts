import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: colors.black,
        marginBottom: 8,
        textAlign: 'left',
    },
    value: {
        color: colors.grey,
        textAlign: 'left'
    },
    itemContainer: {
        marginBottom: 8
    }
})
