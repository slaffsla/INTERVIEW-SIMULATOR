import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import ftwColors from './data/ColorsFTW';
export default function FtwTextComponent({ text , textSizechaosRange}) {
  const ftwTexts = ftwColors.texts;
  
  return (
    <Text style={[styles.paragraph,styles[textSizechaosRange], {color: `${ftwTexts[Math.floor(Math.random() * ftwTexts.length)]}` }]}> {text}</Text>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
export const ftw10 = "ftw10";
export const ftw14 = "ftw14";
export const ftw22 = "ftw22";
export const ftw42 = "ftw42";
