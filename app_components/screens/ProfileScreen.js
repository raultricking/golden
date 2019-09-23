import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Container, Content, Header, Right, Left, Body, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems  } from 'react-navigation-drawer';


class ProfileScreen extends React.Component {
static navigationOptions= ({ navigation }) => ({
title: "Profile",
drawerIcon: () => <Ionicons name='ios-body' size={24} />
});



  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="USER PROFILE HERE"
      />
    );
  }
}

export default ProfileScreen;
