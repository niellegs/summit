import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import Input from "./components/Input";
import ButtonEnter from "./components/ButtonEnter";

function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../assets/icon.png")} />
                <View>
                    <Input placeholder="Email"/>
                    <Input placeholder="Senha" />
                    <ButtonEnter />
                </View>
            </View>
            <View>
                <Text>Conteúdo principal</Text>
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center", 
        backgroundColor: "#000000"
    },

    header: {
        display: "flex",
        flexDirection: "row",
    }
})