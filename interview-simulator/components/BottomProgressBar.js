import React, { useState, useEffect, useCallback } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, CheckBox,ScrollView, Dimensions } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import FtwTextComponent from "./FtwText";
import DifficultySelector from "./DifficultySelector";

import Monkeys from './data/Monkeys';
import { FontAwesome5 } from '@expo/vector-icons';
const Separator = () => (
  <View style={styles.separator} />
);
export default function BottomProgressBar({ onReplaceSkinClick }) {

  const [pussyAmount, setPussyAmount] = useState(0);
  const [clownAmount, setClownAmount] = useState(0);


  const bgs = Monkeys.default;
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.sliderText}>MORE CHALLENGE</Text>
        <View style={styles.messageView}>
        
          <Slider
            style={{ width: 200, height: 20 }}
            step={1}
            minimumValue={-5}
            maximumValue={5}
            value={pussyAmount}
            onValueChange={slideValue => setPussyAmount(slideValue)}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="red"
            thumbTintColor="green"
          />
          <Slider
            style={{ width: 200, height: 20, color: "red" }}
            step={1}
            minimumValue={-5}
            maximumValue={5}
            value={clownAmount}
            onValueChange={slideValue => setClownAmount(slideValue)}
            minimumTrackTintColor="green"
            maximumTrackTintColor="black"
            thumbTintColor="blue"
          />
        </View>
      </View>
      <ScrollView 
        ref={(scrollView) => { this.scrollView = scrollView; }}
        style={styles.scrollerVertical}
        //pagingEnabled={true}
      
        vertical= {true}
        decelerationRate={5}
        snapToInterval={-60}
        snapToAlignment={"center"}
        contentInset={{
          top: 10,
          left: 0,
          right: 0,
        }}>
    
        <View style={styles.view} >
    <DifficultySelector />
        </View>
        <View style={styles.view2} />
          <View style={styles.view} >
    <DifficultySelector />
        </View>
          <View style={styles.view2} >
    <DifficultySelector />
        </View>
         <View style={styles.view} >
    <DifficultySelector />
        </View>
      </ScrollView>
      <View style={styles.row}>
        <View style={styles.cell}>
          <TouchableOpacity onPress={() => onReplaceSkinClick("funny")} >
            <View style={styles.message}>
              <Text ><MaterialCommunityIcons name="webhook" size={24} color="black" />webhook</Text>
            </View>
            <Image
              source={{
                uri: bgs[Math.floor(Math.random() * bgs.length)],
              }}
              style={{
                resizeMode: "stretch",
                width: 110,
                height: 110,
                borderRadius: 110 / 2,
                borderColor: "#effdd1",
                borderWidth: 3
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cell}>

          <TouchableOpacity onPress={() => onReplaceSkinClick("default")} >
            <View style={styles.message}>
              <Text><MaterialCommunityIcons name="server-security" size={24} color="black" /> DB Sec</Text>
            </View>
            <Image
              source={{
                uri: bgs[Math.floor(Math.random() * bgs.length)],
              }}
              style={{
                resizeMode: "stretch",
                width: 110,
                height: 110,
                borderRadius: 110 / 2,
                borderColor: "#effdd1",
                borderWidth: 3
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cell}>
          <TouchableOpacity onPress={() => onReplaceSkinClick("bbb")} >
            <View style={styles.message}>
              <Text style={styles.sliderText} >
                <FontAwesome5 name="brain" size={24} color="black" />
                <Text>WEB</Text>
              </Text>
            </View>
            <Image
              source={{
                uri: bgs[Math.floor(Math.random() * bgs.length)],
              }}
              style={{
                resizeMode: "stretch",
                width: 110,
                height: 110,
                borderRadius: 110 / 2,
                borderColor: "#effdd1",
                borderWidth: 3
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
  scrollerVertical:{
   backgroundColor:"rgba(227, 235, 5, 0.9)",
    margin: 10,
    height: 200,
    width:250,
    borderRadius: 10

  },
   view: {
    backgroundColor: 'blue',
    margin: 10,
    height: 200,
    width:250,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
  view2: {
    backgroundColor: 'red',
    margin: 10,
    height: 200,
    width:250,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
  messageView: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10
  },
  sliderText: {
    fontSize: 13,
    color: "#red",
    fontWeight: "bold"
  },
  cell: {
    width: 125,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
    padding: 5
  },
  message: {
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 16,
    margin: 2,
    opacity: 0.8,
    borderColor: "#46ac0a",
    borderWidth: 3,
    padding: 10
  }
});
