
import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import ftwColors from './data/ColorsFTW';
import ColorsFTW from './data/ColorsFTW';
const ftwColorArray = ColorsFTW.progressBars;
export default function QuizControllPanel({ route, perguntaIndex, onVideoSelected }) {
  const [isVideoChecked, setVideoChecked] = useState(false);
  const ftwTexts = ftwColors.texts;
  useEffect(() => {
    onVideoSelected(isVideoChecked)
  }, [isVideoChecked, onVideoSelected]);
  return (

    <>
      <View style={[styles.messageDiv, { margin: 3, padding: 10, width: 400, resizeMode: "stretch", color: "red", backgroundColor: "black", borderColor: ftwColorArray[`${perguntaIndex}`] }]}>
        <View style={styles.messageDiv}>
          <Text style={[styles.paragraph, { fontSize: 12, color: "white" }]}>Video{"\n"} <Checkbox
            value={isVideoChecked}
            onValueChange={setVideoChecked}
            style={styles.checkbox}
          /></Text>

        </View>
        <View>
          <View style={styles.messageDiv}>
            <Text style={[styles.paragraph, { fontSize: 12, color: "white" }]}>{route.params.lang}</Text>
            <Text style={[styles.paragraph, { fontSize: 12, color: "orange" }]}>
              {route.params.difficulty}
            </Text>
            <Text style={[styles.paragraph, { fontSize: 12, color: "white", opacity: 1 }]}>{perguntaIndex}  / 10  </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageDiv: {
    flexDirection: "row",
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "black",
    resizeMode: "stretch",
    borderColor: "white",
    borderRadius: 12,
    opacity: 0.8,
    borderWidth: 3
  },

});



