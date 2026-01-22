import {
  View,
  Text,
  FlatList,
  ImageSourcePropType,
  Image,
  Animated,
} from 'react-native';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import useCommonDeclaration from '../../../hooks/use-common';
import Paginator from './Paginator';

export type flatListItem = {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
};

const PreLoginCarousel = ({
  pageIndex,
  setPageIndex,
}: {
  pageIndex: number;
  setPageIndex: Dispatch<SetStateAction<number>>;
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewCOnfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const { width } = useCommonDeclaration();

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    setPageIndex(viewableItems[0].index + 1);
  }).current;
  const flatListData: flatListItem[] = [
    {
      id: '1',
      title: 'Privacy-First Resume Storage',
      description:
        'Store your resume securely on your device. No cloud uploads. No data sharing. Your career data stays 100% private',
      image: require('../../../../assets/images/banner1.png'),
    },
    {
      id: '2',
      title: 'Track Every Job Application',
      description:
        'Keep track of every job application in one place. Monitor application status, applied dates, and job details effortlessly.',
      image: require('../../../../assets/images/banner2.png'),
    },
    {
      id: '3',
      title: 'AI Cover Letters in Seconds',
      description:
        'Generate personalized cover letters for every job role using AI. Save time and apply faster with role-specific content.',
      image: require('../../../../assets/images/banner3.png'),
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

  useEffect(() => {
    if (pageIndex !== slidesRef.current) {
      slidesRef.current &&
        slidesRef.current?.scrollToIndex({ index: pageIndex - 1 });
    }
  }, [pageIndex]);

  return (
    <View style={{ alignItems: 'center', height: '75%' }}>
      <FlatList
        keyExtractor={item => item.id}
        data={flatListData}
        renderItem={item => flatListRenderItem(item)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        ref={slidesRef}
      />
      <Paginator data={flatListData} scrollX={scrollX} />
    </View>
  );
};

export default PreLoginCarousel;
