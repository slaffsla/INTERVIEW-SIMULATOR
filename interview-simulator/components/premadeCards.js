
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome, FontAwesome5, AntDesign, Fontisto } from '@expo/vector-icons';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FtwMessageBoxComponent from './FtwMessageBox';
import FtwTextComponent from './FtwText';
import Monkeys from './data/Monkeys';
const bgs = Monkeys.default;
const DifficultySelector = ({ navigation, lang }) => {

  return (
    <SafeAreaView style={{ height: 100 }}>
      <ScrollView horizontal={true} fadingEdgeLength={5} x={20} >
        <View style={[styles.row, {
          color: 'green',
          flexDirection: "row",
        }]}>

          <View style={[styles.messageRow, {
            color: 'green',
          }]}>
            <Text style={{ color: 'red' }}><FontAwesome name="lightbulb-o" size={24} color="black" />  {"\n"}EASY </Text>
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
            <Text style={{ color: 'red' }}><FontAwesome5 name="cogs" size={24} color="black" />  {"\n"}MEDIUM </Text>
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
    borderWidth: 3
  },
  messageRow: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    borderColor: "red",
    resizeMode: "stretch",
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 3
  },
  row: {
    padding: 5,
    fontWeight: 'bold',
  }
});

export default DifficultySelector;
