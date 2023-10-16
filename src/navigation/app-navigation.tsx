import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteName } from './route-name';

import { HomeScreen, LoginScreen, SignUpScreen, WelcomeScreen } from '@/screens';
import useAuth from '@/shared/hooks/useAuth';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const user = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={RouteName.Home}>
          <Stack.Screen name={RouteName.Home} options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={RouteName.Welcome}>
          <Stack.Screen name={RouteName.Welcome} options={{ headerShown: false }} component={WelcomeScreen} />
          <Stack.Screen name={RouteName.Login} options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name={RouteName.SignUp} options={{ headerShown: false }} component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
