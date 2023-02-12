import React, { useState, useEffect, useCallback,useRef  } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, CheckBox, ScrollView, Dimensions } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import bbbTheme from './data/bbbSkin';
import ftwTheme from './data/FTWthemes';
import defaultBosses from './data/Bosses';
import gifsTheme from './data/Gifs';
import soberTheme from './data/SoberTheme';
import { AntDesign } from '@expo/vector-icons';
import FtwTextComponent from "./FtwText";
import StoryLevel from "../components/pages/StoryLevel";

import StoryCard from "./StoryCard";
import DiffProgressBar from "./diffProgressBar";
import { Entypo } from '@expo/vector-icons';
import Monkeys from './data/Monkeys';
import { FontAwesome5 } from '@expo/vector-icons';

export default function StoryModeVertScroll({ navigation, onReplaceSkinClick }) {
  const scrollRef = useRef(null);
  const bgs = Monkeys.default;
  return (
    <View style={styles.container}>
      <ScrollView
       ref={scrollRef}
             onContentSizeChange={(width,height) => scrollRef.current.scrollTo({y:height})}
        style={styles.scrollerVertical}
        vertical={true}
      >
        <StoryLevel level={6} navigation={navigation} skin={bbbTheme.sinior} avatars={bbbTheme.avatars}/>
        <StoryLevel level={5} navigation={navigation} skin={ftwTheme.about} avatars={bbbTheme.middle}/>
        <StoryLevel level={4} navigation={navigation} skin={ftwTheme.quiz} avatars={soberTheme.bosses}/>
        <StoryLevel level={3} navigation={navigation} skin={soberTheme.welcomeBgs}  avatars={defaultBosses.middle} />
        <StoryLevel level={2} navigation={navigation} skin={soberTheme.welcomeBgs} avatars={soberTheme.bosses}/>
        <StoryLevel level={1} navigation={navigation} skin={ftwTheme.pyramid} avatars={ftwTheme.avatarsFunny}/>
      </ScrollView >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',

    flex: 1,
    borderColor: 'white',
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'

  },
  scrollerVertical: {
    backgroundColor: 'rgba(226, 243, 250, 0.63)',
    textAlign: 'center',
    margin: 2,
    padding: 2,
    borderRadius: 10,

  },
});
