import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Controller, useForm } from 'react-hook-form';

import { LoginResolver } from './login.util';

type LoginType = {
  email: string;
  password: string;
};

const Login = () => {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onPressSend = (formData: LoginType) => {
    try {
      // submitData
    } catch (error) {}
  };

  const onSubmit = () => handleSubmit(onPressSend);

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

      <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl" onPress={onSubmit}>
        <Text className="text-xl font-bold text-center text-gray-700">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
