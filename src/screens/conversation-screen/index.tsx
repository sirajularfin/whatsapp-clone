import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChatBubble from 'src/components/chat-bubble';
import Container from 'src/components/container';
import DateTimeLabel from 'src/components/date-time-label';
import ScreenLayout from 'src/components/screen-layout/index';
import TextInput from 'src/components/text-input';
import ScaledSize from 'src/themes/sizes';
import styles from './styles';

const ConversationScreen: React.FC = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <ScreenLayout enableFullScreenMode enableBackgroundImage>
      <Container top={top} scrollable paddingHorizontal={ScaledSize.XS_10}>
        <DateTimeLabel dateTime={Date.now().toString()} />
        <ChatBubble
          text="Placerat ullamcorper porttitor tempor enim libero. Sem dolor gravida lacinia velit porttitor odio elit."
          userId="1"
        />
      </Container>
      <Container
        width="100%"
        bottom={bottom}
        position="absolute"
        paddingHorizontal={ScaledSize.XS_10}
      >
        <TextInput
          placeholder="Message"
          containerStyles={styles.textInputContainerStyle}
          placeholderTextStyles={styles.textInputPlaceholderStyle}
        />
      </Container>
    </ScreenLayout>
  );
};

export default ConversationScreen;
