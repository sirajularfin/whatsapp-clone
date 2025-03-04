import { Platform } from 'react-native';

export function isIOS() {
  return Platform.OS === 'ios';
}

export function formatJson(args: string) {
  try {
    return JSON.stringify(JSON.parse(args), null, 2);
  } catch (e) {
    return args;
  }
}
