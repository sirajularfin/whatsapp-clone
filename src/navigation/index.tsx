import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Routes } from './routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConversationScreen from '../screens/conversation-screen';
import HomeScreen from '../screens/home-screen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.ConversationScreen}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
        <Stack.Screen
          name={Routes.ConversationScreen}
          component={ConversationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
