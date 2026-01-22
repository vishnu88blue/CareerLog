import { View, Text, FlatList, ImageSourcePropType, Image } from 'react-native';
import React from 'react';
import useCommonDeclaration from '../../hooks/use-common';

type flatListItem = {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
};

const PreLoginCarousel = ({ pageIndex }: { pageIndex: number }) => {
  const { width } = useCommonDeclaration();
  const flatListData: flatListItem[] = [
    {
      id: '1',
      title: 'Privacy-First Resume Storage',
      description:
        'Store your resume securely on your device. No cloud uploads. No data sharing. Your career data stays 100% private',
      image: require('../../../assets/images/banner1.png'),
    },
    {
      id: '2',
      title: 'Track Every Job Application',
      description:
        'Keep track of every job application in one place. Monitor application status, applied dates, and job details effortlessly.',
      image: require('../../../assets/images/banner2.png'),
    },
    {
      id: '3',
      title: 'AI Cover Letters in Seconds',
      description:
        'Generate personalized cover letters for every job role using AI. Save time and apply faster with role-specific content.',
      image: require('../../../assets/images/banner3.png'),
    },
  ];
  const flatListRenderItem = ({ item }: { item: flatListItem }) => (
    <View style={{ alignItems: 'center', width: width }}>
      <Image source={item.image} style={{ width: 400, height: 270 }} />
      <Text
        style={{
          fontSize: 21,
          fontFamily: 'Sora-ExtraBold',
          marginTop: 25,
          marginBottom: 10,
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          paddingHorizontal: 20,
          fontSize: 18,
          fontFamily: 'Sora-Regular',
          marginVertical: 10,
          color: 'gray',
        }}
      >
        {item.description}
      </Text>
    </View>
  );
  return (
    <View style={{ alignItems: 'center' }}>
      <FlatList
        keyExtractor={item => item.id}
        data={flatListData}
        renderItem={item => flatListRenderItem(item)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PreLoginCarousel;
