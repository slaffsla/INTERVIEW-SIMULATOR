import React, { useState, useEffect, useCallback } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, CheckBox } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
const Separator = () => (
  <View style={styles.separator} />
);

export default function DiffLevelProgressBar({ onReplaceSkinClick }) {

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.messageRow, {
          color: 'green'
        }]}>
          <Text style={{ color: 'green' }}><FontAwesome name="flask" size={24} color="black" />JUNIOR </Text>
        </View>
        <View style={[styles.messageRow, {
          color: 'green'
        }]}>
          <Text style={{ color: 'blue' }}><FontAwesome5 name="microscope" size={24} color="black" />MIDDLE </Text>
        </View>
        <View style={[styles.messageRow, {
          color: 'green'
        }]}>
          <Text style={{ color: 'red' }}><FontAwesome5 name="brain" size={24} color="black" />SINIOR </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  row: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  messageRow: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    opacity: 0.8,
    borderColor: "#46ac0a",
    resizeMode: "stretch",
    padding: 5,
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 3
  }
});
