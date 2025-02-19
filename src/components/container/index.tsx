import React, { PropsWithChildren } from 'react';
import { View, ViewStyle } from 'react-native';
import Color from 'src/themes/colors';
import ScaledSize from 'src/themes/sizes';

type IProps = Partial<
  Pick<
    ViewStyle,
    | 'alignContent'
    | 'alignItems'
    | 'alignSelf'
    | 'backgroundColor'
    | 'borderBottomWidth'
    | 'borderColor'
    | 'borderLeftWidth'
    | 'borderRadius'
    | 'borderRightWidth'
    | 'borderTopWidth'
    | 'borderWidth'
    | 'bottom'
    | 'columnGap'
    | 'flex'
    | 'flexBasis'
    | 'flexDirection'
    | 'flexGrow'
    | 'flexShrink'
    | 'flexWrap'
    | 'gap'
    | 'height'
    | 'justifyContent'
    | 'left'
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
    | 'position'
    | 'right'
    | 'rowGap'
    | 'top'
    | 'width'
  > & { debug?: boolean }
>;

const Container: React.FC<PropsWithChildren<IProps>> = ({
  children,
  debug = false,
  ...props
}) => {
  const debugStyle = debug
    ? { borderWidth: ScaledSize.XS_1, borderColor: Color.BLACK }
    : {};
  return <View style={{ ...props, ...debugStyle }}>{children}</View>;
};

export default Container;
