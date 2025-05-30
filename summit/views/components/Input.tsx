import { TextInput, StyleSheet } from "react-native";


interface InputProps {
    placeholder: string;
}

function Input( {placeholder} : InputProps ) {
    return (
        <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        placeholderTextColor={"#F7F7EE"}
        />
    );
}

export default Input;

const styles = StyleSheet.create ({
    input: {
        height: 40,
        width: 170,
        marginVertical: 7,
        borderWidth: 1,
        borderColor: "#F7F7EE",
        padding: 10,
        color: "#F7F7EE",
        fontFamily: "Ubuntu_400Regular"
    }
})