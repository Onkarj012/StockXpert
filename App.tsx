import SideNavBar from 'components/SideNavBar';
import TopNavBar from 'components/TopNavBar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }} className="bg-black">
        <TopNavBar />
        <SideNavBar />
      </View>
    </SafeAreaProvider>
  );
}
