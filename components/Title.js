import {StyleSheet, Text} from "react-native";
import Colors from "../constants/colors";

function Title({children}) {
    return <Text style={styles.tittle}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
    tittle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.accent500,
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
    },
})