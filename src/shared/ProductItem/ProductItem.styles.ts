import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    image: {
        width: '96%',
        height: 120,
        alignSelf: 'center',
    },
    card: {
        paddingVertical: 20,
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#eee',
        backgroundColor: colors.white
    },
    name: {
        fontSize: 11,
        textAlign: 'left',
        marginTop: 8,
    },
    heartIcon: {
        position: 'absolute',
        top: '5%',
        right: '5%',
    }
})
