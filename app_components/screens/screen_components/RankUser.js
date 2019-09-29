import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Image, SafeAreaView, ScrollView, Dimensions, SectionList,Animated, TouchableWithoutFeedback, Easing } from 'react-native';
import { Container, Content, Header, Right, Left, Body, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems  } from 'react-navigation-drawer';



class RankUser extends React.Component {
    render() {
        return (
          <View  style={{}}>
          <Text style={styles.levelsUsersText}  >{this.props.position}.{this.props.name}</Text>
          <Text style={{fontSize:5,paddingTop:1}} >{this.props.points}</Text>

          </View>



        );
    }
}
export default RankUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
