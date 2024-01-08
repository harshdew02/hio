import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../components/TopBar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function LoaderEffect() {
    return (
        <SafeAreaView className="bg-white" style={{ height: hp(100) }}>

            <TopBar />

            <Image className="mr-8" source={require('../../assets/images/loader.gif')} style={{ height: hp(28), width: wp(100), marginTop: hp(25) }} />

            <View className="flex-row justify-around">
                <Text style={styles.text}>
                    Relax while we setup your Personalised Wellbeing Dashboard
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    text: {
        color: '#043953',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: '700',
        lineHeight: 24,
        wordWrap: 'break-word',
        width: wp(80),
        marginTop: 8
    }

})