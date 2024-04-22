import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Image,
  View,
} from "react-native";

const LandingPage = ({ navigation }) => {
  const logo = require("../assets/logo.png");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.welcome}>Welcome !</Text>
        <Text style={styles.slogan}>Safeguarding the Truth in Every Pixel</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.buttonText}> Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 25,
  },
  logo: {
    width: 210,
    height: 130,
    margin: 4,
  },
  welcome: {
    fontSize: 40,
    fontWeight: "bold",
  },
  slogan: {
    color: "grey",
    fontWeight: "100",
    fontSize: 20,
  },
  button: {
    width: 350,
    height: 52,
    backgroundColor: "#6d31ed",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default LandingPage;
