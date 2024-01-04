import * as React from "react";

// Screens
import Login from "../screens/Login";

// Navigators
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Type
import RightDrawer from "./RightDrawer";
import BottomTabs from "./BottomTabs";


export default function AppNavigation() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="main"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="main" component={RightDrawer} />
                <Stack.Screen name="LoginPage" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}