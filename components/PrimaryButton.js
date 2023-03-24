import {StyleSheet, Text, View, Pressable} from "react-native";
import Colors from "../constants/colors";



function PrimaryButton({children, onPress}) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                android_ripple={{color: Colors.primary500}}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 5,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary600,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },
    buttonText: {
        color: '#ecebe5',
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});

