import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLandingPage from '../screens/pre-login/AppLandingPage';
import Login from '../screens/pre-login/Login';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppLandingPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AppLandingPage" component={AppLandingPage} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
