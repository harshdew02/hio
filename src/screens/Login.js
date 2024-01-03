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

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const requestOTP = async (code,number) => {
  const apiUrl = "https://heartitout.in/welcome/wp-json/otp_signup_process/v2";

  try {
    const requestData = {
      ch: "send_otp",
      mob: code+number,
    };
    const response = await axios.post(apiUrl, requestData);
    console.log("OTP Request Response:", response.data);
  } catch (error) {
    console.error("Error requesting OTP:", error.message);
  }
};

const Login = () => {
  const [value, setValue] = useState(null);

  const [number, onChangeNumber] = React.useState("");
  return (
    <SafeAreaView>
      <TopBar />
      <ScrollView>
        <StatusBar
          backgroundColor={"#fff"}
          barStyle={"dark-content"}
          hidden={false}
        />

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
          <View className="flex-col items-center">
            <Text className="text-base">
              Get instant one-click appointments
            </Text>
            <Text className="text-base">
              track your wellbeing journey, access
            </Text>
            <Text className="text-base">session notes, and more.</Text>
            <Text className="text-base font-bold">All in one place!</Text>
          </View>

          <Text className="text-[22px] font-[700]">
            Enter your Phone Number
          </Text>

          <View
            className="flex-row items-center mt-8"
            style={{ width: wp(85) }}
          >
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              maxHeight={150}
              labelField="label"
              valueField="value"
              placeholder="+91"
              searchPlaceholder="Search..."
              value={value}
              onChange={(item) => {
                setValue(item.value);
              }}
            />

            <TextInput
              className="rounded-lg"
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Enter Your Phone Number"
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity
            className="bg-[#32959D] rounded-full py-3 mt-8 items-center"
            style={{ height: hp(7), width: wp(80) }}
            onPress={async () => {
              await requestOTP(number);
            }}
          >
            <Text className="text-[22.48px] text-white">Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 25,
    position: "absolute",
    right: 0,
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
