//Example of Pinch to Zoom Image in React Native
//https://aboutreact.com/react-native-pinch-to-zoom-image/

//import React in our code
import React from 'react';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View } from 'react-native';

//import ImageViewer which will help us to zoom Image
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageSlider = () => {
  const images = [
    {
      url:
        'https://i.postimg.cc/SQtTm6Zb/RNFetch-Blob-Tmp-bx13kttgno6cpoa59ep9uv.png',
    },
    {
      url:
        'https://i.postimg.cc/SQtTm6Zb/RNFetch-Blob-Tmp-bx13kttgno6cpoa59ep9uv.png',
    },
  ];

  return (

      <View style={styles.container}>
        <ImageViewer imageUrls={images} renderIndicator={() => null} />
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:90
  },
});

export default ImageSlider;
