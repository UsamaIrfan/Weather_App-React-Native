import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import About from '../screens/About'
import Contact from '../screens/Contact'

const Stack = createStackNavigator();

function Navigation() {

   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Contact" component={Contact} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default Navigation
