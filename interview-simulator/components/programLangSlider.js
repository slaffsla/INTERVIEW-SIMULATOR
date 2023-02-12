import React, { useState, useEffect, useCallback } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, CheckBox } from 'react-native';
import Checkbox from 'expo-checkbox';
import { ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import FtwTextComponent from "./FtwText";
import Monkeys from './data/Monkeys';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
const Separator = () => (
  <View style={styles.separator} />
);

export default function ProgramLangSlider({ onReplaceSkinClick }) {

  const [reactQuestions, setReactQuestions] = useState(false);
  const [angularQuestions, setAngularQuestions] = useState(false);
  const [jsQuestions, setJsQuestions] = useState(false);
  const bgs = Monkeys.default;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <TouchableOpacity onPress={() => onReplaceSkinClick("default")} >
            <View style={styles.message}>
              <Checkbox
                style={styles.checkbox}
                value={reactQuestions}
                onValueChange={setReactQuestions}
                color={reactQuestions ? 'blue' : 'red'}
              />
              <View style={styles.section}>
                <Text><FontAwesome5 name="react" size={24} color="blue" />REACT</Text>
              </View>
            </View>
    
          </TouchableOpacity>
        </View>
        <View style={styles.cell}>
          <TouchableOpacity onPress={() => onReplaceSkinClick("default")} >
            <View style={styles.message}>
              <Checkbox
                style={styles.checkbox}
                value={jsQuestions}
                onValueChange={setJsQuestions}
                color={jsQuestions ? 'orange' : 'green'}
              />
              <View style={styles.section}>
                <Text><FontAwesome5 name="js-square" size={24} color="black" /> HTML</Text>
              </View>
            </View>
      
          </TouchableOpacity>
        </View>
        <View style={styles.cell}>
          <View style={styles.message}>
            <Checkbox
              style={styles.checkbox}
              value={angularQuestions}
              onValueChange={setAngularQuestions}
              color={angularQuestions ? 'red' : 'blue'}
            />
            <View style={styles.section}>
              <Text><Ionicons name="md-logo-angular" size={24} color="red" />ANGULAR</Text>
            </View>
          </View>
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
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 2,
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  message: {
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 16,
    margin: 5,
    opacity: 0.8,
    borderColor: "#46ac0a",
    borderWidth: 3,
    resizeMode: "stretch",
    padding: 10
  }
});
