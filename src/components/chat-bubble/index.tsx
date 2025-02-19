import React from 'react';
import Container from '../container';
import Text from '../text';
import { FontVariant } from '../text/styles';
import Color from 'src/themes/colors';
import ScaledSize from 'src/themes/sizes';

interface IProps {
  text: string;
  userId: string;
}

const ChatBubble: React.FC<Partial<IProps>> = ({ ...props }) => {
  return (
    <Container
      backgroundColor={Color.GREY_200}
      borderRadius={ScaledSize.XS_10}
      padding={ScaledSize.XS_10}
      alignSelf="flex-start"
    >
      <Text variant={FontVariant.BodyMedium} color={Color.BLACK}>
        {props.text}
      </Text>
    </Container>
  );
};

export default ChatBubble;
