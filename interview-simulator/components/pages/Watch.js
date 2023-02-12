import React, { useState } from "react";
import { WebView } from 'react-native-webview';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";


export default function Learn({ navigation }) {
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/results?search_query=front+end+job+interview');


  return (
    <> 
      <WebView
      style={styles.container}
      source={{ uri:videoUrl}}
    />
            <View style={styles.message}>
              <TouchableOpacity onPress={() => setVideoUrl("https://www.youtube.com/results?search_query=Angular+job+interview")} >
              <Text ><MaterialCommunityIcons name="angular" size={24} color="black" />ANGULAR  INTERVIEW QUESTIONS</Text>
                     </TouchableOpacity>
            </View>
             <View style={styles.message}>
              <TouchableOpacity onPress={() => setVideoUrl("https://www.youtube.com/results?search_query=React+job+interview")} >
              <Text ><MaterialCommunityIcons name="react" size={24} color="black" />REACT  INTERVIEW QUESTIONS</Text>
                     </TouchableOpacity>
            </View>
                      <View style={styles.message}>
              <TouchableOpacity onPress={() => setVideoUrl("https://www.youtube.com/results?search_query=Java+script+job+interview")} >
              <Text ><MaterialCommunityIcons name="web" size={24} color="black" />JAVASCRIPT INTERVIEW QUESTIONS</Text>
                     </TouchableOpacity>
            </View>
    </>
  );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: 0,
  },
  message: {
    resizeMode: "stretch",
    backgroundColor: "rgba(244, 249, 251, 0.80)",
    borderRadius: 12,
    fontSize: 22,
    fontWeight: "bold",
    margin: 5,
    padding: 5,
    opacity: 0.9,
    borderColor: "#eea74e",
    borderWidth: 3
  }
});
