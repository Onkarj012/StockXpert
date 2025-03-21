import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const PlaceholderScreen = ({ text }: { text: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{text}</Text>
  </View>
);

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home">{() => <PlaceholderScreen text="Home Screen" />}</Tab.Screen>
        <Tab.Screen name="Profile">{() => <PlaceholderScreen text="Profile Screen" />}</Tab.Screen>
        <Tab.Screen name="Settings">
          {() => <PlaceholderScreen text="Settings Screen" />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
