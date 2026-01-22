import { View, Text } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontFamily: 'Sora-Medium' }}>
        Hello Tester
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: 'Sora-Regular',
          color: 'gray',
        }}
      >
        Track your job application at a single place
      </Text>
    </View>
  );
};

export default Home;
