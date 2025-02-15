import React, { PropsWithChildren } from 'react';
import { View, ViewStyle } from 'react-native';

type IProps = Partial<
  Pick<
    ViewStyle,
    | 'alignContent'
    | 'alignItems'
    | 'alignSelf'
    | 'borderBottomWidth'
    | 'borderColor'
    | 'borderLeftWidth'
    | 'borderRadius'
    | 'borderRightWidth'
    | 'borderTopWidth'
    | 'borderWidth'
    | 'columnGap'
    | 'flex'
    | 'flexBasis'
    | 'flexDirection'
    | 'flexGrow'
    | 'flexShrink'
    | 'flexWrap'
    | 'gap'
    | 'justifyContent'
    | 'margin'
    | 'marginBottom'
    | 'marginEnd'
    | 'marginHorizontal'
    | 'marginLeft'
    | 'marginRight'
    | 'marginStart'
    | 'marginTop'
    | 'marginVertical'
    | 'padding'
    | 'paddingBottom'
    | 'paddingEnd'
    | 'paddingHorizontal'
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingStart'
    | 'paddingTop'
    | 'paddingVertical'
    | 'rowGap'
  >
>;

const Container: React.FC<PropsWithChildren<IProps>> = ({ children, ...props }) => {
  return <View style={{ ...props }}>{children}</View>;
};

export default Container;
