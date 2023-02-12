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
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import ColorsFTW from '../data/ColorsFTW';
import ftwColors from '../data/ColorsFTW';
import bgImages from '../data/imagesUris';
import Monkeys from '../data/Monkeys';

export default function HomePage({ navigation }) {
  const [currentSkin, setCurrentSkin] = useState("default");
  const [currentLocalSkin, setCurrentLocalSkin] = useState(0);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [valueLang, setValueLang] = useState(0);
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  };
  useEffect(() => {
    startLoading()
  }, []);
  const ftwBorders = ftwColors.backgrounds;
  const replaceSkin = (skinName) => {
    setCurrentSkin(skinName)
  }
    const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 5,
      duration: 1500,
      useNativeDriver: true
    })
      .start(({ returnAnimation }) => {
        navigation.navigate("INTERVIEW SIMULATOR (QuickPlay)", params = { lang: 'lang', difficulty: 'MIDDLE', skin: currentSkin })
        setAnimation(new Animated.Value(0));
      });
  }
  const animatedStyles = {
    transform: [
      { scale: animation }
    ]
  }
  return (
    <>
      <ImageBackground
        style={styles.bgimage}
          backgroundColor={ColorsFTW.skinSlider[Math.floor(Math.random() * ColorsFTW.skinSlider.length)]}
        source={{
          uri: bgImages.homePage[Math.floor(Math.random() * bgImages.homePage.length)],
        }}
      >
      <TouchableOpacity onPress={() => setCurrentLocalSkin((i) => i + 1)}>
         
        <View style={[styles.messageDivWelcome, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }]}>
        <Image
          source={{
            uri: Monkeys.noob[Math.floor(Math.random() * Monkeys.noob.length)],
          }}
          style={{
            resizeMode: "stretch",
            width: 200,
            height: 200,
            borderRadius: 200 / 2,
            borderColor: "white",
            borderWidth: 5
          }}
        />
          <Text style={styles.paragraph} size={30} > <Ionicons name="md-beer-sharp" color="black" size={40} />WELCOME USERNAME</Text>
      
            <Text style={styles.paragraph} size={30} >LVL: JUNIOR</Text>
       
        </View>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <View style={[styles.container, { bottom: 50 }]} >
            <Animated.View style={[styles.box, animatedStyles]} />
            <Image
              style={[styles.submitBtn,
              { borderColor: "white" }]}
              source={require("../../assets/icons/startBtnNormal.png")}
            />
            <Animated.View style={[styles.box2, animatedStyles]} />
          </View>
        </TouchableWithoutFeedback>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    resizeMode: "cover",
  },
 submitBtn: {
    resizeMode: "stretch",
    marginTop: -20,
    width: 150,
    borderWidth: 6,
    height: 150,
    borderRadius: 150 / 2,
    padding: 5,
    margin: 5,
    zIndex: 9

  },
  box: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 6,
    borderColor: "rgba(255, 255, 255, 0.57)",
    top: 125,
    zIndex: 1,
     opacity:0.7,
       backgroundColor:'rgba(255, 255, 255, 0.7)'
  },
  box2: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 6,
    borderColor: "rgba(255, 255, 255, 0.57)",
    top: -130,
    zIndex: 2,
     opacity:0.7,
        backgroundColor:'rgba(255, 255, 255, 0.7)'
  },
  messageDivWelcome: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    resizeMode: "cover",
    backgroundColor: "rgba(213, 255, 242, 0.8)",
    borderRadius: 12,
    padding: 10,
    margin: 20,
    fontSize: 22,
    borderColor: "rgba(0, 0, 0, 0.91)",
    fontWeight: "bold",
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