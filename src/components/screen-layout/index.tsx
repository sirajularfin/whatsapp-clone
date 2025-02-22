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
import ArrowBackwardIcon from 'src/assets/icons/arrow-backward.svg';

interface IProps {
  backgroundColor: Color;
  headerTitle: string;
  enableFullScreenMode: boolean;
  enableBackgroundImage: boolean;
  enableKeyboardAvoidingView: boolean;
  enableStatusBar: boolean;
  enableNavigationBar: boolean;
}

const bgImage = require('src/assets/images/chat-background/image.png');

const ScreenLayout: React.FC<PropsWithChildren<Partial<IProps>>> = ({
  children,
  enableStatusBar = false,
  enableBackgroundImage = false,
  enableFullScreenMode = false,
  enableKeyboardAvoidingView = false,
  enableNavigationBar = false,
  ...props
}) => {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={Color.TRANSPARENT}
        hidden={enableStatusBar}
      />
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
        {enableNavigationBar && (
          <Container backgroundColor={Color.WHITE} padding={ScaledSize.S_20}>
            <ArrowBackwardIcon
              height={ScaledSize.S_17}
              width={ScaledSize.XS_10}
            />
          </Container>
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
