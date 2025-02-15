import React, { PropsWithChildren } from 'react';
import { Text as NativeText } from 'react-native';
import { FontVariant, styles } from './styles';

interface IProps {
  variant: FontVariant;
  useLineHeight?: boolean;
  useLetterSpacing?: boolean;
}

const Text: React.FC<PropsWithChildren<IProps>> = ({
  useLineHeight = true,
  useLetterSpacing = true,
  variant,
  children,
}) => {
  const classes = styles(useLineHeight, useLetterSpacing);
  return <NativeText style={classes[variant]}>{children}</NativeText>;
};

export default Text;
