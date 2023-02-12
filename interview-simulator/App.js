import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import HomePage from "./components/pages/HomePage";
import WelcomePage from "./components/pages/WelcomePage";
import Quiz from "./components/pages/Quiz";
import About from "./components/pages/About";
import QuickPlay from "./components/pages/QuickPlay";
import HelpPage from "./components/pages/Help";
import TopMenuBar from "./components/TopMenuBar";
import GameOver from "./components/pages/GameOver";
import SettingPage from "./components/pages/Settimng";
import StoryModePage from "./components/pages/StoryModePage";
import Learn from "./components/pages/Watch";
const Stack = createNativeStackNavigator();

function App() {
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  return (
    <View style={styles.container}>
 
      <NavigationContainer style={{ position: "absolute", zIndex: 1 }} ref={navigationRef}>
         
        <StatusBar style={styles.splash} />
          <TopMenuBar navigation={navigationRef}  />
        <Stack.Navigator>
          <Stack.Screen name="INTERVIEW SIMULATOR (WelcomePage)" component={WelcomePage} />
          <Stack.Screen name="INTERVIEW SIMULATOR (Settings)" component={SettingPage} />

          <Stack.Screen name="INTERVIEW SIMULATOR (AboutPage)" component={About} />
          <Stack.Screen name="INTERVIEW SIMULATOR (HelpPage)" component={HelpPage} />
          <Stack.Screen name="INTERVIEW SIMULATOR (Story)" component={StoryModePage} />

          <Stack.Screen name="INTERVIEW SIMULATOR (Learn)" component={Learn} />
          <Stack.Screen name="INTERVIEW SIMULATOR (home)" component={HomePage} />
          <Stack.Screen name="INTERVIEW SIMULATOR (Quiz)" component={Quiz} />


          <Stack.Screen name="INTERVIEW SIMULATOR (QuickPlay)" component={QuickPlay} />
          <Stack.Screen name="INTERVIEW SIMULATOR (GameOver)" component={GameOver} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(179, 42, 13, 0.64)",
    flex: 1,
  },
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "rgba(203, 17, 144, 0.64)"
  }
});
export default App;
