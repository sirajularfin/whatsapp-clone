import React from 'react';
import {
  TextInputProps,
  View,
  TextInput as NativeTextInput,
} from 'react-native';
import Color from '../../themes/colors';
import styles from './styles';

type IProps = Partial<
  Pick<TextInputProps, 'value' | 'onChange' | 'placeholder'> & {
    icon: React.ReactNode;
  }
>;

const TextInput: React.FC<IProps> = ({ ...props }) => {
  return (
    <View>
      {props.icon}
      <NativeTextInput
        style={{ ...styles.container, ...styles.text }}
        placeholder={props.placeholder}
        placeholderTextColor={Color.GREY_800}
        value={props.value}
        onChange={props.onChange}
      />
    </View>
  );
};

export default TextInput;
