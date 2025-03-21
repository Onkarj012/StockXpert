import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Appbar, Avatar, Menu } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const TopNavBar = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <SafeAreaView>
      <Appbar.Header style={styles.header}>
        <View style={styles.titleContainer}>
          <Ionicons
            name="bar-chart-outline"
            size={24}
            color="white"
            accessibilityLabel="Chart Icon"
          />
          <Text style={styles.title}>StockXpert</Text>
        </View>

        <TouchableOpacity
          onPress={() => console.log('Notifications Pressed')}
          style={styles.iconButton}
          accessibilityLabel="Notifications Button">
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>

        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TouchableOpacity
              onPress={() => setMenuVisible(true)}
              style={styles.avatarContainer}
              accessibilityLabel="User Menu">
              <Avatar.Image size={36} source={{ uri: 'https://picsum.photos/200/300?grayscale' }} />
            </TouchableOpacity>
          }
          style={styles.menuStyle}>
          <Menu.Item onPress={() => console.log('Profile Pressed')} title="Profile" />
          <Menu.Item onPress={() => console.log('Settings Pressed')} title="Settings" />
          <Menu.Item onPress={() => console.log('Support Pressed')} title="Support" />
          <Menu.Item onPress={() => console.log('Logout Pressed')} title="Logout" />
        </Menu>
      </Appbar.Header>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#121212',
    elevation: 4,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: 'white',
  },
  iconButton: {
    padding: 10,
  },
  avatarContainer: {
    padding: 10,
  },
  menuStyle: {
    marginTop: 40,
  },
});

export default TopNavBar;
