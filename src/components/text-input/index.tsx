import React from 'react';
import {
  TextInputProps,
  View,
  TextInput as NativeTextInput,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Color from 'src/themes/colors';
import styles from './styles';

type IProps = Partial<
  Pick<TextInputProps, 'value' | 'onChange' | 'placeholder'> & {
    icon: React.ReactNode;
    containerStyles: ViewStyle;
    placeholderTextStyles: TextStyle;
  }
>;

const TextInput: React.FC<IProps> = ({ ...props }) => {
  return (
    <View style={{ ...styles.container, ...props.containerStyles }}>
      {props.icon}
      <NativeTextInput
        style={{
          ...styles.text,
          ...props.placeholderTextStyles,
        }}
        placeholder={props.placeholder}
        placeholderTextColor={Color.GREY_800}
        value={props.value}
        onChange={props.onChange}
      />
    </View>
  );
};

export default TextInput;
