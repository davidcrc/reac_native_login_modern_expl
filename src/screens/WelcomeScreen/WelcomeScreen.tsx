import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { WelcomeScreenNavigation } from './WelcomeScreenType';

import IMAGES from '@/assets';
import { RouteName } from '@/navigation';

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigation>();

  const handleSignUp = () => navigation.navigate(RouteName.SignUp);

  const handleLogin = () => navigation.navigate(RouteName.Login);

  return (
    <SafeAreaView className="flex-1 bg-indi-400">
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">Let's Get Started!</Text>
        <View className="flex-row justify-center">
          <Image source={IMAGES.welcome} style={{ width: 350, height: 350 }} />
        </View>

        <View className="space-y-4">
          <TouchableOpacity onPress={handleSignUp} className="py-3 bg-yellow-400 mx-7 rounded-xl">
            <Text className="text-xl font-bold text-center text-gray-700">Sign Up</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center">
            <Text className="text-white font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text className="font-semibold text-yellow-400"> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
