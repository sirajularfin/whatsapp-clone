import React, { PropsWithChildren } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
import Color from 'src/themes/colors';
import ScaledSize from 'src/themes/sizes';

type MarginProps = Pick<
  ViewStyle,
  | 'margin'
  | 'marginBottom'
  | 'marginEnd'
  | 'marginHorizontal'
  | 'marginLeft'
  | 'marginRight'
  | 'marginStart'
  | 'marginTop'
  | 'marginVertical'
>;

type PaddingProps = Pick<
  ViewStyle,
  | 'padding'
  | 'paddingBottom'
  | 'paddingEnd'
  | 'paddingHorizontal'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingStart'
  | 'paddingTop'
  | 'paddingVertical'
>;

type BorderProps = Pick<
  ViewStyle,
  | 'borderBottomWidth'
  | 'borderColor'
  | 'borderLeftWidth'
  | 'borderRadius'
  | 'borderRightWidth'
  | 'borderTopWidth'
  | 'borderWidth'
>;

type FlexProps = Pick<
  ViewStyle,
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
  | 'columnGap'
  | 'flex'
  | 'flexBasis'
  | 'flexDirection'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexWrap'
  | 'gap'
  | 'justifyContent'
  | 'rowGap'
>;

type PositionProps = Pick<
  ViewStyle,
  'bottom' | 'left' | 'position' | 'right' | 'top'
>;

type DimensionProps = Pick<ViewStyle, 'height' | 'width' | 'maxWidth'>;

type IProps = MarginProps &
  PaddingProps &
  BorderProps &
  FlexProps &
  PositionProps &
  DimensionProps & {
    debug: boolean;
    scrollable: boolean;
    backgroundColor: ViewStyle['backgroundColor'];
  };

const Container: React.FC<PropsWithChildren<Partial<IProps>>> = ({
  children,
  debug = false,
  scrollable = false,
  ...props
}) => {
  const debugStyle = debug
    ? { borderWidth: ScaledSize.XS_1, borderColor: Color.BLACK }
    : {};

  return scrollable ? (
    <ScrollView style={{ ...props, ...debugStyle }}>{children}</ScrollView>
  ) : (
    <View style={{ ...props, ...debugStyle }}>{children}</View>
  );
};

export default Container;
