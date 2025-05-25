import { Pressable, Image, StyleSheet} from "react-native";

function ButtonEnter() {
    return(
        <Pressable style={styles.buttonContainer}>
            <Image source={require("../../assets/arrow-right.png")} />
        </Pressable>
    );
}

export default ButtonEnter;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#F7F7EE",
    }
})