import React, { PropsWithChildren } from 'react';
import { Text as NativeText } from 'react-native';
import { FontVariant, styles } from './styles';

interface IProps {
  numberOfLines?: number;
  useLetterSpacing?: boolean;
  useLineHeight?: boolean;
  variant: FontVariant;
}

const Text: React.FC<PropsWithChildren<IProps>> = ({
  children,
  numberOfLines,
  useLetterSpacing = true,
  useLineHeight = true,
  variant,
}) => {
  const classes = styles(useLineHeight, useLetterSpacing);
  return (
    <NativeText style={classes[variant]} numberOfLines={numberOfLines}>
      {children}
    </NativeText>
  );
};

export default Text;
