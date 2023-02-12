import * as React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Video,YoutubePlayer, AVPlaybackStatus } from 'expo-av';


export default function VideoAvatar() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: 'https://yloqlw.am.files.1drv.com/y4mRlJGvECawm51riOuNSXOaDlpXGC1CEXiGWo95PBE8ujRgQ8ulklBTDXuSSHfP9XmUfVIW4xGStjsfMReb4LhTWwdMVXe1PeUg4uj7Mc9JaB8FLBBi1g0dpBjvUWtr234X85eKJeSD3foTnvKAaquC9fR1GSkM9XFbI0Bqi4y8uVaNUOeAgcsHHRlbi1Uk7YkwuFhbCcCxlLAgnKxeHVTdQ?',
      }}
      useNativeControls
      shouldPlay={true}
      isLooping={true}
      resizeMode="stretch"
    />
  );
}

const styles = StyleSheet.create({
  video: {
    width: 300,
    height: 280,
    resizeMode: 'stretch',
    borderRadius: 4,
    borderWidth: 4,
    alpha: 0.7,
    backgroundColor: "black",
    borderColor: 'red'
  }
});
