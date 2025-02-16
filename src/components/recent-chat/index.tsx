import React from 'react';
import Text from '../text';
import { FontVariant } from '../text/styles';
import ScaledSize from '../../themes/sizes';
import Container from '../container';
import Image from '../image';
import Color from '../../themes/colors';

interface IProps {
  lastChatDateTime?: string;
  lastChatMessage?: string;
  personName?: string;
  profileImageUrl?: string;
}

const RecentChat: React.FC<IProps> = ({ ...props }) => {
  return (
    <Container
      alignItems="center"
      backgroundColor={Color.GREY_50}
      borderBottomWidth={ScaledSize.XS_1}
      borderColor={Color.GREY_200}
      borderRadius={ScaledSize.XS_10}
      flexDirection="row"
      columnGap={ScaledSize.XS_10}
      padding={ScaledSize.XS_10}
    >
      <Image
        source={props.profileImageUrl}
        style={{
          borderRadius: ScaledSize.M_25,
          height: ScaledSize.XL_50,
          width: ScaledSize.XL_50,
        }}
      />
      <Container flex={1}>
        <Container
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text variant={FontVariant.HeadingSmall} color={Color.BLACK}>
            {props.personName}
          </Text>
          <Text variant={FontVariant.LabelSmall} color={Color.BLACK}>
            {props.lastChatDateTime}
          </Text>
        </Container>
        <Text
          variant={FontVariant.BodyMedium}
          color={Color.BLACK}
          numberOfLines={1}
        >
          {props.lastChatMessage}
        </Text>
      </Container>
    </Container>
  );
};

export default RecentChat;
