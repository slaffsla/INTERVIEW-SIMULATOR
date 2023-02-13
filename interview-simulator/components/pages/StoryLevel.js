import { Text, View, StyleSheet, Image, Button, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import RoundBtn from '../RoundBtn';
import ftwColors from '../data/ColorsFTW';

import bgImages from '../data/FTWthemes';
import bbbTheme from '../data/bbbSkin';
import ftwTheme from '../data/FTWthemes';
import soberTheme from '../data/SoberTheme';
import ColorsFTW from '../data/ColorsFTW';
import React, { useState, useEffect, useCallback, useMemo } from "react";
const frameWorksList = ['JS HTML', 'REACT', 'ANGULAR']
export default function StoryLevel({ navigation, route, level, skin, avatars }) {
  const [currentSkin, setCurrentSkin] = useState("default");
  const [selectedFrameWorkIndex, setSelectedFrameWorkIndex] = useState(0);
  const [difficulty, setCurrentDiff] = useState('EASY');
  const ftwBorders = ftwColors.backgrounds;
  const ftwSlider = ftwColors.skinSlider;
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
  }, [route, selectedFrameWorkIndex]);
  
  return (
    <>
      <ImageBackground
        style={styles.bgimage}
        backgroundColor={ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}
        source={{
          uri: skin[Math.floor(Math.random() * skin.length)],
        }}
      >
        <View style={{ flexDirection: "row", position: 'absolute' }}>
          <MaterialIcons name="perm-phone-msg" size={40} color="white" />
          <MaterialCommunityIcons name="webcam" size={40} color="white" />
          <MaterialCommunityIcons name="webrtc" size={40} color="white" />
          <MaterialCommunityIcons name="web-clock" size={40} color="white" />
        </View>
        <View style={styles.categories}>

          <View style={
            [styles.row, { borderColor: ColorsFTW.borders[`${level}`] }]}>
            <RoundBtn navigation={navigation} level={3} framework={"REACT"} size={200} difficulty={2} images={avatars} skin={skin} />
            <RoundBtn navigation={navigation} level={2} framework={"REACT"} size={200} difficulty={2} images={avatars} skin={skin} />
            <RoundBtn navigation={navigation} level={1} framework={"ANGULAR"} size={200} difficulty={1} images={avatars} skin={skin} />
            <RoundBtn navigation={navigation} level={0} framework={"JS HTML"} size={200} difficulty={1} images={avatars} skin={skin} />
            <View style={[styles.message, { borderColor: ColorsFTW.borders[`${level}`] }, { backgroundColor: ColorsFTW.backgrounds[`${level}`] }]}>
              <Text style={styles.paragraph}>STORY LVL {level}</Text>
              <Text style={styles.paragraph}>
                <Text style={[styles.paragraph, { color: ColorsFTW.texts[`${level}`] }]} >
                  CORPORATION NAME: DIFF: {difficulty}</Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  bgimage: {
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: "bold",
    margin: 5,
    width: 330,
    flex: 1,
    opacity: 0.9,
    resizeMode: 'stretch',
  },
  categories: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 25,
    padding: 25,
    width: 250,
    opacity: 0.8,
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: "rgba(244, 249, 251, 0.33)",
    borderRadius: 10,
    borderColor: "#46ac0a",
    padding: 5,
    margin: 0,
    opacity: 1,
    fontSize: 25,
    fontWeight: 'bold',
    borderWidth: 4
  },
  message: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: "rgba(244, 249, 251, 0.80)",
    borderRadius: 12,
    opacity: 0.8,
    margin: 10,
    padding: 5,
    borderColor: '#f23b3b',
    borderWidth: 3,
    width: 250
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
});
