import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import RecentChat from 'src/components/recent-chat';
import Color from 'src/themes/colors';
import data from 'src/mocks/chatHistory.json';
import ScreenLayout from 'src/components/screen-layout';
import Container from 'src/components/container';
import ScaledSize from 'src/themes/sizes';
import TextInput from 'src/components/text-input';
import SearchIcon from 'src/assets/icons/search.svg';
import { useNavigation } from '@react-navigation/native';
import { Routes } from 'src/navigation/routes';

const flatListSeparator = () => <Container height={ScaledSize.XS_5} />;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate(Routes.ConversationScreen);
  }, [navigation]);

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
