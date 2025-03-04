import React, { useContext } from 'react';
import Container from '../container';
import Text from '../text';
import { FontVariant } from '../text/styles';
import Color from 'src/themes/colors';
import ScaledSize from 'src/themes/sizes';
import AuthContext from 'src/context/auth/actions';

interface IProps {
  text: string;
  userId: string;
}

const ChatBubble: React.FC<Partial<IProps>> = ({ ...props }) => {
  return (
    <Container
      maxWidth="80%"
      alignSelf="flex-start"
      padding={ScaledSize.XS_10}
      borderRadius={ScaledSize.XS_10}
      backgroundColor={Color.GREY_200}
      marginVertical={ScaledSize.XS_10}
    >
      <Text variant={FontVariant.BodyMedium} color={Color.BLACK}>
        {props.text}
      </Text>
    </Container>
  );
};

export default ChatBubble;
