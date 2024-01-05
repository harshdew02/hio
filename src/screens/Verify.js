import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import TopBar from "../components/TopBar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Dropdown } from "react-native-element-dropdown";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

const verifyOTP = (mobile, Token, otp, navigation) => {
  const apiUrl = "https://heartitout.in/welcome/wp-json/check_details/v1";

  try {
    const requestData = {
      mob: mobile,
      token: Token,
      otp: otp,
    };

    axios.post(apiUrl, requestData).then((res) => {
      if (res.data.Status == "Get_Details") {
        navigation.navigate("main");
        // AsyncStorage.setItem("token", Token).then((value) => {
        //   console.log(value);
        // });
        //Tokenization here
      } else if (res.data.Status == "Success") {
        // AsyncStorage.setItem("token", Token);
        navigation.navigate("main");
        //Tokenization here
      } else {
        console.log("wrong otp received");
      }
    }).catch((err)=>{
      console.log(err)
    });
  } catch (error) {
    console.error("Error requesting OTP:", error.message);
  }
};

export default function Verify({ navigation, route }) {
  const [value, setValue] = useState("91");

  // const navigation = useNavigation();

  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView>
      <TopBar />
      <ScrollView>
        <View style={styles.box}>
          <View className="bg-[#EAF7FC]" style={styles.vect}></View>
          <View className="flex-col justify-end" style={{ height: hp(45) }}>
            <Image
              className="mt-8"
              style={styles.display}
              source={require("../../assets/images/display.png")}
            />
          </View>
          <View style={{ height: hp(10) }}></View>
        </View>

        <View
          className="flex-col items-center mt-12 justify-between"
          style={{ height: hp(40) }}
        >
          <Text className="text-[#01818C] text-2xl font-bold">
            Your Wellbeing Comes First!
          </Text>
          {/* <View className="flex-col items-center">
            <Text className="text-base">
              Get instant one-click appointments
            </Text>
            <Text className="text-base">
              track your wellbeing journey, access
            </Text>
            <Text className="text-base">session notes, and more.</Text>
            <Text className="text-base font-bold">All in one place!</Text>
          </View> */}

          <Text className="text-[22px] font-[700]">Enter Your OTP</Text>

          <View
            className="flex-row justify-around items-center mt-8"
            style={{ width: wp(85) }}
          >
            <TextInput
              className="rounded-lg"
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Enter OTP"
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity
            className="bg-[#32959D] rounded-full py-3 mt-8 items-center"
            style={{ height: hp(7), width: wp(80) }}
            onPress={() => {
              // await verifyOTP("91","9399435543",);
              verifyOTP(
                route.params.mobile,
                route.params.Token,
                number,
                navigation
              );
            }}
            // onPress={()="">{} }
          >
            <Text className="text-[22.48px] text-white">Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  vect: {
    width: "150%",
    height: "95%",
    background: "#EAF7FC",
    borderBottomRightRadius: 350,
    borderBottomLeftRadius: 350,
    position: "absolute",
  },
  box: {
    // overflow: 'hidden',
    alignItems: "center",
    height: hp(40),
    width: wp(100),
    // backgroundColor: 'red'
  },
  display: {
    width: wp(60),
    height: wp(61),
  },
  input: {
    height: hp(7),
    width: wp(70),
    borderWidth: 1,
    padding: 10,
  },
  dropdown: {
    marginTop: 7,
    height: hp(7),
    width: wp(20),
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 10,
    left: 0,
    zIndex: 3,
    position: "absolute",
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
