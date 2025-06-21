import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Linking,
  Button
} from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import Input from "./components/Input";
import ButtonEnter from "./components/ButtonEnter";
import { useFonts, Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import { YesevaOne_400Regular } from "@expo-google-fonts/yeseva-one";


type RootStackParamList = {
  Home: undefined;
  Register: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const videoSource = require("../assets/teste2.mp4");



function HomeScreen({ navigation }: Props) {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    YesevaOne_400Regular
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/icon.png")} style={{height: 40, width: 50}}/>
        <View>
          <Input placeholder="E-mail" />
          <View style={styles.secondInputContainer}>
            <Input placeholder="Senha"/>
            <ButtonEnter />
            <Button title="teste" onPress={() => navigation.navigate('Register')}/>
          </View>
        </View>
      </View>
      <VideoView 
        style={[StyleSheet.absoluteFillObject, styles.video]} 
        player={player}
        nativeControls={false}
        allowsFullscreen 
        allowsPictureInPicture
        />
      <View style={styles.videoOverlay}></View>
      <View style={styles.main}>
        
       
        <View style={styles.mainContent}>
          <Text style={styles.mainTitle}>Alcance o topo da sua jornada</Text>
          <Text style={styles.mainSubtitle}>
          Cadastre-se agora e transforme suas metas em conquistas diárias com o
          Summit.
          </Text>
          <Pressable style={styles.mainButton}>
            <Text>Cadastre-se</Text>
          </Pressable>
        </View>

      </View>
      <View style={styles.footer}>
        <Text style={styles.primaryText}>2025 Danielle G. Todos os direitos reservados.</Text>
        <Text style={styles.primaryText} onPress={() => Linking.openURL('https://www.linkedin.com/in/elle-gs/')}>LinkedIn</Text>
        <Text style={styles.primaryText} onPress={() => Linking.openURL('https://github.com/niellegs')}>GitHub</Text>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },

  header: {
    backgroundColor: "#000000",
    display: "flex",
    width: "100%",
    flexDirection: "row",
    borderBottomColor: "#F7F7EE",
    borderBottomWidth: 2,
    justifyContent: "space-between",
    paddingHorizontal: 30,
    zIndex: 1,
  },
  secondInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  main: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  mainContent: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
   },
  primaryText: {
    color: "#F7F7EE",
    textAlign: "center",
    marginVertical: 10
  },
  mainTitle: {
    color: "#F7F7EE",
    fontFamily: "YesevaOne_400Regular",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 10
  },
  mainSubtitle: {
    color: "#06D001",
    fontFamily: "Ubuntu_400Regular",
    textAlign: "center"
  },
  mainButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#06D001",
    width: 300,
    height: 45

  },
  video: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
  },
  videoOverlay: {
    ...StyleSheet.absoluteFillObject,
    width: 600,
    backgroundColor: "#000000",
    opacity: 0.5,

  },
  footer: {
    backgroundColor: "#000000",
    display: "flex",
    width: "100%",
    borderTopColor: "#F7F7EE",
    borderTopWidth: 2,
    justifyContent: "space-around",
  }
});
