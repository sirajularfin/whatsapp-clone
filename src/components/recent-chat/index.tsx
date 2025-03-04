import React from 'react';
import Text from 'src/components/text';
import { FontVariant } from 'src/components/text/styles';
import ScaledSize from 'src/themes/sizes';
import Container from 'src/components/container';
import Image from 'src/components/image';
import Color from 'src/themes/colors';
import { useNavigation } from '@react-navigation/native';
import { Touchable, TouchableOpacity } from 'react-native';
import { Routes } from 'src/navigation/routes';

interface IProps {
  lastChatDateTime: string;
  lastChatMessage: string;
  personName: string;
  profileImageUrl: string;
}

const RecentChat: React.FC<Partial<IProps>> = ({ ...props }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(Routes.ConversationScreen as never)}
    >
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
    </TouchableOpacity>
  );
};

export default RecentChat;
