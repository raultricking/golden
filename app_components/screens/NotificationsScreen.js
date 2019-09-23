import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Container, Content, Header, Right, Left, Body, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems  } from 'react-navigation-drawer';


class NotificationsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>NotificationsScreen!</Text>
      </View>
    );
  }
}

export default NotificationsScreen;
