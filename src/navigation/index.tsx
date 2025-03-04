import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Routes } from './routes';
import ConversationScreen from 'src/screens/conversation';
import HomeScreen from 'src/screens/home';
import useNavigationOptions from './navigation.hook';
import { navigationRef, Stack } from './types';

const Navigation = () => {
  const { basicNavigationOptions, firstScreenOptions } = useNavigationOptions();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={Routes.HomeScreen}>
        <Stack.Screen
          name={Routes.HomeScreen}
          component={HomeScreen}
          options={firstScreenOptions}
        />
        <Stack.Screen
          name={Routes.ConversationScreen}
          component={ConversationScreen}
          options={basicNavigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
