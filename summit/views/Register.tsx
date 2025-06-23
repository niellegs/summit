import { useState } from "react";

import { 
Button,
Pressable, 
StyleSheet,
Text,
View
} from "react-native"

import JoinUs from "./JoinUs";
import Login from "./Login";

function Register() {

    const [isSecondPage, SetIsSecondPage] = useState(false)
    const togglePage = () => SetIsSecondPage(!isSecondPage)

        return(
        <View style={isSecondPage? styles.container_v1 : styles.container}>
            <View style={styles.toggleContainer} >
                <Pressable onPress={togglePage}>
                    <Text style={styles.teste}>Clique</Text>
                </Pressable>
            </View>

            { isSecondPage ? <Login /> : <JoinUs />}
        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
    },
    container_v1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#06D001",
    },
    toggleContainer: {
        width: "30%",
        height: 50
    },
    teste : {
        color: "red"
    }
})