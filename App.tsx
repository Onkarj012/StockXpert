import BottomTabNavigator from 'components/mobile/BottomTabNavigator';
import DrawerNavigator from 'components/mobile/DrawerNavigator';
import SideNavBar from 'components/web/SideNavBar';
import TopNavBar from 'components/web/TopNavBar';
import { View, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }} className="bg-black">
        <BottomTabNavigator />
      </View>
    </SafeAreaProvider>
  );
}
