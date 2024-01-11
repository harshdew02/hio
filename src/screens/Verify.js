import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  TextInput,
  ActivityIndicator,
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
import LoaderEffect from "../components/InitLoaderEffect";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

const verifyOTP = (mobile, Token, otp, navigation, [loading, setLoading]) => {
  const apiUrl = "https://heartitout.in/welcome/wp-json/check_details/v1";

  try {
    const requestData = {
      mob: mobile,
      token: Token,
      otp: otp,
    };

    axios
      .post(apiUrl, requestData)
      .then(async (res) => {
        if (res.data.Status == "Get_Details") {
          // await AsyncStorage.setItem("token", Token);
          navigation.navigate("registerPage");
        } else if (res.data.Status == "Success") {
          await AsyncStorage.setItem("token", Token);
          navigation.navigate("main");
        } else {
          console.log("wrong otp received");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  } catch (error) {
    console.log("Error requesting OTP:", error.message);
    setLoading(false);
  }
};

const requestOTP = async (mobile, [loading, setLoading]) => {
  const apiUrl = "https://heartitout.in/welcome/wp-json/otp_signup_process/v2";

  try {
    const requestData = {
      ch: "send_otp",
      mob: mobile,
    };
    if (mobile.length < 10) throw new Error("Mobile number is too short");

    axios
      .post(apiUrl, requestData)
      .then((res) => {
        if (res.data.Status == "Success") setLoading(false);
        else console.log("Error:" + res.data.Status);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  } catch (error) {
    console.log("Error requesting OTP:", error.message);
    setLoading(false);
  }
};

import Logo4 from "../../assets/images/verifyDisplay.svg";
import Back from "../../assets/images/arrow.svg";

export default function Verify({ navigation, route }) {
  const [value, setValue] = useState("91");
  const [otp, setOtp] = useState(false);
  const [loading, setLoading] = useState(false);

  navigation.addListener("focus", (ref) => {
    setLoading(false);
    setOtp(false);
  });

  // const navigation = useNavigation();

  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView>
      <TopBar />
      <ScrollView>
        <View style={styles.box}>
          <TouchableOpacity style={{ position: "absolute", left: wp(8) }} onPress={()=>{navigation.navigate('LoginPage')}}>
            <Back width={wp(8.5)} height={wp(8.5)} />
          </TouchableOpacity>
          <Logo4 width={wp(46)} height={wp(37)} style={{ marginTop: hp(2) }} />
        </View>

        <View style={{ marginTop: hp(4) }} className="flex-col items-center">
          <Text style={styles.enterphone}>Verification Code</Text>

          <Text style={styles.getinstant}>
            We have sent the code verification to your Phone Number
          </Text>

          <Text style={styles.mob}>+{route.params.mobile}</Text>

          <TextInput
            className="rounded-lg"
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter OTP"
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // await verifyOTP("91","9399435543",);
              setLoading(true);
              verifyOTP(
                route.params.mobile,
                route.params.Token,
                number,
                navigation,
                [loading, setLoading]
              );
            }}
          >
            <Text style={styles.textStyle}>Verify OTP</Text>
          </TouchableOpacity>

          <View className="flex-row" style={styles.resend}>
            <Text style={styles.check}>Haven’t received an OTP? </Text>
            <TouchableOpacity
              onPress={() => {
                setLoading(true);
                requestOTP(route.params.mobile, [loading, setLoading]);
              }}
            >
              <Text style={styles.check1}>RESEND OTP</Text>
            </TouchableOpacity>
          </View>

          <ActivityIndicator animating={loading} size="large" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  enterphone: {
    // Enter your Phone Number
    color: "#043953",
    fontSize: wp(5),
    fontFamily: "Roboto",
    fontWeight: "700",
  },

  getinstant: {
    width: wp(84),
    // hp(6)
    color: "#455A64",
    fontSize: wp(4),
    fontFamily: "Roboto",
    textAlign: "center",
    fontWeight: "400",
    lineHeight: wp(6),
    marginTop: hp(2),
  },

  mob: {
    color: "#043953",
    fontSize: wp(4),
    fontFamily: "Roboto",
    fontWeight: "700",
    marginTop: hp(2),
  },

  box: {
    // overflow: 'hidden',
    alignItems: "center",
    marginTop: hp(13),
    // backgroundColor: 'red'
  },
  input: {
    height: hp(7),
    width: wp(70),
    borderWidth: 1,
    padding: 10,
    marginTop: hp(3),
  },

  button: {
    height: hp(7.3),
    width: wp(82),
    marginTop: hp(4),
    backgroundColor: "#32959D",
    borderRadius: wp(10),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  textStyle: {
    textAlign: "center",
    color: "white",
    fontSize: wp(5),
    fontFamily: "Roboto",
    fontWeight: "500",
  },

  resend: {
    marginTop: hp(3),
    marginBottom: hp(10),
  },

  check: {
    color: "#455A64",
    fontSize: wp(3.4),
    fontFamily: "Roboto",
    fontWeight: "400",
  },

  check1: {
    color: "#043953",
    fontSize: wp(3.4),
    fontFamily: "Roboto",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
