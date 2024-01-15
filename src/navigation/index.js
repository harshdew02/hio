import * as React from "react";

// Screens
import Login from "../screens/Login";

// Navigators
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Type
import RightDrawer from "./RightDrawer";
import BottomTabs from "./BottomTabs";
import Verify from "../screens/Verify";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoaderEffect from "../components/InitLoaderEffect";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: '#FFFFFF'
          },
          headerShown: false
        }}
        initialRouteName={'LoginPage'}
        // initialRouteName={'loader'}

      >
        <Stack.Screen name="loader" component={LoaderEffect} />
        <Stack.Screen name="main" component={RightDrawer} />
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="verifyPage" component={Verify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
