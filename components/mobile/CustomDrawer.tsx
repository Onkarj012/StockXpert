import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomDrawer = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#333', padding: 20 }}>
      <Text style={{ color: 'white', fontSize: 22, marginBottom: 20 }}>Menu</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>🏠 Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>👤 Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>⚙️ Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
