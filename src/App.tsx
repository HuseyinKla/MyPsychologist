import React from 'react';
import {Dimensions} from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from './MainScreen';
import AllMessagesScreen from './AllMessagesScreen';


const Stack = createNativeStackNavigator()

const App = () => {

  const {height, width} = Dimensions.get('screen')


  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='MainScreen' component={MainScreen} options={{ headerShown: false,
          headerTitle: 'MyPsychologist',
          headerTitleStyle: {color: '#113946', fontSize: 18, fontWeight: '600'},
        }}/>        
        <Stack.Screen name='AllMessagesScreen' component={AllMessagesScreen} options={{ headerShown: false,
          headerTitle: 'MyPsychologist',
          headerTitleStyle: {color: '#113946', fontSize: 18, fontWeight: '600',},
        }}/>

      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App