import React, { useState, useEffect, useCallback } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Video, YoutubePlayer, AVPlaybackStatus } from 'expo-av';
import Monkeys from './data/Monkeys';
import ColorsFTW from './data/ColorsFTW';
import Checkbox from 'expo-checkbox';
export default function WebCamView() {
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
   const [isChecked, setChecked] = useState(true);
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (

      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>

    );
  }
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }


  return (
    <>
      <View style={styles.container}>
        {isChecked && (
          <Camera style={styles.camera} type={type} >
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                <Text style={styles.text}>Flip Camera</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        )}
      </View>
       <View style={styles.section}>
        <Checkbox style={styles.checkbox}  value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}> ON/OFF</Text>
      </View>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    zindex: 0,
    width:150,
  },
    text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'orange',
  },
  camera: {
    flex: 1,
    width: 100,
    height: 100,
    top: 10,
    position: "absolute",
    borderColor: "white",
    left: -190,
    zindex: 0
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },

   section: {
    flexDirection: 'row',
    alignItems: 'center',
      flex: 1,
    width: 120,
    height: 40,
    borderRadius:4,
    position: "absolute",
    borderColor: "rgba(1, 0, 4, 0.84)",
    left: -180,
    padding:5,
    zindex: 5
  },
  paragraph: {
    fontSize: 15,
    color:'orange'
  },
  checkbox: {
    margin: 8,
  }
});
