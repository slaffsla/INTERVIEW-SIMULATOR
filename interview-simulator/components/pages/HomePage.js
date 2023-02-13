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
  const [animation, setAnimation] = useState(new Animated.Value(1));


  const ftwBorders = ftwColors.backgrounds;

    const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 7,
      duration: 700,
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
          <View style={styles.container} >
          
            <Image
              style={[styles.submitBtn,
              { borderColor: "white" }]}
              source={require("../../assets/icons/startBtnNormal.png")}
            />
                      <Animated.View style={[styles.cicrcle, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
            <Animated.View style={[styles.cicrcle2, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
            <Animated.View style={[styles.cicrcle3, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
          </View>
        </TouchableWithoutFeedback>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  bgimage: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: "rgba(227, 235, 5, 0.9)",
    fontWeight: "bold",
    opacity: 0.8,
    marginTop: 0,
    resizeMode: 'stretch',
  },
 submitBtn: {
    resizeMode: "stretch",
    marginTop: 20,
    width: 200,
    borderWidth:  12,
    height: 200,
    borderRadius: 200 / 2,
    padding: 5,
    margin: 5,
    zIndex: 9

  },
 cicrcle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 10,
    padding: 5,
    margin: 5,
    zIndex: 1,
    opacity: 0.6,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute'
  },
  cicrcle2: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 10,
    zIndex: 2,
    opacity: 0.5,
    backgroundColor: 'rgba(1, 0, 4, 0.7)',
    position: 'absolute'
  },
  cicrcle3: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 10,
    zIndex: 3,
    opacity: 0.4,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute'
  },
  messageDivWelcome: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width:260,
    backgroundColor: "rgba(213, 255, 242, 0.4)",
    borderRadius: 12,
    padding: 10,
    margin: 10,
    fontSize: 22,
    fontWeight: "bold",
    borderColor: "rgba(0, 216, 147, 0.80)",
    borderWidth: 3
  },
  paragraph: {
    fontSize: 16,
    color: "#001a00",
    fontWeight: "bold",
    textAlign: "center"
  },
});