import * as React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Icons
import { MegaphoneIcon, SpeakerWaveIcon, ChatBubbleBottomCenterIcon, PhoneIcon } from "react-native-heroicons/solid";





// Screens
import DiscoverScreen from "../screens/DiscoverScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";


// Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SVGComponent from '../components/SVGcom';
import HomeIcon from '../components/HomeIcon.js';
import ProfileIcon from '../components/Profile.js';

const { width, height } = Dimensions.get("window")

const screenOptions = {

    contentStyle: {
        backgroundColor: '#FF0000'
    },
    headerShown: false,

    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        // elevation: 4,
        height: hp(9),

        shadowOpacity: 1,
        shadowRadius: 16.0,
        elevation: 4,
        // borderTopLeftRadius: 21,
        // borderTopRightRadius: 21,
        shadowColor: '#52006A',

        shadowOffset: {
            width: 0,
            height: 12,
        },
    }
}

export default function BottomTabs() {


    const [visible, setVisible] = React.useState(false);


    const Tab = createBottomTabNavigator();


    return (
        <View style={{
            width,
            height,
        }}>
            <Tab.Navigator initialRouteName='Home_Tab' screenOptions={screenOptions}>
                <Tab.Screen
                    name="Discover_Tab"
                    component={DiscoverScreen}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{ width: wp(16), alignItems: "center", justifyContent: "center" }}>
                                    <SVGComponent color={focused ? "#01818C" : "#455A64"} />
                                    <Text style={{
                                        fontFamily: 'Roboto',
                                        fontWeight: '700', fontSize: wp(3),
                                        color: focused ? "#01818C" : "#455A64"
                                    }} >Discover</Text>

                                    {/* <Text color={focused ? "#01818C" : "#455A64"} style={styles.discover} >Discover</Text> */}

                                </View>
                            )
                        }
                    }}
                />

                <Tab.Screen
                    name="Home_Tab"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                // <TouchableOpacity>
                                <View style={{ width: wp(16), alignItems: "center", justifyContent: "center" }}>
                                    <HomeIcon color={focused ? "#01818C" : "#455A64"} />
                                    <Text style={{
                                        fontFamily: 'Roboto',
                                        fontWeight: '700', fontSize: wp(3),
                                        color: focused ? "#01818C" : "#455A64"
                                    }} >Home</Text>
                                </View>
                                //  </TouchableOpacity>
                            )
                        },

                        headerShown: false,
                        presentation: 'modal',
                        animationTypeForReplace: 'push',
                        animation: 'slide_from_right'
                        // animation: 'flip'
                        // animation: 'none'
                        // animation: 'slide_from_right'

                    }}
                />
                <Tab.Screen
                    name="Profile_Tab"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                // <TouchableOpacity>
                                <View style={{ width: wp(16), alignItems: "center", justifyContent: "center", }}>
                                    <ProfileIcon color={focused ? "#01818C" : "#455A64"} />
                                    <Text style={{
                                        fontFamily: 'Roboto',
                                        fontWeight: '700', fontSize: wp(3),
                                        color: focused ? "#01818C" : "#455A64"
                                    }} >Profile</Text>
                                </View>
                                //  </TouchableOpacity>
                            )
                        }
                    }}
                />



            </Tab.Navigator>
        </View>
    )
}


const styles = StyleSheet.create({

});