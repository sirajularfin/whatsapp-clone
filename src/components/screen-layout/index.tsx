import React, { PropsWithChildren } from 'react';
import Color from '../../themes/colors';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from 'src/components/text';
import { FontVariant } from 'src/components/text/styles';
import Container from 'src/components/container';
import ScaledSize from 'src/themes/sizes';

interface IProps {
  backgroundColor: Color;
  headerTitle: string;
  enableFullScreenMode: boolean;
  enableBackgroundImage: boolean;
  enableKeyboardAvoidingView: boolean;
  hideStatusBar: boolean;
}

const bgImage = require('src/assets/images/chat-background/image.png');

const ScreenLayout: React.FC<PropsWithChildren<Partial<IProps>>> = ({
  children,
  hideStatusBar = false,
  enableBackgroundImage = false,
  enableFullScreenMode = false,
  enableKeyboardAvoidingView = false,
  ...props
}) => {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <>
      {hideStatusBar && (
        <StatusBar
          translucent
          backgroundColor={Color.TRANSPARENT}
          hidden={hideStatusBar}
        />
      )}
      <KeyboardAvoidingView
        behavior="padding"
        enabled={enableKeyboardAvoidingView}
        style={[
          styles.container,
          {
            backgroundColor: props.backgroundColor,
            paddingTop: !enableFullScreenMode ? top : undefined,
            paddingBottom: !enableFullScreenMode ? bottom : undefined,
          },
        ]}
      >
        {enableBackgroundImage && (
          <ImageBackground
            source={bgImage}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: Color.WHITE,
            }}
          />
        )}
        {props.headerTitle && (
          <Container marginBottom={ScaledSize.S_20}>
            <Text
              color={Color.BLACK}
              textAlign="center"
              variant={FontVariant.HeadingSmall}
            >
              {props.headerTitle}
            </Text>
          </Container>
        )}
        {children}
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenLayout;
