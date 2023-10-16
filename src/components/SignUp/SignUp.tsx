import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Controller, useForm } from 'react-hook-form';

import { SignUpType } from './interfaces.hookform';
import { SignUpResolver } from './utils/sign-up.util';

const SignUp = () => {
  const formMethods = useForm<SignUpType>({
    resolver: SignUpResolver,
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const onPressSend = (formData: SignUpType) => {
    try {
      // submitData
      console.log('formData', formData);
    } catch (error) {}
  };

  const onSubmit = () => {
    handleSubmit(onPressSend)();
  };

  return (
    <View className="form space-y-2">
      <Text className="text-gray-700 ml-4">Full Name</Text>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Enter Name"
            autoFocus
          />
        )}
      />

      {errors.name && <Text className="text-red-500">{errors?.name?.message}</Text>}

      <Text className="text-gray-700 ml-4">Email Address</Text>

      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Enter Email"
            autoCapitalize="none"
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
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
            placeholder="Enter Password"
            autoCapitalize="none"
            secureTextEntry
          />
        )}
      />
      {errors.password && <Text className="text-red-500">{errors.password.message}</Text>}

      <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl" onPress={onSubmit}>
        <Text className="font-xl font-bold text-center text-gray-700">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
