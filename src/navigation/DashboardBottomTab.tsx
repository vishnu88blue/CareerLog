import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/dashboard/Home';
import Resume from '../screens/dashboard/Resume';
import Records from '../screens/dashboard/Records';
import { TabBarComponent } from '../components/TabBarComponent';
import Profiles from '../screens/dashboard/Profiles';

const Tab = createBottomTabNavigator();

export default function DashboardTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBarComponent {...props} />}
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Records" component={Records} />
      <Tab.Screen name="Resume" component={Resume} />
      <Tab.Screen name="Profiles" component={Profiles} />
    </Tab.Navigator>
  );
}
