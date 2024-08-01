import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { categories } from "../Data/Categories";

const Home = () => {
  return (
    <SafeAreaView style={styles.ScreenBG}>
      <View style={styles.searchbarcontainer}>
        <Pressable style={styles.searchbar}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            placeholder="Search Amazon.in"
            placeholderTextColor="#959595"
          />
        </Pressable>
        <Feather name="mic" size={24} color="black" />
      </View>
      <ScrollView>
        <View style={styles.deliveryaddress}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.deliveryaddresstext}>
            Deliver To Jayesh - Udaipur 313001
          </Text>
          <Entypo name="chevron-small-down" size={24} color="black" />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((item, i) => (
            <View style={styles.categoryitemcontainer}>
              <Pressable
                key={i}
                onPress={() => console.log("Item")}
                style={styles.Categoryimageandtext}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.categoryimage}
                />
                <Text>{item.name}</Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchbar: {
    padding: 4,
    backgroundColor: "white",
    borderRadius: 4,
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    columnGap: 4,
    paddingHorizontal: 8,
    flex: 1,
  },
  ScreenBG: {
    flex: 1,
    backgroundColor: "white",
  },
  searchbarcontainer: {
    padding: 12,
    backgroundColor: "#00CED1",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  deliveryaddress: {
    padding: 12,
    backgroundColor: "#AFEEEE",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  deliveryaddresstext: {
    fontSize: 14,
    fontWeight: "500",
  },
  categoryimage: {
    height: 60,
    width: 60,
    resizeMode:'contain'
  },
  categoryitemcontainer: {
    padding: 12,
    textAlign: "center",
  },
  Categoryimageandtext: { justifyContent: "center", alignItems: "center" },
});
