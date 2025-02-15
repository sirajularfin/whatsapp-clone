import React from 'react';
import { FlatList } from 'react-native';
import RecentChat from '../../components/recent-chat';
import Color from '../../themes/colors';
import data from '../../mocks/chatHistory.json';
import Text from '../../components/text';
import { FontVariant } from '../../components/text/styles';
import ScreenLayout from '../../components/screen-layout';

const HomeScreen: React.FC = () => {
  return (
    <ScreenLayout backgroundColor={Color.WHITE}>
      <Text variant={FontVariant.HeadingSmall} textAlign="center">
        BuzzChat
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <RecentChat
            personName={item.name}
            profileImageUrl={item.profileImageUrl}
            lastChatMessage={item.message}
            lastChatDateTime={item.lastChatDateTime}
          />
        )}
      />
    </ScreenLayout>
  );
};

export default HomeScreen;
