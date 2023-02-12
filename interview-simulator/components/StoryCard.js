
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import { TopMenuBtns } from './TopMenuBtns';

import { Ionicons } from '@expo/vector-icons';
import Monkeys from './data/Monkeys';
import { FontAwesome5 } from '@expo/vector-icons';
const bgs = Monkeys.default;
const StoryCard = ({ navigation, lang }) => {
  const startAnimation = () => {
    navigation.navigate('INTERVIEW SIMULATOR (Quiz)', params = {
      lang: 'REACT',
      difficulty: 'JUNIOR', skin: 'currentSkin'
    })
  }
  return (
    <SafeAreaView style={{
      height: 230,width:300,  borderRadius:2,
    borderColor: "red",
    borderWidth: 6
    }}>
    <View style={styles.message}>
        <Text style={styles.sliderText}>
          <FontAwesome name="university" size={30} color="black" />
          {"\n"}
          STORY PROGRESS
        </Text>

        <ProgressBar
          style={{
            height: 15,
            width: 260,
            padding: 5,
            borderRadius: 6
          }}
          progress={5 / 10}
          color='green'
        />
      </View>
      <ProgressBar
        style={{
          height: 15,
          width: 260,
          padding: 5,
          borderRadius: 6
        }}
        progress={Math.random() * 9 / 10}
        color='red'
      />
      <ScrollView horizontal={true} fadingEdgeLength={5}  >
      
        <View style={[styles.row, {
          color: 'green',
          flexDirection: "row",
        }]}>
   
          <TouchableWithoutFeedback onPress={startAnimation}>
            <View style={[styles.messageRow, {
              color: 'green',
            }]}>


              <Text style={{ color: 'red' }}><Ionicons name="game-controller-sharp" size={24} color="black" />  {"\n"}EASY </Text>

              <Image
                source={{
                  uri: bgs[Math.floor(Math.random() * bgs.length)],
                }}
                style={styles.imageIcon}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={[styles.messageRow, {
            color: 'green'
          }]}>
            <Text style={{ color: 'red' }}><FontAwesome name="lightbulb-o" size={24} color="black" />  {"\n"}MEDIUM </Text>
            <Image
              source={{
                uri: bgs[Math.floor(Math.random() * bgs.length)],
              }}
              style={styles.imageIcon}
            />
          </View>


          <View style={[styles.messageRow, {
            color: 'green'
          }]}>
            <Text style={{ color: 'red' }}>
              <FontAwesome name="lightbulb-o" size={24} color="black" />
              {"\n"}
              SINIOR
            </Text>
            <Image
              source={{
                uri: bgs[Math.floor(Math.random() * bgs.length)],
              }}
              style={styles.imageIcon}
            />
          </View>
          <View style={[styles.messageRow, {
            color: 'green'
          }]}>
            <Text style={{ color: 'red' }}>
              <FontAwesome5 name="brain" size={24} color="red" />
              {"\n"}
              SINIOR
            </Text>
            <Image
              source={{
                uri: bgs[Math.floor(Math.random() * bgs.length)],
              }}
              style={styles.imageIcon}
            />
          </View>
          <View style={[styles.messageRow, {
            color: 'red'
          }]}>
            <Text style={{ color: 'red' }}>
              <FontAwesome5 name="brain" size={24} color="red" />
              {"\n"}
              SINIOR
            </Text>
            <Image
              source={{
                uri: bgs[Math.floor(Math.random() * bgs.length)],
              }}
              style={styles.imageIcon}
            />
          </View>

        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageIcon: {
    resizeMode: "stretch",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderColor: "#effdd1",
    borderWidth: 6
  },
  messageRow: {
    flexDirection: "row",
    height: 120,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    borderColor: "blue",
    resizeMode: "stretch",
    padding: 5,
      margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 6
  },
  row: {
    padding: 5,
    margin:5,
    fontWeight: 'bold',
  }
});

export default StoryCard;
