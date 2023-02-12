import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView, Image } from 'react-native';
import ColorsFTW from './data/ColorsFTW';
import Monkeys from './data/Monkeys';
import WebCamView from './WebCamView';

import React, { useState, useEffect } from "react";
const FixedQuizTop = ({ lang, perguntaIndex, randomIndex, route }) => {
  function startTimer() {
    timer = setInterval(() => {
      if (Math.floor(seconds) > 5) {
        setMinutes((old) => (old += 1));
        setSeconds(0);
      } else {
        setSeconds((old) => (old += 1));
      }
    }, 1000);
  }
  useEffect(() => { }, []);

  return (
    <SafeAreaView>
         
      <WebCamView />
      
      <View style={[styles.topBarItems, { borderColor: 'yellow', padding: 5, margin: 5 }]}>
        {lang === 'REACT' && <Image
          style={styles.selectedLang}
          source={require("../assets/icons/reactLogo.png")}
        />
        }
        {lang === 'ANGULAR' && <Image
          style={styles.selectedLang}
          source={require("../assets/icons/angularLogo.png")}
        />}
        {lang === 'JS HTML' && <Image
          style={styles.selectedLang}
          source={require("../assets/icons/jsLogo3.png")}
        />
   
        }
             
      </View >
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topBarItems: {
    flexDirection: "row",
    resizeMode: "stretch",
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: "bold",
    opacity: 0.7,
    padding: 5
  },
  selectedLang: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderColor: "white",
    borderWidth: 6,
top:0,
    right: -190,
    position: 'absolute'
  }
});

export default FixedQuizTop;
