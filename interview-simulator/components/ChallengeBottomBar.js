import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  CheckBox,
  ScrollView,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Monkeys from './data/Monkeys';
import { FontAwesome } from '@expo/vector-icons';


export default function ChallengeBottomBar({ onDifficultySelectionChange }) {
  const bgs = Monkeys.default;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <TouchableOpacity onPress={() => onDifficultySelectionChange('JUNIOR')}>
            <View style={styles.message}>
              <Text style={styles.paragraph}>
                {' '}
                <FontAwesome name="graduation-cap" size={20} color="black" />
                JUNIOR
              </Text>
            </View>
            <Image
              source={{
                uri: Monkeys.noob[Math.floor(Math.random() * Monkeys.noob.length)],
              }}
              style={{
                resizeMode: 'stretch',
                width: 110,
                height: 110,
                borderRadius: 110 / 2,
                borderColor: 'green',
                borderWidth: 5,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cell}>
          <TouchableOpacity
            onPress={() => onDifficultySelectionChange('MIDDLE')}>
            <View style={styles.message}>
              <Text>
                {' '}
                <Entypo name="lab-flask" size={20} color="black" />
                MIDDLE
              </Text>
            </View>
            <Image
              source={{
                uri: Monkeys.default[Math.floor(Math.random() * Monkeys.default.length)],
              }}
              style={{
                resizeMode: 'stretch',
                width: 110,
                height: 110,
                borderRadius: 110 / 2,
                borderColor: 'yellow',
                borderWidth: 5,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.cell}>
          <TouchableOpacity
            onPress={() => onDifficultySelectionChange('SINIOR')}>
            <View style={styles.message}>
              <Text style={styles.sliderText}>
                <FontAwesome name="lightbulb-o" size={24} color="black" />
                <Text>SINIOR</Text>
              </Text>
            </View>
            <Image
              source={{
                uri: Monkeys.endGame[Math.floor(Math.random() * Monkeys.endGame.length)],
              }}
              style={{
                resizeMode: 'stretch',
                width: 110,
                height: 110,
                borderRadius: 110 / 2,
                borderColor: 'red',
                borderWidth: 5,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  sliderText: {
    fontSize: 13,
    color: '#red',
    fontWeight: 'bold',
  },
  cell: {
    width: 125,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 5,
  },
  message: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 16,
    margin: 2,
    opacity: 0.8,
    borderColor: '#46ac0a',
    borderWidth: 3,
    padding: 5,
  },
});
