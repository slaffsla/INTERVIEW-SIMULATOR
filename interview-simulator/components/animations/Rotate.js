import React, { Component } from "react";
import { StyleSheet, View,Image, Animated, TouchableWithoutFeedback ,Text} from "react-native";

export default class Rotate extends Component {
 constructor(props) {
        super(props);

 }
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 700,
    }).start(() => {
       this.props.onRecteate(1)
      this.state.animation.setValue(0);
    });
  }
  
  render() {

    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"],
      //outputRange: ["0deg", "180deg"],
      // outputRange: ["0deg", "-360deg"],
      // outputRange: ["0deg", "1080deg"],
    });

    const animatedStyles = {
      transform: [
        { rotate: rotateInterpolate },
        // { rotateX: rotateInterpolate },
        // { rotateY: rotateInterpolate },
      ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Image
                style={[styles.rotateBtn,
                {position: 'absolute' ,  opacity: 0.9 ,width:150,height:150}]}
                source={require("../../assets/icons/roundBtn.png")}
              />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
    rotateBtn: {
    resizeMode: "stretch",
    position: 'absolute',
    borderColor: 'rgba(0, 0, 0, 0.69)',
    width: 150,
    margin: 15,
    opacity: 0.8,
    padding: 15,
    borderWidth: 12,
    height: 150,
    borderRadius: 150 / 2,
    zIndex: 9
  },
  box: {
    width: 40,
    height: 40,
     borderRadius: 40 / 2,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  }
});
