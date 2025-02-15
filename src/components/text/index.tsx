import React, { PropsWithChildren } from 'react';
import { Text as NativeText, TextStyle } from 'react-native';
import { FontVariant, styles } from './styles';

type IProps = Partial<
  Pick<TextStyle, 'textAlign'> & {
    numberOfLines: number;
    useLetterSpacing: boolean;
    useLineHeight: boolean;
    variant: FontVariant;
  }
>;

const Text: React.FC<PropsWithChildren<IProps>> = ({
  children,
  useLetterSpacing = true,
  useLineHeight = true,
  ...props
}) => {
  const classes = styles(useLineHeight, useLetterSpacing);
  return (
    <NativeText
      style={[
        { textAlign: props.textAlign },
        classes[props.variant as keyof typeof classes],
      ]}
      numberOfLines={props.numberOfLines}
    >
      {children}
    </NativeText>
  );
};

export default Text;
