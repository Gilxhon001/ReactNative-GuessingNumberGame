import {StyleSheet, Text} from "react-native";

function Title({children}) {
    return <Text style={styles.tittle}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
    tittle: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: 'white',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,r
        // borderWidth: Platform.select({ios: 0, android: 2}),
        borderWidth: 0,
        borderColor: 'white',
        padding: 12,
        marginTop: 16,
        maxWidth: '80%',
        width: 300,
    },
})