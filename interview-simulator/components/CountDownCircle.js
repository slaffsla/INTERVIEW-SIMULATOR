import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function CountDownCircle({mode}) {
  return (
    <View style={styles.container}>
      
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
