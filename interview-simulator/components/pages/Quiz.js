import {
  Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Button, Image, TouchableOpacity, SafeAreaView,
  Animated, TouchableWithoutFeedback
} from 'react-native';
import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { Fontisto } from '@expo/vector-icons';
import ReactQuestions from "../data/ReactQuestions";
import AngularQuestions from "../data/AngularQuestions";
import Html5Questions from "../data/Html5Questions";
import FixedQuizTop from "../FixedQuizTop";
import CountDownCircle from "../CountDownCircle";
import { ProgressBar } from "react-native-paper";
import backgroundsBBB from '../data/bbbSkin';
import backgroundsReact from '../data/ReactImages';
import Rotate from '../animations/Rotate';
import ftwBgImages from '../data/FTWthemes';
import Bosses from '../data/Bosses';
import CatsBgs from '../data/Cats';
import ColorsFTW from '../data/ColorsFTW';
import VideoAvatar from '../videoAvatar';
import WebCamView from '../WebCamView';
import QuizControlPanel from '../quizControlPanel';
import Monkeys from '../data/Monkeys';
import Checkbox from 'expo-checkbox';
import Gifs from '../data/Gifs';
import ftwColors from '../data/ColorsFTW';
let correctList = [];
let responseList = [];
let zoombosses = [];
let zoomBAckgrounds = [];
avatarsFtw = ftwBgImages.avatarsFunny;
export default function Quiz({ navigation, route }) {
  const [perguntaTitles, setPerguntaTitles] = useState([]);
  const [perguntaIndex, setPerguntaIndex] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [calculatedScore, setCalculatedScore] = useState(0);
  const [currentSkin, setCurrentSkin] = useState(null);
  const [isVideoChecked, setVideoChecked] = useState(false);
  const ftwColorArray = ColorsFTW.progressBars;
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const [timerOn, setTimerOn] = useState(true);
  const amountOfQuestions = 10;
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 7,
      duration: 700,
      useNativeDriver: true
    })
      .start(({ returnAnimation }) => {
        submitAnswer()
        setAnimation(new Animated.Value(0));
      });
  }
  const animatedStyles = {
    transform: [
      { scale: animation }
    ]
  }
  const submitAnswer = () => {
    if (perguntaIndex === amountOfQuestions) {
      calculateFinallResult();
      setPerguntaIndex(1);
      navigation.navigate("INTERVIEW SIMULATOR (GameOver)", params = { lang: route.params.lang, difficulty: route.params.difficulty, skin: currentSkin, calculatedScore: calculatedScore })
    } else {

      setPerguntaIndex((old) => old += 1); //TODO:check change
      calculateFinallResult();
      setSelectedId(null);
    }
  };
  const ftwBorders = ftwColors.backgrounds;
  const calculateFinallResult = () => {
    responseList.push(selectedId);
    let difference = 0;
    for (let i = 0; i < responseList.length; i++) {
      if (responseList[i] === correctList[i]) {
        difference += 1;
      }
    }
    setCalculatedScore(difference);
  };
  const generateQuestions = useCallback(() => {
    //TODO: repeated code refactor
    correctList = [];
    questionsTitles = [];
    if (route.params.lang === "REACT") {
      setQuestions(ReactQuestions[perguntaIndex].answers);

      ReactQuestions.forEach((item) => {
        questionsTitles.push(item.question)
      });
      ReactQuestions.forEach((item) => {
        correctList.push(item.correctIndex);
      });
    } else if (route.params.lang === "ANGULAR") {
      setQuestions(AngularQuestions[perguntaIndex].answers);
      AngularQuestions.forEach((item) => {
        questionsTitles.push(item.question)
      });

      AngularQuestions.forEach((item) => {
        correctList.push(item.correctIndex);
      });
    } else {
      setQuestions(Html5Questions[perguntaIndex].answers);
      Html5Questions.forEach((item) => {
        questionsTitles.push(item.question)
      });
      Html5Questions.forEach((item) => {
        correctList.push(item.correctIndex);
      });
    }
    setPerguntaTitles(questionsTitles);
    zoombosses = [];
    zoomBAckgrounds = [];
    customAvatars = [];
    customBgs = [];
    if (route.params.avatars) {
      customAvatars = route.params.avatars.split(',')
    }
    if (route.params.skin) {
      customBgs = route.params.skin.split(',')
    }
    for (let i = 0; i <= 20; i++) {
      zoomBAckgrounds.push(ftwBgImages.pyramid[Math.floor(Math.random() * ftwBgImages.pyramid.length)])

      if (customAvatars.length > 0 && customBgs.length > 0) {
        zoombosses.push(customAvatars[Math.floor(Math.random() * customAvatars.length)])
        zoomBAckgrounds.push(customBgs[Math.floor(Math.random() * customBgs.length)])
      } else {
        if (route.params.difficulty === "JUNIOR") {
          zoombosses.push(Bosses.junior[Math.floor(Math.random() * Bosses.junior.length)])
          zoomBAckgrounds.push(ftwBgImages.quiz[Math.floor(Math.random() * ftwBgImages.quiz.length)])
        }
        if (route.params.difficulty === "MIDDLE") {
          zoombosses.push(Bosses.middle[Math.floor(Math.random() * Bosses.middle.length)])
          zoomBAckgrounds.push(ftwBgImages.quiz[Math.floor(Math.random() * ftwBgImages.quiz.length)])
        }
        if (route.params.difficulty === "SINIOR") {
          zoombosses.push(Bosses.sinior[Math.floor(Math.random() * Bosses.sinior.length)])
          zoomBAckgrounds.push(backgroundsBBB.sinior[Math.floor(Math.random() * backgroundsBBB.sinior.length)])
        }
      }
    }
  }, [perguntaIndex, route.params]);

  useEffect(() => {
    generateQuestions();
  }, [generateQuestions]);
  useLayoutEffect(() => {
    setSelectedId(null);
   
  }, []);

  const listItems = questions?.map((question, index) => (
    <View
      key={index}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        resizeMode: "stretch",
        borderColor: "rgba(27, 173, 127, 0.62)",
        color: `${index != selectedId ? "rgba(1, 14, 14, 0.84)" : "rgba(6, 92, 216, 0.95)"}`,
        borderRadius: 8,
      }}
    >
      <TouchableOpacity onPress={() => {
        setSelectedId(index);
      }} >
        <Text style={{
          padding: 10,
          margin: 5,
          resizeMode: "stretch",
          fontSize: 15,
          width: 150,
          height: 70,
          fontWeight: "bold",
          borderRadius: 8,
          borderWidth: 3,
          backgroundColor: `${index != selectedId ? "rgba(32, 236, 146, 0.82)" : "white"}`,
          color: `${index != selectedId ? "rgba(1, 14, 14, 0.90)" : "rgba(6, 92, 216, 0.90)"}`,
        }}><Fontisto name={`${index != selectedId ? "checkbox-passive" : "checkbox-active"}`} borderWidth={3} size={20} color="black" /> {question} </Text>
      </TouchableOpacity>
    </View>
  ));

  return (
    <>

      <ImageBackground
        style={[styles.bgimage, { opacity: 0.9, fontSize: 13, flex: 1 }]}
        source={{
          //uri: ftwBgImages.quiz[Math.floor(Math.random() * ftwBgImages.quiz.length)]
          uri: zoomBAckgrounds[`${perguntaIndex}`]
        }}
        backgroundColor={ftwColorArray[`${perguntaIndex}`]}
      >

        <QuizControlPanel onVideoSelected={setVideoChecked} {...{ navigation }} lang={route.params.lang} route={route} perguntaIndex={perguntaIndex} style={{
          width: 300,
          justifyContent: "center",
          position: 'absolute',
          resizeMode: "stretch",
          borderRadius: 12,
          borderColor: "green",
          borderWidth: 3

        }} />
        <View style={styles.row} >
          <FixedQuizTop {...{ navigation }} lang={route.params.lang} route={route} perguntaIndex={perguntaIndex}
          />
        </View>
        <View
          style={[
            styles.balloon,
            {
              backgroundColor: "rgba(153, 241, 231, 0.7)",
              height: 200,
              width: 350,
              marginTop: 1,
              resizeMode: "stretch",
              borderColor: ftwColorArray[`${perguntaIndex}`],
              opacity: 0.9
            },
          ]}
        >
          <Text style={[styles.paragraph, { fontSize: 20 }]}>{perguntaIndex} {perguntaTitles[perguntaIndex]} </Text>
        </View>
        {isVideoChecked &&
          <VideoAvatar style={{
            marginTop: 5,
            borderWidth: 3
          }}
          />
        }

        {!isVideoChecked &&
          <Image
            style={[
              styles.questionImage,
              {
                backgroundColor: "rgba(0, 0, 0, 0.50)",
                height: 250,
                width: 350,
                opacity: 0.9
              },
            ]}
            source={{
              uri: zoombosses[`${perguntaIndex}`],
            }}
          />}
        <View
          style={{
            justifyContent: "center",
            resizeMode: "stretch",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {listItems}
        </View>
        <ProgressBar
          style={{
            height: 10,
            width: 260,
          }}
          progress={perguntaIndex / 10}
          color={ftwColorArray[perguntaIndex]}
        />
        <TouchableWithoutFeedback onPress={startAnimation}>
          <View style={[styles.container, {
            top: 330, position: 'absolute', alignItems: 'center',
            textAlign: 'center'
          }]} >
            <CountDownCircle mode={timerOn} />
            {selectedId !== null && (<Animated.View style={[styles.cicrcle, animatedStyles, { borderColor: 'white' }]} />)}
            {selectedId !== null && (

              <Image
                style={[styles.submitBtn,
                { position: 'absolute', opacity: 0.9, borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }]}
                source={require("../../assets/submitBtn3.png")}
              />

            )}
             {selectedId !== null && (
               <>
 <Animated.View style={[styles.cicrcle, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
          <Animated.View style={[styles.cicrcle2, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
          <Animated.View style={[styles.cicrcle3, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
            </> )}

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
    textAlign: 'center',
    backgroundColor: "rgba(227, 235, 5, 0.9)",
    fontWeight: "bold",
    opacity: 0.8,
    marginTop: 0,
    resizeMode: 'stretch',
  },
  row: {
    flexDirection: 'row',
    zIndex: 9,
    position: "absolute",
    resizeMode: 'stretch',
  },
  questionImage: {
    width: 300,
    height: 200,
    resizeMode: "stretch",
    borderColor: "#00cccc",
    marginTop: 5,
    borderWidth: 6,
    borderRadius: 10
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10
  },
  balloon: {
    marginTop: 20,
    borderRadius: 20,
    borderColor: "#00cccc",
    borderWidth: 6,
    flex: 1,
    fontSize: 20,
  },
  submitBtn: {
    resizeMode: "stretch",
    marginTop: -150,
    width: 130,
    borderWidth: 6,
    height: 130,
    borderRadius: 130 / 2,
    padding: 5,
    margin: 5,
    zIndex: 9,
    opacity: 0.8,
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute'
  },
  cicrcle2: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 10,
    zIndex: 2,
    opacity: 0.5,
    backgroundColor: 'rgba(1, 0, 4, 0.6)',
    position: 'absolute'
  },
  cicrcle3: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 10,
    zIndex: 3,
    opacity: 0.4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute'
  }
});
