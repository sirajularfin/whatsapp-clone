import React from 'react';
import Container from '../container';
import Text from '../text';
import Color from 'src/themes/colors';
import { FontVariant } from '../text/styles';
import ScaledSize from 'src/themes/sizes';
import Image from '../image';

interface IProps {
  username: string;
  profileImageURL: string;
  isTyping: boolean;
  lastSeen: string;
  isOnline: boolean;
}

const HeaderProfileSection: React.FC<Partial<IProps>> = ({ ...props }) => {
  return (
    <Container
      flexDirection="row"
      marginBottom={ScaledSize.XS_10}
      marginRight={ScaledSize.XS_5}
      gap={ScaledSize.XS_8}
    >
      <Container>
        <Text color={Color.BLACK} variant={FontVariant.BodyLarge}>
          {props.username}
        </Text>
        <Text color={Color.BLACK} variant={FontVariant.LabelSmall}>
          {props.isTyping
            ? 'Typing...'
            : props.isOnline
            ? 'Online'
            : `Last seen ${props.lastSeen}`}
        </Text>
      </Container>
      <Image
        source={props.profileImageURL}
        style={{
          height: ScaledSize.L_40,
          width: ScaledSize.L_40,
          borderRadius: ScaledSize.S_20,
        }}
      />
    </Container>
  );
};

export default HeaderProfileSection;
