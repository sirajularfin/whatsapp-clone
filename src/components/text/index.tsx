import React, { PropsWithChildren } from 'react';
import { Text as NativeText, TextStyle } from 'react-native';
import { FontVariant, styles } from './styles';

type IProps = Partial<
  Pick<TextStyle, 'textAlign' | 'color'> & {
    numberOfLines: number;
    useLetterSpacing: boolean;
    useLineHeight: boolean;
    variant: FontVariant;
  }
>;

const Text: React.FC<PropsWithChildren<IProps>> = ({
  useLetterSpacing = true,
  useLineHeight = true,
  children,
  ...props
}) => {
  const classes = styles(useLineHeight, useLetterSpacing);
  return (
    <NativeText
      style={[classes[props.variant as keyof typeof classes], { ...props }]}
      numberOfLines={props.numberOfLines}
    >
      {children}
    </NativeText>
  );
};

export default Text;
