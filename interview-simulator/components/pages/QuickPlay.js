import { Text, View, StyleSheet, Image, Button, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Animated } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import TopMenuBar from '../TopMenuBar';
import ProgramLangSlider from '../programLangSlider';
import ChallengeBottomBar from '../ChallengeBottomBar';
import ftwColors from '../data/ColorsFTW';
import bgImages from '../data/imagesUris';
import ScirmishDiffBgs from '../data/ScirmishBg';

import ColorsFTW from '../data/ColorsFTW';
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Foundation } from '@expo/vector-icons';
import { ProgressBar, Colors } from 'react-native-paper';
const frameWorksList = ['JS HTML', 'REACT', 'ANGULAR']
const frameWorksImages = ['https://tse3.mm.bing.net/th?id=OIP._wyXLxCYcaZlMeiRtuOy4gAAAA&pid=Api&P=0',
  'https://tse2.mm.bing.net/th?id=OIP.DFlNQnwn7RQfE3Jo5naUhgHaI8&pid=Api&P=0',
  'https://tse4.mm.bing.net/th?id=OIP.Ca8m7_pPKZlmP5bgC7UfCgHaH0&pid=Api&P=0']
 
export default function QuickPlay({ navigation, route }) {
  const [currentSkin, setCurrentSkin] = useState("default");
  const [progress, setProgress] = useState(1);
  const [selectedFrameWorkIndex, setSelectedFrameWorkIndex] = useState(0);
  const [webcam, setWebcam] = useState(true);
  const [chat, setChat] = useState(true);
  const [audio, setAudio] = useState(true);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [difficulty, setCurrentDiff] = useState('JUNIOR');
  const ftwBorders = ftwColors.backgrounds;
  const ftwSlider = ftwColors.skinSlider;
  const [bg,setBg] = useState(ScirmishDiffBgs.junior);
  useEffect(() => {
    if (route?.params?.skin) {
      setCurrentSkin(route.params.skin)
    }
    if (selectedFrameWorkIndex <= 0) {
      setSelectedFrameWorkIndex(0)
    }
    if (selectedFrameWorkIndex > frameWorksList.length - 1) {
      setSelectedFrameWorkIndex(frameWorksList.length - 1)
    }
    if(difficulty === 'JUNIOR'){
setBg(ScirmishDiffBgs.junior)
    }
    if(difficulty === 'MIDDLE'){
      setBg(ScirmishDiffBgs.middle)
    }
      if(difficulty === 'SINIOR'){
      setBg(ScirmishDiffBgs.sinior)
    }
  }, [route, selectedFrameWorkIndex,difficulty]);


  const startAnimation = (frameWorkIndex) => {
    setSelectedFrameWorkIndex(frameWorkIndex);
    Animated.timing(animation, {
      toValue: 7,
      duration: 1500,
      useNativeDriver: true
    })
      .start(({ returnAnimation }) => {
        navigation.navigate('INTERVIEW SIMULATOR (Quiz)', params = {
          lang: frameWorksList[frameWorkIndex],
          difficulty: `${difficulty}`, skin: 'currentSkin'
        })
        setAnimation(new Animated.Value(0));
      });
  }
  const animatedStyles = {
    transform: [
      { scale: animation },
    ]
  }
  return (
    <>
      <ImageBackground
        style={styles.bgimage}
         backgroundColor={ColorsFTW.skinSlider[Math.floor(Math.random() * ColorsFTW.skinSlider.length)]}
        source={{
          uri: `${bg[Math.floor(Math.random() * bg.length)]}`,
         
        }}
      >
        <View style={[styles.container, { top: 285 ,  opacity: 0.6}]} >
          <Animated.View style={[styles.cicrcle, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }]} />
          <Animated.View style={[styles.cicrcle2, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }]} />
          <Animated.View style={[styles.cicrcle3, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }]} />
        </View>
        <TouchableOpacity
          onPress={() => setCurrentSkin(bg[Math.floor(Math.random() * bg.length)])}>
          <View style={[styles.message, { borderColor: ColorsFTW.borders[`${selectedFrameWorkIndex}`] }]}>
            <Text style={styles.paragraph}>QUICK TEST</Text>
            <Text style={styles.paragraph}>
              <Text style={{ color: "red" }} >
                {frameWorksList[`${selectedFrameWorkIndex}`]} <FontAwesome5 name="glasses" size={24} color="black" /> {difficulty}</Text>
            </Text>
          </View>
          <View style={styles.categories}>
            <View style={
              [styles.row, { borderColor: ColorsFTW.borders[`${selectedFrameWorkIndex}`] }]}>
              <TouchableOpacity
                onPress={() => startAnimation(0)}>
              <Image style={[styles.button,{borderColor:"white"}]}  source={{
                  uri: frameWorksImages[0],
                }} />
                <Text style={styles.paragraph}>
                  {selectedFrameWorkIndex}{frameWorksList[0]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => startAnimation(1)}>
                  <Image style={[styles.button,{zIndex: 13 ,borderColor:"rgba(44, 198, 230, 0.9)"}]}  source={{
                  uri: frameWorksImages[1],
                }} />
                <Text style={styles.paragraph}>
                  {selectedFrameWorkIndex}{frameWorksList[1]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => startAnimation(2)}>
                <Image style={[styles.button,{borderColor:"red"}]}  source={{
                  uri: frameWorksImages[2],
                }} />
                <Text style={styles.paragraph}>
                  {selectedFrameWorkIndex}{frameWorksList[2]}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ChallengeBottomBar {...{ navigation }} onDifficultySelectionChange={setCurrentDiff}/>
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
    backgroundColor: "rgba(94, 214, 105, 0.45)",
    fontWeight: "bold",
    opacity: 0.9,
    margin: 0,
    resizeMode: 'cover',
  },
  button: {
    margin: 20,
    resizeMode: "stretch",
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    borderColor: "white",
    borderWidth: 10,
    backgroundColor: 'black',
    zIndex: 9
  },
  categories: {
    textAlign: 'center',
    margin: 20,
    padding: 25
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 300,
    flexDirection: "row",
    backgroundColor: "rgba(244, 249, 251, 0.33)",
    borderRadius: 10,
    opacity: 0.8,
    borderColor: "#46ac0a",
    padding: 5,
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 3
  },
  message: {
     alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    resizeMode: "cover",
    backgroundColor: "rgba(213, 255, 242, 0.8)",
    borderRadius: 12,
    padding: 10,
    margin: 40,
    fontSize: 22,
    borderColor: "rgba(0, 0, 0, 0.91)",
    fontWeight: "bold",
    borderWidth: 3
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  cicrcle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 6,
    borderColor: "rgba(0, 0, 0, 0.9)",
    opacity: 0.9,
    zIndex: 7,
    backgroundColor: 'rgba(255, 255, 255, 9)',
    position: 'absolute'
  },
  cicrcle2: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 6,
    borderColor: "rgba(0, 0, 0, 0.90)",
    zIndex: 9,
    opacity: 0.9,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    position: 'absolute'
  },
  cicrcle3: {
    width: 70,
    height:70,
    borderRadius: 70 / 2,
    borderWidth: 6,
    zIndex: 8,
    opacity: 0.9,
    backgroundColor:'rgba(255, 255, 255, 0.9)',
    position: 'absolute'
  },
});
