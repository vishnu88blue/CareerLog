import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import BootSplash from 'react-native-bootsplash';
import PreLoginCarousel from './carousal/PreLoginCarousel';
import useCommonDeclaration from '../../hooks/use-common';

const AppLandingPage = () => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const { navigation, width } = useCommonDeclaration();

  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={AppLandingPageStyles.topButtonView}>
        <Text style={[AppLandingPageStyles.redText, { color: 'black' }]}>
          {pageIndex}
          <Text style={[AppLandingPageStyles.redText, { color: 'gray' }]}>
            /3
          </Text>
        </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={[AppLandingPageStyles.redText, { color: 'black' }]}>
            Skip
          </Text>
        </Pressable>
      </View>

      {/*FlatList */}
      <View style={{ flex: 1, marginTop: width * 0.35, alignItems: 'center' }}>
        <PreLoginCarousel pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </View>

      <View style={AppLandingPageStyles.bottomButtonView}>
        <Pressable
          onPress={() => {
            if (pageIndex !== 1) {
              setPageIndex(prev => prev - 1);
            }
          }}
        >
          <Text style={[AppLandingPageStyles.redText, { color: 'gray' }]}>
            {pageIndex !== 1 ? 'Prev' : ''}
          </Text>
        </Pressable>
        <View></View>
        <Pressable
          onPress={() => {
            pageIndex === 3
              ? navigation.navigate('Login')
              : setPageIndex(prev => prev + 1);
          }}
        >
          <Text style={AppLandingPageStyles.redText}>
            {pageIndex === 3 ? 'Get Started' : 'Next'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const AppLandingPageStyles = StyleSheet.create({
  redText: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 16,
    color: '#F83658',
  },
  bottomButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    position: 'absolute',
    bottom: 10,
    margin: 20,
  },
  topButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default AppLandingPage;
