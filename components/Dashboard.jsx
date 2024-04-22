import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";
const Dashboard = () => {
  const [file, setFile] = useState("");
  const [error, setError] = useState(null);
  const [fileUri, setFileUri] = useState();

  const uploadImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("K garxas vai yesari kaha test hunxa app !! ");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        setFileUri(result.assets?.[0]?.uri);
      }
    }
  };

  const predictImage = async () => {
    const newImageUri = "file:///" + fileUri.split("file:/").join("");
    console.log(newImageUri);
    const formData = new FormData();
    formData.append("file", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop(),
    });
    try {
      const response = await fetch(
        "https://stupid-corners-retire.loca.lt/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        }
      );
      console.log(response);

      const data = await response.json();
      console.log(data); // Log the prediction data
    } catch (error) {
      console.log("My God Error Occured", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upload Image</Text>

      {/* Button to choose an image */}
      <TouchableOpacity style={styles.button} onPress={uploadImage}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>

      {/* Conditionally render the image  
            or error message */}
      {file ? (
        // Display the selected image
        <View style={styles.imageContainer}>
          <Image source={{ uri: fileUri }} style={styles.image} />
        </View>
      ) : (
        // Display an error message if there's
        // an error or no image selected
        <Text style={styles.errorText}>{error}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={predictImage}>
        <Text style={styles.buttonText}>Predict</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
});
