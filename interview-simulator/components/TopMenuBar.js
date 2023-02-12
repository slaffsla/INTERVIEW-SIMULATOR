import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  ImageBackground
} from "react-native";
import { FontAwesome, FontAwesome5, AntDesign, Fontisto } from '@expo/vector-icons';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import TopMenuBtns from './TopMenuBtns';
import { Picker, Item } from 'react-native-picker/picker';
import CatsBgs from './data/Cats'
import Monkeys from './data/Monkeys'
export default function TopMenuBar({ navigation, globalSkin }) {
  const [currentSkin, setCurrentSkin] = useState('currentSkin');
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [currentDiff, setCurrentDiff] = useState('normal');
  const [currentLang, setCurrentLang] = useState('ENG');
  const [selected, setSelected] = useState(null);
  const bgs = Monkeys.default;
  loading = true;
  const lang = 'EN';
  useEffect(() => {
    setCurrentSkin(globalSkin);
  }, [globalSkin]);

  return (
    <View style={styles.container}>
      <View style={styles.dropdown}>
        <Picker
          fontWeight="bold"
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="ENGLISH DEFAULT THEME SKIN" value="ENG" color="rgba(14, 167, 41, 1)" backgroundColor="red" />
          <Picker.Item label="RUS DEFAULT THEME SKIN" value="RU" color="red" />
          <Picker.Item label="HEB DEFAULT THEME" value="HE" color="blue" />
          <Picker.Item label="ASIAN DEFAULT THEME" value="CHINA" color="green" />
          <Picker.Item label="FTW DEFAULT THEME" value="FTW" color="black" />
          <Picker.Item label="FTW BBB GAMING THEME" value="FTW" color="red" />
          <Picker.Item label="INDIA DEFAULT THEME" value="FTW" color="pink" />
        </Picker>
      </View>
      <View style={{ backgroundColor: 'rgba(5, 5, 14, 0.77)', top: -10, resizeMode: "stretch", width: 370, borderRadius: 18 }} >
        <Text style={[styles.news, { color: 'white', padding: 10, fontWeight: "bold", textAlign: 'center' }]}>
          {"\n"}
          AI  FTW JOB
          {"\n"}
          INTERVIEW SIMULATOR
          {"\n"}
          2023
        </Text>
      </View>
      <View style={styles.mojoAvatar} >
        <Image
          source={{
             uri: Monkeys.noob[Math.floor(Math.random() * Monkeys.noob.length)],
          }}
          style={{
            resizeMode: "stretch",
            width: 120,
            height: 120,
            borderRadius: 120 / 2,
            borderColor: "white",
            borderWidth: 5
          }}
        />
      </View>
      <Text style={[styles.mentorText, { textAlign: "left", fontSize: 8, padding: 10, margin: 10, color: "white" }]}>ver: 1.0 theme: {currentSkin} dif: {currentDiff}  lang: {currentLang}</Text>
      <View style={[styles.row, { resizeMode: "stretch", position: "absolute", top: 30, marginTop: 25, zIndex: 9 }]}>
        <ScrollView horizontal={true} fadingEdgeLength={15} >
          <TouchableOpacity onPress={() => navigation.navigate("INTERVIEW SIMULATOR (home)", params = { lang: lang, difficulty: 'MIDDLE', skin: currentSkin })}>
            <TopMenuBtns text="HOME " bgcolor="rgba(94, 214, 105, 0.85)" icon={<FontAwesome5 name="users-cog" size={30} color="black" />} textColor="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("INTERVIEW SIMULATOR (QuickPlay)", params = { lang: lang, difficulty: 'MIDDLE', skin: currentSkin })}>
            <TopMenuBtns text="SKIRMISH " bgcolor="rgba(200, 4, 47, 0.85)" icon={<FontAwesome5 name="glasses" size={30} color="black" />} textColor="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("INTERVIEW SIMULATOR (Story)", params = { lang: lang, difficulty: 'MIDDLE', skin: currentSkin })}>
            <TopMenuBtns text="STORY" bgcolor="rgba(14, 167, 41, 0.85)" icon={<FontAwesome5 name="user-graduate" size={30} color="black" />} textColor="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("INTERVIEW SIMULATOR (Learn)", params = { lang: lang, difficulty: 'MIDDLE', skin: currentSkin })}>
            <TopMenuBtns text="TUTORIAL " bgcolor="rgba(177, 0, 146, 0.85)" icon={<MaterialCommunityIcons name="theater" size={30} color="black" />} textColor="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("INTERVIEW SIMULATOR (HelpPage)", params = { lang: lang, difficulty: 'MIDDLE', skin: currentSkin })}>
            <TopMenuBtns text="HELP " bgcolor="rgba(189, 223, 6, 0.85)" icon={<FontAwesome5 name="donate" size={30} color="black" />} textColor="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("INTERVIEW SIMULATOR (AboutPage)", params = { lang: lang, difficulty: 'MIDDLE', skin: currentSkin })}>
            <TopMenuBtns text="ABOUT " bgcolor="rgba(220, 90, 44, 0.85)" icon={<Fontisto name="sunglasses" size={30} color="black" />} textColor="black" />
          </TouchableOpacity>
                 <TouchableOpacity onPress={() => navigation.navigate("INTERVIEW SIMULATOR (Settings)", params = { lang: lang, difficulty: 'MIDDLE', skin: currentSkin })}>
            <TopMenuBtns text="DOWNLOAD " bgcolor="rgba(80, 51, 222, 0.96)" icon={<Fontisto name="download" size={30} color="black" />} textColor="black" />
          </TouchableOpacity>
                       <TouchableOpacity onPress={() => navigation.navigate("INTERVIEW SIMULATOR (Create)", params = { lang: lang, difficulty: 'MIDDLE', skin: currentSkin })}>
            <TopMenuBtns text="CREATE " bgcolor="rgba(241, 243, 17, 0.8))" icon={<Fontisto name="upload" size={30} color="black" />} textColor="black" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 110,
     width:400,
    backgroundColor: 'rgba(226, 243, 250, 0.63)',
    borderRadius: 12,
    borderColor: "rgba(91, 193, 59, 0.73)",
    borderWidth: 3,
    resizeMode: "cover"
  },
  row: {
    flexDirection: "row",
    resizeMode: "stretch",
    textAlign: "center",
    justifyContent: 'center',
  },
  mojoAvatar: {
    left: -30,
    top: -15,
    zIndex: 3,
    position: "absolute",
    resizeMode: "stretch",
  },
  dropdown: {
    resizeMode: "stretch",
    textAlign: "center",
    justifyContent: 'center',
    right: -10,
    top: 0,
    height: 50,
    width: 110,
    backgroundColor: "rgba(244, 249, 251, 1)",
    borderRadius: 12,
    fontSize: 12,
    fontWeight: "bold",
    opacity: 0.9,
    borderColor: "#eea74e",
    borderWidth: 3,
    position: "absolute",
    zIndex: 8,
  },
  news: {
    fontSize: 13,
    flexDirection: "row",
    color: "#ffffff",
    padding: 2,
    textAlign: "center",
    resizeMode: "stretch",
    fontWeight: "bold",
    borderColor: "rgba(226, 243, 250, 0.63)",
    borderWidth: 3,
    borderRadius: 12
  },
});
