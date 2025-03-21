import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator();

const PlaceholderScreen = ({ text }: { text: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 20 }}>{text}</Text>
  </View>
);

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home">{() => <PlaceholderScreen text="Home Screen" />}</Drawer.Screen>
        <Drawer.Screen name="Profile">
          {() => <PlaceholderScreen text="Profile Screen" />}
        </Drawer.Screen>
        <Drawer.Screen name="Settings">
          {() => <PlaceholderScreen text="Settings Screen" />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
