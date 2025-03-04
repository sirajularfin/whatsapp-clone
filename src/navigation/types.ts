import { createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  ConversationScreen: undefined;
};

export type AllStackParamList = RootStackParamList;

export const Stack = createNativeStackNavigator<RootStackParamList>();
export const navigationRef = createNavigationContainerRef<AllStackParamList>();
