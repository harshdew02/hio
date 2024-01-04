import { View, Text , SafeAreaView} from 'react-native'
import React from 'react'
import TopBar from '../components/TopBar'

export default function ProfileScreen() {
  return (
    <SafeAreaView>
    <TopBar/>


    <Text className ="mt-[150px]">
        Profile
    </Text>

  </SafeAreaView>
  )
}