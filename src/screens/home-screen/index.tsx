import React from 'react';
import { FlatList } from 'react-native';
import RecentChat from '../../components/recent-chat';
import Color from '../../themes/colors';
import data from '../../mocks/chatHistory.json';
import ScreenLayout from '../../components/screen-layout';
import Container from '../../components/container';
import ScaledSize from '../../themes/sizes';
import TextInput from '../../components/text-input';
import SearchIcon from '../../assets/icons/search.svg';

const flatListSeparator = () => <Container height={ScaledSize.XS_5} />;

const HomeScreen: React.FC = () => {
  return (
    <ScreenLayout backgroundColor={Color.WHITE} headerTitle="BuzzChat">
      <Container rowGap={ScaledSize.S_20} paddingHorizontal={ScaledSize.XS_10}>
        <TextInput
          placeholder="Search"
          icon={<SearchIcon height={ScaledSize.S_15} width={ScaledSize.S_15} />}
        />
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
          ItemSeparatorComponent={flatListSeparator}
        />
      </Container>
    </ScreenLayout>
  );
};

export default HomeScreen;
