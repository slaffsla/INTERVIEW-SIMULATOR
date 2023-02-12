import React, { useState, useEffect, useCallback, ScrollView, Dimensions } from "react";
import Animated, { useSharedValue, useAnimatedStyle ,TouchableWithoutFeedback} from 'react-native-reanimated';
import TopMenuBar from "../TopMenuBar";
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import ftwColors from '../data/ColorsFTW';
import BigScroll from '../BigScroll';
import bgImages from '../data/imagesUris';


export default function Learn({ navigation }) {
  const [currentSkin, setCurrentSkin] = useState("default");
  const [currentLocalSkin, setCurrentLocalSkin] = useState(0);
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/results?search_query=front+end+job+interview');
  const [valueLang, setValueLang] = useState(0);
  const [valueAi, setValueAi] = useState(0);
  const [valueGender, setValueGender] = useState(0);
  const [valueChaos, setValueChaos] = useState(0);
  const [valueHorror, setValueHorror] = useState(0);

  const ftwBorders = ftwColors.backgrounds;
  //(currentSkin === 'BBB') ? bgBBBskin.theme : bgImages.homePage;
  const replaceSkin = (skinName) => {
    setCurrentSkin(skinName)
  }
  return (
    <> 
      <WebView
      style={styles.container}
      source={{ uri:videoUrl}}
    />
            <View style={styles.message}>
              <TouchableOpacity onPress={() => setVideoUrl("https://www.youtube.com/results?search_query=Angular+job+interview")} >
              <Text ><MaterialCommunityIcons name="angular" size={24} color="black" />ANGULAR  INTERVIEW QUESTIONS</Text>
                     </TouchableOpacity>
            </View>
             <View style={styles.message}>
              <TouchableOpacity onPress={() => setVideoUrl("https://www.youtube.com/results?search_query=React+job+interview")} >
              <Text ><MaterialCommunityIcons name="react" size={24} color="black" />REACT  INTERVIEW QUESTIONS</Text>
                     </TouchableOpacity>
            </View>
                      <View style={styles.message}>
              <TouchableOpacity onPress={() => setVideoUrl("https://www.youtube.com/results?search_query=Java+script+job+interview")} >
              <Text ><MaterialCommunityIcons name="web" size={24} color="black" />JAVASCRIPT INTERVIEW QUESTIONS</Text>
                     </TouchableOpacity>
            </View>
    </>
  );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: 0,
  },
  message: {
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
  }
});
