import React, { useState, useEffect, useCallback, useRef } from "react";
import TopMenuBar from "../TopMenuBar";
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Animated, TouchableWithoutFeedback
} from "react-native";
import Monkeys from '../data/Monkeys';
import Rotate from '../animations/Rotate';
import { Slider } from "@miblanchard/react-native-slider";
import ftwColors from '../data/ColorsFTW';
import bgImages from '../data/imagesUris';
import WelcomePageTheme from '../data/WelcomePageTheme';
import {
  defaultstyles,
  trackMarkStyles,
} from '../styles';
const DEFAULT_VALUE = 2;
export default function SettingsPage({ navigation }) {
  const [currentSkin, setCurrentSkin] = useState("default");
  const [loading, setLoading] = React.useState(false);
  const [valueMood, setValueMood] = useState(Math.floor(Math.random() * 8));
  const [bgImageUrls, setBgImageUrls] = useState(WelcomePageTheme.motivators[0]);
  const bgList = [WelcomePageTheme.kittens, WelcomePageTheme.monkey, WelcomePageTheme.tripping, WelcomePageTheme.motivators, WelcomePageTheme.soviet, WelcomePageTheme.nerd, WelcomePageTheme.obey, WelcomePageTheme.asian, WelcomePageTheme.bbb, WelcomePageTheme.bbb]
  const bgs = bgList[valueMood]
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  };
  useEffect(() => {
    startLoading()

  }, []);
  const ftwBorders = ftwColors.backgrounds;
  const ftwSlider = ftwColors.skinSlider;

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
          <Text>{value}</Text>
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
        <Rotate onRecteate={(old) => setValueMood(Math.floor(Math.random() * 9))} />
        <TouchableOpacity onPress={() => setCurrentSkin((i) => i + 1)}>
          <View style={[styles.messageDivWelcome, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }]}>
            <SliderContainer style={{
              margin: 5,
              alignItems: 'center',
              textAlign: 'center',
              resizeMode: "stretch",
              justifyContent: 'center',
            }}
              caption={false}
              sliderValue={valueMood}
              step={1}
              trackMarks={[0, 2, 4, 6, 8]}>
              <Slider minimumTrackTintColor="red" width={320} padding={5} margin={15} backgroundColor="rgba(231, 61, 116, 0.24)" borderRadius={6} maximumTrackTintColor="#1fb28a" animateTransitions maximumValue={9} borderWidth={3} minimumValue={0} step={1} borderColor={ftwSlider[valueMood]} />
            </SliderContainer>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  messageDivWelcome: {

    justifyContent: 'center',
    textAlign: 'center',
    resizeMode: "cover",
    backgroundColor: "rgba(213, 255, 242, 0.8)",
    borderRadius: 12,
    padding: 10,
    margin: 10,
    fontSize: 22,
    fontWeight: "bold",
    borderColor: "rgba(0, 216, 147, 0.80)",
    borderWidth: 3
  },
  bgimage: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: "rgba(94, 214, 105, 0.45)",
    fontWeight: "bold",
    opacity: 0.8,
    margin: 0,
    resizeMode: 'stretch',
  }
});