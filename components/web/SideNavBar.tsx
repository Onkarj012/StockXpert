import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef, useEffect } from 'react';
import { Animated, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

const SideNavBar = () => {
  const [activeTab, setActiveTab] = useState('overview');
  // Start collapsed by default (change to false if you prefer it expanded initially)
  const [collapsed, setCollapsed] = useState(true);

  // Create an animated value with initial width based on collapsed state.
  const animatedWidth = useRef(new Animated.Value(collapsed ? 70 : 240)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: collapsed ? 70 : 240,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [collapsed]);

  // Hover events only work on web.
  const handleMouseEnter = () => {
    if (Platform.OS === 'web') {
      setCollapsed(false);
    }
  };

  const handleMouseLeave = () => {
    if (Platform.OS === 'web') {
      setCollapsed(true);
    }
  };

  return (
    <Animated.View
      style={[styles.sidebar, { width: animatedWidth }]}
      {...(Platform.OS === 'web'
        ? {
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
          }
        : {})}>
      {/* Toggle Collapse Button */}
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)} style={styles.toggleButton}>
        <Ionicons name={collapsed ? 'chevron-forward' : 'chevron-back'} size={20} color="white" />
      </TouchableOpacity>

      {/* Navigation Items */}
      <TouchableOpacity
        style={[styles.navButton, activeTab === 'overview' && styles.activeButton]}
        onPress={() => setActiveTab('overview')}>
        <Ionicons name="analytics-outline" size={20} color="white" />
        {!collapsed && <Text style={styles.buttonText}>Overview</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, activeTab === 'portfolio' && styles.activeButton]}
        onPress={() => setActiveTab('portfolio')}>
        <Ionicons name="pie-chart-outline" size={20} color="white" />
        {!collapsed && <Text style={styles.buttonText}>Portfolio</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, activeTab === 'transactions' && styles.activeButton]}
        onPress={() => setActiveTab('transactions')}>
        <Ionicons name="card-outline" size={20} color="white" />
        {!collapsed && <Text style={styles.buttonText}>Fund. Analysis</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, activeTab === 'watchlist' && styles.activeButton]}
        onPress={() => setActiveTab('watchlist')}>
        <Ionicons name="stats-chart-outline" size={20} color="white" />
        {!collapsed && <Text style={styles.buttonText}>Predicton</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, activeTab === 'settings' && styles.activeButton]}
        onPress={() => setActiveTab('settings')}>
        <Ionicons name="settings-outline" size={20} color="white" />
        {!collapsed && <Text style={styles.buttonText}>Settings</Text>}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#121212',
    borderRightWidth: 1,
    borderRightColor: '#333',
    paddingVertical: 20,
    paddingHorizontal: 12,
    height: '100%',
  },
  toggleButton: {
    alignSelf: 'flex-end',
    padding: 6,
    marginBottom: 20,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 4,
  },
  activeButton: {
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 12,
    color: 'white',
  },
});

export default SideNavBar;
