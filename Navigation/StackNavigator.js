import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../Screens/Register";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#008E907" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (<Entypo name="home" size={24} color="#008E907" />) : (<AntDesign name="home" size={24} color="black" />)
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#008E907" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (<Ionicons name="person" size={24} color="#008E907" />) : (<Ionicons name="person-outline" size={24} color="black" />)
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Home}
          options={{
            tabBarLabel: "Cart",
            tabBarLabelStyle: { color: "#008E907" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (<AntDesign name="shoppingcart" size={24} color="#008E907" />) : (<AntDesign name="shoppingcart" size={24} color="" />)
          }}
        />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
