import { View, Text, Pressable } from 'react-native';
import React from 'react';
import useCommonDeclaration from '../../hooks/use-common';

const Login = () => {
  const { navigation } = useCommonDeclaration();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'DashboardTabs', params: { screen: 'Home' } }],
          });
        }}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;
