import { View, Text, StyleSheet, Animated } from 'react-native';
import React, { use } from 'react';
import { flatListItem } from './PreLoginCarousel';
import useCommonDeclaration from '../../../hooks/use-common';

const Paginator = ({
  data,
  scrollX,
}: {
  data: flatListItem[];
  scrollX: Animated.Value;
}) => {
  const { width } = useCommonDeclaration();
  return (
    <View style={PaginatorStyles.container}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['gray', '#F83658', 'gray'],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={item.id}
            style={[
              PaginatorStyles.dotDefaultStyle,
              { width: dotWidth },
              { backgroundColor: backgroundColor },
            ]}
          />
        );
      })}
    </View>
  );
};

const PaginatorStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  dotDefaultStyle: {
    backgroundColor: 'gray',
    height: 10,
    borderRadius: 5,
    width: 10,
    marginHorizontal: 5,
  },
});

export default Paginator;
