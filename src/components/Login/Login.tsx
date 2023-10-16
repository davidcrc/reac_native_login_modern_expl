import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { Controller, useForm } from 'react-hook-form';
import tryToCatch from 'try-to-catch';

import { LoginType } from './interfaces.hookform';
import { LoginResolver } from './utils/login.util';

import { auth } from '@/service/firebase';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const formMethods = useForm<LoginType>({
    resolver: LoginResolver,
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    control,
    handleSubmit,

    formState: { errors },
  } = formMethods;

  const onPressSend = async ({ email, password }: LoginType) => {
    setLoading(true);
    const [error, data] = await tryToCatch(() => signInWithEmailAndPassword(auth, email, password));

    if (!error) {
      console.log('DDD', data);
    }

    if (error) {
      console.log('EEE', error);
    }

    setLoading(false);
  };

  const onSubmit = () => handleSubmit(onPressSend)();

  return (
    <View className="form space-y-2">
      <Text className="text-gray-700 ml-4">Email Address</Text>

      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="email"
            autoCapitalize="none"
            autoFocus
          />
        )}
      />
      {errors.email && <Text className="text-red-500">{errors.email.message}</Text>}

      <Text className="text-gray-700 ml-4">Password</Text>

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
          />
        )}
      />
      {errors.password && <Text className="text-red-500">{errors.password.message}</Text>}

      <TouchableOpacity className="flex items-end">
        <Text className="text-gray-700 mb-5">Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex flex-row justify-center items-center gap-2 py-3 bg-yellow-400 rounded-xl"
        onPress={onSubmit}
      >
        <Text className="text-xl font-bold text-center text-gray-700">Login</Text>
        {loading && <ActivityIndicator size="small" color="#0000ff" />}
      </TouchableOpacity>
    </View>
  );
};

export default Login;
