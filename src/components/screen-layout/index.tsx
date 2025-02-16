import React, { PropsWithChildren } from 'react';
import Color from '../../themes/colors';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from '../text';
import { FontVariant } from '../text/styles';
import Container from '../container';
import ScaledSize from '../../themes/sizes';

interface IProps {
  backgroundColor?: Color;
  headerTitle?: string;
}

const ScreenLayout: React.FC<PropsWithChildren<IProps>> = ({
  children,
  ...props
}) => {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor,
          paddingTop: top,
          paddingBottom: bottom,
        },
      ]}
    >
      <Container marginBottom={ScaledSize.S_20}>
        <Text
          color={Color.BLACK}
          textAlign="center"
          useLineHeight={false}
          variant={FontVariant.HeadingSmall}
        >
          {props.headerTitle}
        </Text>
      </Container>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenLayout;
