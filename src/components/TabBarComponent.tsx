import { StyleSheet, View } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export function TabBarComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  return (
    <View style={tabBarComponentStyles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            style={{
              //flex: 1,
              height: '65%',
              width: '22%',
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isFocused ? colors.card : 'transparent',
            }}
          >
            <Text
              style={{
                color: isFocused ? 'black' : 'white',
                fontFamily: 'Sora-Medium',
              }}
            >
              {label.toString()}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const tabBarComponentStyles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    margin: 40,
    alignItems: 'center',
    backgroundColor: 'black',
    height: 55,
    borderRadius: 25,
    justifyContent: 'space-around',
  },
});
