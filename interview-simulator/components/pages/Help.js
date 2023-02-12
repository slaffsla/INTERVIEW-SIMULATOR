import React, { useState, useEffect, useCallback } from "react";
import { FontAwesome5 } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';
import TopMenuBar from '../TopMenuBar';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import bgImages from '../data/imagesUris'
import FtwTextComponent from '../FtwText';
import FtwColors from '../data/ColorsFTW';

export default function HelpPage({ navigation }) {
  const [skinId, setSkinId] = useState(0);
  const bgs = bgImages.helpPage;
const ftwColorArray = FtwColors.progressBars;
  return (
  <>
      <ImageBackground
        style={styles.bgimage}
        resizeMode="stretch"
          backgroundColor= {ftwColorArray[Math.floor(Math.random() * ftwColorArray.length)]}
        source={{
          uri: bgs[Math.floor(Math.random() * bgs.length)],
        }}
      >
      
        <TouchableOpacity
          onPress={() => setSkinId(skinId + 1)}>
          <View style={styles.messageDiv}>
      

                    <Text style={styles.paragraph} size={30} >
                        <MaterialIcons name="live-help" size={24} color="black" />
                    PLEASE SUPPORT OUR PROJECT
                    {"\n"}
                      <FontAwesome5 name="donate" size={40} color="black" />
                    </Text>
                  
          </View>
        </TouchableOpacity>
      </ImageBackground>

    </>
  );
}
const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "rgba(235, 4, 4, 0.6)",
    textAlign: 'center',
    opacity: 0.8,
    margin: 0,
    resizeMode: 'stretch',
  },
    paragraph: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10
  },
  messageDiv: {
    backgroundColor: "white",
    borderRadius: 12,
    margin: 15,
    opacity: 0.8,
    width: 290,
    padding: 5,
    borderColor: "#000000",
    borderWidth: 3
  }
});
