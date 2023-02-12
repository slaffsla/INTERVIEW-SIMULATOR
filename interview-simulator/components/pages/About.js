import TopMenuBar from '../TopMenuBar';
import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import bgImages from '../data/imagesUris';
import ftwColors from '../data/ColorsFTW';
import ftwBgImages from '../data/FTWthemes';
import mImages from '../data/Monkeys';
import Rotate from '../animations/Rotate';
import FtwTextComponent from '../FtwText';
export default function About({ navigation }) {
  const [skinId, setSkinId] = useState(0);
  const bgs = bgImages.aboutPage;
  const ftwBgs = ftwBgImages.about;
  const ftwBorders = ftwColors.borders;
  return (
    <>
      <ImageBackground
        style={styles.bgimage}
        resizeMode="stretch"
        backgroundColor={ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}
        source={{
          uri: bgs[Math.floor(Math.random() * bgs.length)],
        }}
      >
        <TouchableOpacity
          onPress={() => setSkinId(skinId + 1)}>
          <View style={[styles.messageDiv, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` },
          { opacity: 0.6 },
          ]}>
  <Rotate onRecteate={() => setSkinId(skinId + 1)}  />
            <FtwTextComponent text="no human worked on it" textSizechaosRange={"ftw10"} style={{ opacity: 1 }} />
            <FtwTextComponent text=" ZOGGGING ... " textSizechaosRange={"ftw14"} />
            <FtwTextComponent text="A.I" textSizechaosRange={"ftw14"} />
            <FtwTextComponent text="FTW" textSizechaosRange={"ftw42"} />

          </View>
        
        </TouchableOpacity>

      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    backgroundColor: "rgba(199, 4, 38, 0.70)",
    textAlign: 'center',
    opacity: 0.8,
    margin: 0,
    resizeMode: 'cover',

  },

  messageDiv: {
    backgroundColor: "rgba(249, 249, 249, 0.5)",
    justifyContent: 'center',
    borderRadius: 12,
    margin: 50,
    opacity: 0.8,
    padding: 10,
    borderColor: "#08f4ed",
    borderWidth: 3
  }
});
