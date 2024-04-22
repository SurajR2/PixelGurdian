import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const RegisterPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TouchableOpacity style={styles.googleButton}>
        <AntDesign name="google" size={24} color="#FFFFFF" />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <View style={styles.separator}>
        <Text style={styles.separatorText}>OR</Text>
      </View>
      <View>
        <Text>Full Name </Text>
        <View style={styles.textfield}>
          <AntDesign name="name" size={20} color="black" />
          <TextInput style={styles.input} placeholder="Enter your Full Name" />
        </View>
      </View>

      <View>
        <Text>Email Address</Text>
        <View style={styles.textfield}>
          <AntDesign name="mail" size={20} color="black" />
          <TextInput style={styles.input} placeholder="Enter your email" />
        </View>
      </View>

      <View>
        <Text>Password</Text>
        <View style={styles.textfield}>
          <AntDesign name="lock" size={20} color="black" />
          <TextInput
            name="password"
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.passwordVisibilityButton}
          >
            <Feather
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text>Confirm Password</Text>
        <View style={styles.textfield}>
          <AntDesign name="lock" size={20} color="black" />
          <TextInput
            name="confirmPassword"
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.passwordVisibilityButton}
          >
            <Feather
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  textfield: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 20,
    width: "100%",
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    width: "80%",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#6d31ed",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  separatorText: {
    marginHorizontal: 10,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DB4437",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 10,
  },
});

export default RegisterPage;
