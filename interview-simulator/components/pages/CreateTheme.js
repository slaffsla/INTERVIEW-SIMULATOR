import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  useWindowDimensions,
  ImageBackground
} from "react-native";
import TopMenuBar from "../TopMenuBar";
import ftwColors from '../data/ColorsFTW';
import bgImages from '../data/imagesUris';
import Constants from "expo-constants";
import firebase from "../config/firebase";
import { AntDesign, Feather } from "@expo/vector-icons";
import uplodImageFromDevice from "../uploadImageFromDevice";
import getBlobFromUri from "../getBlobFromUri";
import manageFileUpload from "../manageFileUpload";
  const ftwBorders = ftwColors.backgrounds;
  const ftwSlider = ftwColors.skinSlider;
export default function CreateTheme({ navigation, calculatedScore, globalSkin, difficulty }) {
  const [imgURI, setImageURI] = React.useState(null);
  const [isUploading, setIsUploading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [remoteURL, setRemoteURL] = React.useState("");

  const [error, setError] = React.useState(null);
  const { width } = useWindowDimensions();

  const handleLocalImageUpload = async () => {
    const fileURI = await uplodImageFromDevice();

    if (fileURI) {
      setImageURI(fileURI);
    }
  };

  const onStart = () => {
    setIsUploading(true);
  };

  const onProgress = (progress) => {
    setProgress(progress);
  };
  const onComplete = (fileUrl) => {
    setRemoteURL(fileUrl);
    setIsUploading(false);
    setImageURI(null);
  };

  const onFail = (error) => {
    setError(error);
    setIsUploading(false);
  };
  const handleCloudImageUpload = async () => {
    if (!imgURI) return;

    let fileToUpload = null;

    const blob = await getBlobFromUri(imgURI);

    await manageFileUpload(blob, { onStart, onProgress, onComplete, onFail });
  };

  return (
    <>
        <ImageBackground
        style={styles.bgimage}
        backgroundColor={ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}
        source={{
          uri:'https://i.postimg.cc/gkwTmtjK/RNFetch-Blob-Tmp-4gw9bd1gyqo1yevppk44p7.png'
        }}
      >

    <View style={styles.container}>
      <Text style={styles.heading}>Attach and upload image</Text>
      {Boolean(imgURI) && (
        <View>
          <Image
            source={{ uri: imgURI }}
            resizeMode="contain"
            style={{ width, height: width }}
          />
        </View>
      )}

      {!isUploading && (
        <View style={styles.row}>
          <AntDesign
            name="addfile"
            size={36}
            color={imgURI ? "green" : "black"}
            onPress={handleLocalImageUpload}
          />

          {Boolean(imgURI) && (
            <Feather
              name="upload-cloud"
              size={36}
              color="black"
              onPress={handleCloudImageUpload}
            />
          )}
        </View>
      )}

      {isUploading && (
        <View style={styles.uploadProgressContainer}>
          <Text> Upload {progress} of 100% </Text>
        </View>
      )}

      {Boolean(remoteURL) && (
        <View style={{ paddingVertical: 20 }}>
          <Text>
            Image has been uploaded at
            <Text style={{ color: "blue" }}> {remoteURL} </Text>
          </Text>
        </View>
      )}
    </View>
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 10,
    margin:10
  },
  bgimage: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "rgba(94, 214, 105, 0.42)",
    textAlign: 'center',
    opacity: 0.8,
    margin: 0,
    resizeMode: 'stretch',
  },
  row: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  uploadProgressContainer: {
  },
  heading: {
    margin: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});
