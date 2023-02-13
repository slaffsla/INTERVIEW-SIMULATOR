import React, { useState, useEffect, useCallback, useRef } from "react";
import TopMenuBar from "../TopMenuBar";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Animated, TouchableWithoutFeedback
} from "react-native";
import Monkeys from '../data/Monkeys';
import { Slider } from "@miblanchard/react-native-slider";
import ftwColors from '../data/ColorsFTW';
import bgImages from '../data/imagesUris';
import WelcomePageTheme from '../data/WelcomePageTheme';
import {
  defaultstyles,
  trackMarkStyles,
} from '../styles';
const DEFAULT_VALUE = 0.2;
export default function WelcomePage({ navigation }) {
  const [currentSkin, setCurrentSkin] = useState("default");
  const [userName, setUserName] = useState("JHON DOE");
  const [loading, setLoading] = React.useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const [valueMood, setValueMood] = useState(5);
  const bgList = [WelcomePageTheme.kittens, WelcomePageTheme.monkey, WelcomePageTheme.tripping, WelcomePageTheme.motivators, WelcomePageTheme.soviet, WelcomePageTheme.nerd, WelcomePageTheme.obey, WelcomePageTheme.asian, WelcomePageTheme.bbb, WelcomePageTheme.bbb]
  const bgs = bgList[valueMood]
  const [text, onChangeText] = useState('Enter USer name');
  const ftwBorders = ftwColors.backgrounds;
  const ftwSlider = ftwColors.skinSlider;
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 5,
      duration: 700,
      useNativeDriver: true
    })
      .start(({ returnAnimation }) => {
        navigation.navigate("INTERVIEW SIMULATOR (home)", params = { lang: 'lang', difficulty: 'MIDDLE', skin: currentSkin })
        setAnimation(new Animated.Value(0));
      });
  }
  const animatedStyles = {
    transform: [
      { scale: animation }
    ]
  }
  const SliderContainer = (props) => {
    const { caption, sliderValue, trackMarks } = props;
    const [value, setValue] = React.useState(
      sliderValue ? sliderValue : DEFAULT_VALUE,
    );
    let renderTrackMarkComponent;

    if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
      renderTrackMarkComponent = (index) => {
        const currentMarkValue = trackMarks[index];
        const currentSliderValue = (Array.isArray(value) && value[0]) || 0;
        const style =
          currentMarkValue > Math.max(currentSliderValue)
            ? trackMarkStyles.activeMark
            : trackMarkStyles.inactiveMark;
        return <View style={style} />;
      };
    }

    const renderChildren = () => {
      return React.Children.map(
        props.children,
        (child) => {
          if (!!child && child.type === Slider) {
            return React.cloneElement(child, {
              onValueChange: setValueMood,
              renderTrackMarkComponent,
              trackMarks,
              value,
            });
          }
          return child;
        },
      );
    };
    return (
      <View style={styles.sliderContainer}>
        <View style={styles.titleContainer}>
          <Text>{caption}</Text>
          <Text>{Array.isArray(value) ? value.join(' - ') : value}</Text>
        </View>
        {renderChildren()}
      </View>
    );
  };

  return (
    <>
      <ImageBackground
        style={styles.bgimage}
        backgroundColor={ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}
        source={{
          uri: bgs[Math.floor(Math.random() * bgs.length)],
        }}
      >
      
        <View style={[styles.messageDivWelcome, { backgroundColor: 'rgba(46, 235, 16, 0.23)', borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }]}>
          <TextInput
              style={styles.input}
              onChangeText={setUserName}
              value={userName}
              backgroundColor="white"
            />
          <View style={styles.container} >
                 <TouchableWithoutFeedback onPress={startAnimation}>
              <Image
                style={[styles.submitBtn,
                { borderColor: "white" }]}
                source={{
                  uri: Monkeys.noob[Math.floor(Math.random() * Monkeys.noob.length)],
                }}
              />
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.cicrcle, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
            <Animated.View style={[styles.cicrcle2, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
            <Animated.View style={[styles.cicrcle3, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />

     
          </View>
          <TouchableOpacity
            onPress={() => setCurrentSkin((old) => old + 1)}>
            <View style={[styles.messageDiv, { backgroundColor: 'rgba(234, 254, 231, 0.23)', borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }]}>

              <SliderContainer style={{
                alignItems: 'center',
                justifyContent: 'center',
                resizeMode: 'stretch',
                padding: 10,
                margin: 10,
                zIndex: 5
              }}
                caption={false}
                sliderValue={valueMood}
                step={1}
                trackMarks={[0, 3, 6, 9]}>
                <Slider minimumTrackTintColor="red" width={280} padding={10} margin={10} backgroundColor="rgba(231, 61, 116, 0.44)" borderRadius={6} maximumTrackTintColor="#1fb28a" animateTransitions maximumValue={9} borderWidth={3} minimumValue={0} step={1} zIndex={12} borderColor={ftwSlider[valueMood]} />
              </SliderContainer>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  bgimage: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: "rgba(227, 235, 5, 0.9)",
    fontWeight: "bold",
    opacity: 0.8,
    marginTop: 0,
    resizeMode: 'stretch',
  },
  input: {
    height: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    margin: 25,
    padding: 10,
    width: 190,
    fontSize: 18,
    borderWidth: 3,
    borderRadius: 12,
    borderColor: "red"
  },
  submitBtn: {
    resizeMode: "stretch",
    marginTop: -20,
    width: 200,
    borderWidth: 6,
    height: 200,
    borderRadius: 200 / 2,
    padding: 5,
    margin: 5,
    zIndex: 9

  },
  cicrcle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 10,
    padding: 5,
    margin: 5,
    zIndex: 1,
    opacity: 0.6,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute'
  },
  cicrcle2: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 10,
    zIndex: 2,
    opacity: 0.5,
    backgroundColor: 'rgba(1, 0, 4, 0.7)',
    position: 'absolute'
  },
  cicrcle3: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 10,
    zIndex: 3,
    opacity: 0.4,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute'
  },
  messageDivWelcome: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    resizeMode: "cover",
    backgroundColor: "rgba(213, 255, 242, 0.4)",
    borderRadius: 12,
    padding: 10,
    margin: 10,
    fontSize: 22,
    fontWeight: "bold",
    borderColor: "rgba(0, 216, 147, 0.80)",
    borderWidth: 3
  },
  messageDiv: {
    backgroundColor: "rgba(244, 249, 251, 0.10)",
    borderRadius: 12,
    fontSize: 22,
    fontWeight: "bold",
    margin: 5,
    padding: 5,
    opacity: 0.9,
  }
});