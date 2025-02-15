import React, { PropsWithChildren } from 'react';
import Color from '../../themes/colors';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IProps {
  backgroundColor?: Color;
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
