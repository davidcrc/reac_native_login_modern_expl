import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LoginScreenNavigation } from './LoginScreenType';

import IMAGES from '@/assets';
import { Login } from '@/components';
import { RouteName } from '@/navigation';

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigation>();

  const handleGoBack = () => navigation.goBack();
  const handleSignUp = () => navigation.navigate(RouteName.SignUp);

  return (
    <View className="flex-1 bg-indi-400">
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={handleGoBack} className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image source={IMAGES.login} className="w-40 h-40" />
        </View>
      </SafeAreaView>

      <ScrollView
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 py-16 "
        showsVerticalScrollIndicator={false}
      >
        <Login />

        <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>

        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={IMAGES.googleIcon} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={IMAGES.appleIcon} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={IMAGES.facebookIcon} className="w-10 h-10" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text className="font-semibold text-yellow-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
