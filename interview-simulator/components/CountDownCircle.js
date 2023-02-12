import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import { useCountdown } from 'react-native-countdown-circle-timer'

export default function CountDownCircle({mode}) {
  const [isPlaying, setIsPlaying] = React.useState(mode)
    const [remainingTime, setRemainingTime] = React.useState(30)
useEffect(() => {
setIsPlaying(mode)
},[mode]);
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        size={80}
        isPlaying={isPlaying}
        duration={remainingTime}
        colors={["#66ff33", "#00cc00", "#ffff00", "#ff9933","#e60000","#cc0000"]}
        colorsTime={[15, 12, 9, 6,2,0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}
        updateInterval={0.5}
        initialRemainingTime={remainingTime}
    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 25 }}>
        {remainingTime}
        </Text>
      )}
    </CountdownCircleTimer>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    zIndex: 2,
    opacity: 0.9,
    top:-150,
    right:100,
    position:'absolute'
  }
});
