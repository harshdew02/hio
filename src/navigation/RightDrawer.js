import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";


// Drawer
import BottomTabs from "./BottomTabs";
// import { Help, Profile, SelectLang, Settings } from "../drawer";
import {
    ChevronUpDownIcon,
    Cog6ToothIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    UserIcon,
} from "react-native-heroicons/outline";

const Drawer = createDrawerNavigator();

export default function RightDrawer() {

    

    const DrawerHeaderContent = (props) => {
        return (
            <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
                <View
                    style={{
                        backgroundColor: "#4f4f4f",
                        height: 100,
                        justifyContent: "center",
                        alignItems: "center",
                        top: -5,
                    }}
                >
                    <Text style={{ color: "#fff" }}>Home</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        );
    };

    return (
        <>
            <Drawer.Navigator

            initialRouteName="BottomBar"
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: "#fff",
                    },
                    drawerPosition: 'right'
                }}
                drawerContent={DrawerHeaderContent}
            >
                <Drawer.Screen
                    name={"BottomBar"}
                    component={BottomTabs}
                    options={{
                        drawerLabel: "Home Screen",
                        drawerIcon: ({ focused, size, color }) => (
                            // <MaterialCommunityIcons name="home" color={color} size={size} />
                            <HomeIcon color={color} size={size} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </>
    )
}