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
import LoaderEffect from "../components/LoaderEffect";


export default function AppNavigation() {

    
    const Stack = createNativeStackNavigator();
    const [front, setFront] = React.useState('LoginPage')

    // React.useEffect(() => {
    //     const byPass = async () => {
    //         let token = await AsyncStorage.getItem("token", (data) => {
    //             console.log(data);
    //           });
    //           if (token == null || token == undefined) {
    //             // setFront('main')
    //           } else setFront('main')
    //     }
    //     byPass();
    //     // console.log(token)
    // }, [])
    
    return (
        <NavigationContainer>
            <Stack.Navigator
                // initialRouteName={`${front}`}
                initialRouteName="LoginPage"
                screenOptions={{ headerShown: false,
                contentStyle:{
                    backgroundColor:'#FFFFFF'
                }
                }}
            >
                <Stack.Screen name="loader" component={LoaderEffect}/>
                <Stack.Screen name="verifyPage" component={Verify} />
                <Stack.Screen name="main" component={RightDrawer} />
                <Stack.Screen name="LoginPage" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}