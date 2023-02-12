import React, { useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
    Animated, TouchableWithoutFeedback
} from "react-native";
import MonkeysImages from '../data/Monkeys';
import ColorsFTW from '../data/ColorsFTW';
import ftwBgImages from '../data/FTWthemes';
 import ftwColors from '../data/ColorsFTW';
export default function GameOver({ navigation, calculatedScore, globalSkin, difficulty }) {
   const [animation, setAnimation] = useState(new Animated.Value(0));
  const [currentLocalSkin, setCurrentLocalSkin] = useState(0);
  const ftwColorArray = ColorsFTW.progressBars;
    const ftwBorders = ftwColors.backgrounds;
  const startAnimation = () => {
    Animated.timing(animation, {
    toValue: 7,
      duration: 700,
      useNativeDriver: true
    })
      .start(({ returnAnimation }) => {
        navigation.navigate("INTERVIEW SIMULATOR (home)", params = { lang: 'lang', difficulty: 'MIDDLE', skin: 'currentSkin' })
        setAnimation(new Animated.Value(0));
      });
  }
  const animatedStyles = {
    transform: [
      { scale: animation }
    ]
  }
  return (
    <>
      <ImageBackground
        style={styles.bgimage}
         backgroundColor={ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}
        source={{
          uri: ftwBgImages.quiz[Math.floor(Math.random() * ftwBgImages.quiz.length)]
        }}>
       
        <TouchableOpacity onPress={() => setCurrentLocalSkin((i) => i + 1)}>
        <View style={[styles.messageDiv,{ borderColor: ftwColorArray[`${[Math.floor(Math.random() * ftwColorArray.length)]}`] }]}>
          <Text style={styles.paragraph}>
           IT WAS PLEASURE ...
          </Text>
        </View>
        <Image
          style={styles.endImage}
          source={{
            uri: MonkeysImages.default[[Math.floor(Math.random() *  MonkeysImages.default.length)]],
          }}
        />
        <View style={[styles.messageDiv, { borderColor: ftwColorArray[`${calculatedScore}`] }]}>
          <Text style={styles.paragraph}>WE WILL CALL YOU...</Text>
          <Text style={styles.paragraph}>{calculatedScore} / 10</Text>
        </View>
        <View style={styles.shareRatePanel}>
          <View style={[styles.messageDiv, { borderColor: ftwColorArray[`${[Math.floor(Math.random() * ftwColorArray.length)]}`] }]}>
            <View style={styles.shareRatePanel}>
              <Image
                style={styles.iconView}
                source={require("../../assets/icons/clock.png")}
              />
            
            </View>
          </View>
        </View>
              </TouchableOpacity>
               <TouchableWithoutFeedback onPress={startAnimation}>
          <View style={[styles.container, { marginTop: -155 }]} >
            <Animated.View style={[styles.box, animatedStyles, { marginTop: -15, position: 'absolute' },  { borderColor: ftwColorArray[`${[Math.floor(Math.random() * ftwColorArray.length)]}`] }]} />
            <Image
              style={[styles.startBtn, { marginTop: 13, position: 'absolute' ,
              height:150,width:150,
              borderWidth:6,
              borderColor:'white',
              borderRadius:150/2},
               { borderColor: ftwColorArray[`${[Math.floor(Math.random() * ftwColorArray.length)]}`] }]}
              source={require("../../assets/icons/retryEmpty.png")}
            />
            <Animated.View style={[styles.box2, animatedStyles, { marginTop: -15, position: 'absolute' },  { borderColor: ftwColorArray[`${[Math.floor(Math.random() * ftwColorArray.length)]}`] }]} />
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "rgba(94, 214, 105, 0.42)",
    textAlign: 'center',
    opacity: 0.8,
    margin: 0,
    resizeMode: 'stretch',
  },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  shareRatePanel: {
    flexDirection: "row"
  },
  paragraph: {
    margin: 5,
    fontSize: 14,
    color: "#001a00",
    fontWeight: "bold",
    textAlign: "center"
  },
  messageDiv: {
    backgroundColor: "white",
    borderRadius: 12,
    margin: 10,
    opacity: 0.8,
    width: 290,
    padding: 5,
    borderColor: "#000000",
    borderWidth: 3
  },
  endImage: {
    width: 250,
    height: 250,
    resizeMode: "stretch",
    borderRadius: 12,
    margin: 10,
    borderColor: "#201b1a",
    borderWidth: 6
  },
  iconView: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    flexDirection: "row",
    resizeMode: "stretch",
    textAlign: "center",
    opacity: 0.9,
    borderColor: "red",
    borderWidth: 2,
    padding: 5,
  },
    box: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 6,
    borderColor: "white"
  },
  box2: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 6,
    borderColor: "white"
  }
});
