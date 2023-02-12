import React, { useState, useEffect, useCallback } from "react";
import TopMenuBar from "../TopMenuBar";
import Slider from '@react-native-community/slider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Stack,
  SafeAreaView,
  Easing,
  ActivityIndicator
} from "react-native";
import ProgramLangSlider from "../programLangSlider";
import Avatars from "../avatarsFtw.js";
import ImageSlider from '../ImageSlider';
import { AirbnbRating } from "@rneui/base";
import ftwColors from '../data/ColorsFTW';
import FtwTextComponent from '../FtwText';
import bgImages from '../data/imagesUris';
import LoadingSpinner from '../LoadingSpinner';
import bgBBBskin from '../data/bbbSkin';
import motivatorsBgs from '../data/ProfileMotivators';


export default function Home({ navigation }) {
  const [currentSkin, setCurrentSkin] = useState("default");
  const [currentLocalSkin, setCurrentLocalSkin] = useState(0);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [valueLang, setValueLang] = useState(0);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    startLoading()
  }, []);
  const ftwBorders = ftwColors.backgrounds;
  const replaceSkin = (skinName) => {
    setCurrentSkin(skinName)
  }
  return (
    <>
    <TopMenuBar {...{ navigation }} />
      <ImageBackground
        style={styles.bgimage}
        source={{
          uri: bgImages.homePage[Math.floor(Math.random() * bgImages.homePage.length)],
        }}
      >
    
        <Avatars />
        <View style={[styles.messageDivWelcome, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }]}>
          <View style={styles.container}>

          </View>
          <Ionicons name="md-beer-sharp" color="black" size={50} />
          <Text style={styles.paragraph} size={30} >WELCOME </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome", params = { lang: 'lang', difficulty: 'MIDDLE', skin: currentSkin })}>
          <Image
            style={[styles.startBtn, { marginTop: 5 }]}
            source={require("../../assets/icons/startBtn.png")}
          />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => setCurrentLocalSkin((i) => i + 1)}>
          <View style={[styles.messageDiv, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }]}>
            <Text style={styles.paragraph}>HOW DO YOU FEEL TODAY ?</Text>
            <Slider
              style={{ width: 200, height: 20 }}
              step={1}
              minimumValue={0}
              maximumValue={10}
              borderWidth={6}
              value={valueLang}
              onValueChange={slideValue => setValueLang(slideValue)}
              minimumTrackTintColor="green"
              maximumTrackTintColor="red"
              thumbTintColor="blue"
            />
            <Text style={styles.sliderLang}>
              <MaterialCommunityIcons name="gesture-swipe-horizontal" size={50} color="black" />
              {"\n"}
              Slide to adjast
            </Text>
          </View>
        </TouchableOpacity>

        <ProgramLangSlider {...{ navigation }} onReplaceSkinClick={replaceSkin} />
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  sliderLang: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: 10,
    fontSize: 13,
    flexDirection: "row"
  },
  startBtn: {
    width: 130,
    height: 130,
  },
  messageDivWelcome: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    resizeMode: "cover",
    backgroundColor: "rgba(213, 255, 242, 0.4)",
    borderRadius: 12,
    padding: 10,
    margin: 5,
    fontSize: 22,
    borderColor: "rgba(0, 216, 147, 0.91)",
    fontWeight: "bold",
    width: 200,
    borderWidth: 3
  },
  messageDiv: {
    resizeMode: "stretch",
    backgroundColor: "rgba(244, 249, 251, 0.80)",
    borderRadius: 12,
    fontSize: 22,
    fontWeight: "bold",
    margin: 5,
    padding: 5,
    opacity: 0.9,
    borderColor: "#eea74e",
    borderWidth: 3
  },
  paragraph: {
    fontSize: 16,
    color: "#001a00",
    fontWeight: "bold",
    textAlign: "center"
  },
  bgimage: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "rgba(94, 214, 105, 0.42)",
    textAlign: 'center',
    fontWeight: "bold",
    opacity: 0.9,
    margin: 0
  }
});