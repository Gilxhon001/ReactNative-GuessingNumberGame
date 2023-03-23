import {StyleSheet, Text, View, Pressable} from "react-native";

function pressHandler() {
    console.log('Pressed!');
}

function PrimaryButton({children}) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={pressHandler}
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                android_ripple={{color: '#916a78'}}

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
        backgroundColor: '#72063C',
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },
    buttonText: {
        color: '#ddb52f',
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});

