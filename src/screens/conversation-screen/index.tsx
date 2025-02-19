import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChatBubble from 'src/components/chat-bubble';
import Container from 'src/components/container';
import DateTimeLabel from 'src/components/date-time-label';
import ScreenLayout from 'src/components/screen-layout/index';
import ScaledSize from 'src/themes/sizes';

const ConversationScreen: React.FC = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <ScreenLayout enableFullScreenMode enableBackgroundImage>
      <Container
        bottom={bottom}
        gap={ScaledSize.XS_10}
        paddingHorizontal={ScaledSize.XS_10}
        top={top}
      >
        <DateTimeLabel dateTime={Date.now().toString()} />
        <ChatBubble
          text="Placerat ullamcorper porttitor tempor enim libero. Sem dolor gravida lacinia velit porttitor odio elit."
          userId="1"
        />
      </Container>
    </ScreenLayout>
  );
};

export default ConversationScreen;
