import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteName } from './route-name';

import { HomeScreen, LoginScreen, SignUpScreen, WelcomeScreen } from '@/screens';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouteName.Welcome}>
        <Stack.Screen name={RouteName.Home} options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name={RouteName.Welcome} options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name={RouteName.Login} options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name={RouteName.SignUp} options={{ headerShown: false }} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
