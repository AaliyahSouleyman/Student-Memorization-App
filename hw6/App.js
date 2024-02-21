import { StyleSheet } from 'react-native';
import {Home} from './screens/Home.js'
import {Account} from './screens/Settings.js'
import {SignIn} from './screens/Login.js'
import { Games } from './screens/Games.js';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {

  const Stack = createStackNavigator();
  return (
   
      //Stack navigator sets all of our routes
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={SignIn}

          />
          <Stack.Screen 
            name = 'Courses'
            component={Home}
          />
          <Stack.Screen 
            name = 'Game'
            component={Games}
          />
          <Stack.Screen 
            name = 'Settings'
            component={Account}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
