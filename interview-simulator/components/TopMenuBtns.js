import React, { useState, useEffect, useCallback } from "react";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import ftwColors from './data/ColorsFTW';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TopMenuBtns({ text, icon, textColor ,bgcolor}) {
  const ftwTexts = ftwColors.texts;

  return (
    <Text style={[styles.messageRow, { color: textColor ,borderColor:textColor, backgroundColor:bgcolor}]}>
    <Text  style={{  top: 5 ,left:5,position:'absolute'}} > {text}<Text>{icon}</Text></Text> 
 </Text>
  );
}

const styles = StyleSheet.create({
    messageRow: {
    resizeMode: "stretch",
    textAlign: "center",
    justifyContent: 'center',
    width: 120,
    borderRadius: 12,
    backgroundColor: "black",
    opacity: 0.9,
    borderColor: "#46ac0a",
    padding:5,
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
    borderWidth: 3
  }
});
export const ftw10 = "10";
export const ftw14 = "14";
export const ftw22 = "22";
export const ftw42 = "42";
