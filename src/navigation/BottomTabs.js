import * as React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Icons
import { HomeIcon, MegaphoneIcon,SpeakerWaveIcon, ChatBubbleBottomCenterIcon, PhoneIcon } from "react-native-heroicons/solid";


// Screens
import DiscoverScreen from "../screens/DiscoverScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";


// Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window")

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        background: "#fff"
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
            <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <HomeIcon size={wp(5)} color={focused ? "#16247d" : "#9e9d9d"} />
                                    <Text style={{ fontSize: 8 }} color={focused ? "#16247d" : "#9e9d9d"}>HOME</Text>
                                </View>
                            )
                        }
                    }}
                />

                <Tab.Screen
                    name="Discover"
                    component={DiscoverScreen}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                // <TouchableOpacity>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    {/* <Entypo name="wallet" size={24} color={focused ? "#16247d": "#9e9d9d"} /> */}
                                    {/* <MaterialIcons name="campaign" size={30} color={focused ? "#16247d" : "#9e9d9d"} /> */}
                                    <MegaphoneIcon size={wp(5)} color={focused ? "#16247d" : "#9e9d9d"} />
                                    <Text style={{ fontSize: 8 }} color={focused ? "#16247d" : "#9e9d9d"}>DISCOVER</Text>
                                </View>
                                //  </TouchableOpacity>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                // <TouchableOpacity>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    {/* <MaterialCommunityIcons name="robot" size={30} color={focused ? "#16247d" : "#9e9d9d"} /> */}
                                    <ChatBubbleBottomCenterIcon size={wp(5)} color={focused ? "#16247d" : "#9e9d9d"} />
                                    <Text style={{ fontSize: 8 }} color={focused ? "#16247d" : "#9e9d9d"}>PROFILE</Text>
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