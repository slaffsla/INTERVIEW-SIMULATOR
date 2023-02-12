import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import ftwColors from './data/ColorsFTW';

export default function FtwMessageBoxComponent({ borderColorsRange, bgColorsRange, children }) {
  const ftwTexts = ftwColors.texts;
  const ftwBgs = ftwColors.backgrounds;
  const ftwBorders = ftwColors.borders;
  return (
    <View style={[styles.messageWrapper, { backgroundColor: `${ftwColors.progressBars[Math.floor(Math.random() * ftwColors.progressBars.length)]}`, borderColor: `${ftwColors.borders[Math.floor(Math.random() * ftwColors.borders.length)]}` }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  messageWrapper: {
    backgroundColor: "white",
    borderRadius: 12,
    margin: 5,
    padding: 2,
    borderColor: "#eea74e",
    borderWidth: 3,
    zIndex:1
  },
});

