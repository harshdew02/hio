import { View, Text , SafeAreaView} from 'react-native'
import React from 'react'
import TopBarMain from '../components/TopBarMain'

export default function ProfileScreen() {
  return (
    <SafeAreaView>
    <TopBarMain/>


    <Text className ="mt-[150px]">
        Profile
    </Text>

  </SafeAreaView>
  )
}