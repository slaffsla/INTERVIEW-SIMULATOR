import React, { useState, useEffect, useCallback, ScrollView, Dimensions } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import TopMenuBar from "../TopMenuBar";
import { ProgressBar } from "react-native-paper";
import StoryModeVertScroll from "../StoryModeVertScroll";
import bgImages from '../data/imagesUris'
import bgBBBskin from '../data/bbbSkin'
import ftwSkin from '../data/FTWthemes'
export default function StoryModePage({ navigation, props, route }) {
  const [progressTotal, setProgressTotal] = useState(0.1);
  const [currentSkin, setCurrentSkin] = useState("default");
  const bgs = ftwSkin.pyramid;
  const replaceSkin = (skinName) => {
    setCurrentSkin(skinName)
  }
  useEffect(() => {
    if (route?.params?.skin) {
      setCurrentSkin(route.params.skin)
    }

  }, [route]);
  return (
    <>
      <ImageBackground
        style={styles.bgimage}
        source={{
          uri: bgs[Math.floor(Math.random() * bgs.length)],
        }}
      >
        <StoryModeVertScroll {...{ navigation }} onReplaceSkinClick={replaceSkin} style={styles.container} />
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    textAlign: 'center',
    resizeMode: 'stretch',
    flex: 1,
    margin: 2
  },
  bgimage: {
    flex: 1,
    alignItems: "center",
    textAlign: 'center',
    resizeMode: 'cover',
    backgroundColor: "rgba(227, 235, 5, 0.8)",
    fontWeight: "bold",
    opacity: 0.9,
    margin: 0,
  }
});
