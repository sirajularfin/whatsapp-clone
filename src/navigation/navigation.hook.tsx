import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HeaderBackButton from 'src/components/header-back';
import HeaderProfileSection from 'src/components/header-profile-section';

const useNavigationOptions = () => {
  const basicNavigationOptions: NativeStackNavigationOptions = {
    headerTitle: '',
    headerBackVisible: false,
    headerShadowVisible: true,
    headerLeft: () => <HeaderBackButton />,
    headerRight: () => (
      <HeaderProfileSection
        username="Hazel"
        profileImageURL="https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM5NjM4NzEyfA&force=true"
        isTyping
      />
    ),
  };

  const firstScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return { basicNavigationOptions, firstScreenOptions };
};

export default useNavigationOptions;
