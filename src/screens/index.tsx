import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './Screens.types';

import Cities from 'screens/Cities';
import Detail from 'screens/Detail';
import Search from 'screens/Search';
import NavBar from 'components/NavBar/NavBar';

const Stack = createStackNavigator<RootStackParamList>();

export const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Cities"
          component={Cities}
          options={{
            header: () => <NavBar title="Cidades" />,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
