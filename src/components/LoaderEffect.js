import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LottieView from "lottie-react-native";

export default function LoaderEffect() {
  return (
    <SafeAreaView className="bg-white" style={{ height: hp(100) }}>
      <TopBar />
      {/* <LottieView
        source={require()}
        style={styles.animation}
        // autoPlay
      /> */}
      <Image
        className="mr-8"
        source={require("../../assets/images/loader.gif")}
        style={{ height: hp(28), width: wp(100), marginTop: hp(24) }}
      />

      <View className="flex-row justify-around">
        <Text style={styles.text1}>
          Relax while we setup your Personalised Wellbeing Dashboard
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text1: {
    color: "#043953",
    fontSize: hp(2),
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: hp(3),
    width: wp(80),
    paddingVertical: hp(2),
    marginTop: hp(2),
  },
  animation: {
    width: 100,
    height: 100,
  },
});