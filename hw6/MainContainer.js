import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-ionicons";

//screens
import  { Games } from "./screens/Games";
import { Account } from "./screens/Settings";
import { SignIn } from "./screens/Login";
import { Home } from "./screens/Home";
import { Ionicons } from "@expo/vector-icons";

//screen Names

const homeName = 'Home';
const gameName = 'Games';
const settingsName = 'Settings';
const LoginName = 'Login';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName={LoginName
            }
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName){
                        iconName = focused ? 'home' : "home-outline";
                    }
                    if (rn === settingsName){
                        iconName = focused ? 'settings' : "settings-outline";
                    }
                    if (rn === gameName){
                        iconName = focused ? 'game-controller' : "game-controller-outline";
                    }


                    return <Ionicons name = {iconName} size = {24} color = {'pink'}/>

                }

               

            })}
            
           
            
            
            >

            
            <Tab.Screen name={homeName} component = {Home} />
            <Tab.Screen name={gameName} component = {Games} />
            <Tab.Screen name={settingsName} component = {Account} />
            <Tab.Screen name = {LoginName} component = {SignIn} />


            </Tab.Navigator>

        </NavigationContainer>
    );
}
