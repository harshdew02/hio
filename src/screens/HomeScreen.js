import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import TopBarMain from '../components/TopBarMain'
import { ScrollView } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
    <TopBarMain/>
    <ScrollView style={{backgroundColor: '#fff' , height: hp(100) }}>

    </ScrollView>

    <Text className ="mt-[150px]">
        Home LoginPage
    </Text>

  </SafeAreaView>
  )
}