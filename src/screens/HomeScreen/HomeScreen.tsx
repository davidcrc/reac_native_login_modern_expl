import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { signOut } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

import { auth } from '@/service/firebase';

const HomeScreen = () => {
  const handleLogOut = async () => {
    await signOut(auth);
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-lg">Home Page</Text>
      <TouchableOpacity className="p-2 bg-red-400 rounded-lg" onPress={handleLogOut}>
        <Text className="text-white text-lg font-bold">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
