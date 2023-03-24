import {StyleSheet, Text} from "react-native";

function Title({children}) {
    return <Text style={styles.tittle}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
    tittle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: '#ddb52f',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
    },
})