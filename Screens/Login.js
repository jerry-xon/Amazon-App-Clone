import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./Home";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation.replace("Main");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    checkLoginStatus();
  }, []);
  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8000/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.replace("Main");
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid Email");
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={styles.ScreenBG}>
      <View>
        <Image
          style={styles.Amazonlogo}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={styles.longincontainer}>
          <View style={styles.logintextcontainer}>
            <Text style={styles.Logintext}>Login In to your Account</Text>
          </View>
          <View style={styles.deatilscontainer}>
            <View style={styles.logindetails}>
              <MaterialIcons name="email" size={24} color="gray" />
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="enter your Email"
                placeholderTextColor={"#959595"}
                style={styles.detailsinput}
              />
            </View>
            <View style={styles.logindetails}>
              <AntDesign name="lock" size={24} color="gray" />
              <TextInput
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                placeholder="enter your Password"
                placeholderTextColor={"#959595"}
                style={styles.detailsinput}
              />
            </View>
          </View>
        </View>

        <View style={styles.loginbuttonspacing}>
          <View style={styles.forgotpassword}>
            <Text style={styles.loggedinText}>Keep me logged in</Text>
            <Text style={styles.forgotpasswordText}>Forgot Password?</Text>
          </View>
          <View>
            <Pressable onPress={handleLogin}
              style={styles.loginbutton}>
              <Text style={styles.loginbuttontext}>Login</Text>
            </Pressable>
            <Pressable style={styles.donthaveaccount} onPress={() => navigation.navigate("Register")}>
              <Text style={styles.donthaveaccountText}>Dont't have an account? Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  ScreenBG: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  Amazonlogo: { width: 150, height: 100 },
  Logintext: {
    fontSize: 20,
    fontWeight: "500",
    color: "#041E42",
  },
  longincontainer: {
    rowGap: 112,
  },
  logindetails: {
    flexDirection: "row",
    columnGap: 12,
    padding: 12,
    backgroundColor: "#D0D0D0",
    width: 350,
    alignItems: "center",
    borderRadius: 4,
  },
  detailsinput: {
    paddingVertical: 8,
    fontSize: 16,
  },
  forgotpassword: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  logintextcontainer: {
    alignItems: "center",
  },
  forgotpasswordText: {
    color: "#007FFF",
    fontWeight: "500",
  },
  loggedinText: {
    fontWeight: "500",
  },
  loginbutton: {
    backgroundColor: "#f0c14b",
    width: 350,
    height: 40,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  loginbuttonspacing: {
    rowGap: 12,
  },
  loginbuttontext: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  deatilscontainer: { alignItems: "center", rowGap: 20 },
  donthaveaccount: {
    alignItems: "center",
    padding: 12,
  },
  donthaveaccountText: {
    fontWeight: "500",
    color: "#959595",
    fontSize: 16
  }
});
