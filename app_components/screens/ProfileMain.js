import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Image, SafeAreaView, ScrollView, Dimensions, ImageBackground,TouchableNativeFeedback,Platform,TouchableOpacity,Constants } from 'react-native';
import { Container, Content, Header, Right, Left, Body, Icon } from 'native-base'
import { MaterialIcons,Entypo } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems  } from 'react-navigation-drawer';

import Pie from 'react-native-fab-pie';
const { height, width } = Dimensions.get('window')

import Animated from 'react-native-reanimated';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import MoveHighlight from './screen_components/MoveHighlight';
import ProfileGraph from './screen_components/ProfileGraph';







const SecondRoute = () => (


<View style={{flex:1,
justifyContent: 'flex-start',
alignItems: 'flex-start',
alignContent: 'flex-start',
flex: 1,
flexDirection: 'row'}} >

<MoveHighlight width={width}
    trickname="ShurikenCutter"
    trickername="Jacob Pinto"
    type="GOLD"
    price={'1$'}
    rating={7}
    image={require('../screens/images/shurikencutter.png')}
    onPress={() => this.props.navigation.navigate('Profile')}
/>


  </View>
);


















const getProfileTabViewIcon = (route, focused, color) => {

  let routeName=route.key;
  let iconName;
  let IconComponent = MaterialIcons;

  if (routeName === 'TrickStats') {

          focused ? (iconName = `pie-chart`) : (iconName = `pie-chart-outlined`)
          IconComponent = MaterialIcons;

  } else if (routeName === 'Description') {

          focused ? (iconName = `info`) : (iconName = `info-outline`)
          IconComponent = MaterialIcons;

  } else if (routeName === 'Ranking') {

          focused ? (iconName = `star`) : (iconName = `star-outlined`)
          IconComponent = Entypo;

  } else if (routeName === 'Others') {

          focused ? (iconName = `heart`) : (iconName = `heart-outlined`)
          IconComponent = Entypo;

  }

  return <IconComponent name={iconName} size={22} color={'black'} style={{ marginTop:0,paddingTop:0,}} />;
};






















class ProfileMain extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'TrickStats', title: 'Trick_Stats' },
      { key: 'Description', title: '_Description' },
      { key: 'Ranking', title: '_Ranking' },
      { key: 'Others', title: '_Others' },
    ],
  };





  _renderScene = SceneMap({
    TrickStats: ProfileGraph,
    Description: SecondRoute,
    Ranking: SecondRoute,
    Others: SecondRoute,
  });



 _handleIndexChange = index => this.setState({ index });












  render() {
    return (



      <View style={{flex:1,flexDirection:'column'}} >




      <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
      >





      <View style={{
        flex:2,
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems:'flex-start',
        alignContent:'flex-start',
        justifyContent:'flex-start',}} >





        <TabView
              style={{backgroundColor:'white'}}
              navigationState={this.state}
              renderScene={this._renderScene}
              tabStyle={{backgroundColor:'white'}}
              onIndexChange={this._handleIndexChange}
              renderTabBar={props =>
                          <TabBar
                            {...props}
                            showLabel={false}
                            renderLabel={({ route, focused, color }) => (
                              <Text style={{ color, margin: 0,position:'absolute',top:0,left:0 }}>
                              {route.title}
                              </Text>
                            )}

                            indicatorStyle={{ backgroundColor: 'black' }}
                            style={{flex:1,flexDirection:'column', backgroundColor: 'white', height: height/(2*8), alignContent: 'center',justifyContent: 'center', aligntItems: 'center',marginTop:0,paddingTop:0}}
                            renderIcon= {({ route, focused, color }) => getProfileTabViewIcon(route, focused, color)}
                          />
                        }
                        />





















                </View>














                    <View style={{flex:4,flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'flex-start',alignItems:'stretch', }} >




                          <View style={{flex:1,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',alignItems:'stretch', }} >


                          <MoveHighlight width={width}
                              trickname="CorkRodeo Twist"
                              trickername="Michael Guthrie"
                              type="PRO"
                              price={'Free'}
                              rating={4}
                              image={require('../screens/images/corkrodeo.png')}
                              onPress={() => this.props.navigation.navigate('Profile')}
                          />

                          <MoveHighlight width={width}
                              trickname="Triple Cork"
                              trickername="Alexander Andersen"
                              type="PRO"
                              price={'Free'}
                              rating={3}
                              image={require('../screens/images/triplecork.png')}
                              onPress={() => this.props.navigation.navigate('Profile')}

                          />


                          <MoveHighlight width={width}
                              trickname="Snapu Swipe"
                              trickername="Daniel Graham"
                              type="PRO"
                              price={'Free'}
                              rating={6}
                              image={require('../screens/images/snapuswipe.png')}
                              onPress={() => this.props.navigation.navigate('Profile')}
                          />

                          <MoveHighlight width={width}
                              trickname="ShurikenCutter"
                              trickername="Jacob Pinto"
                              type="GOLD"
                              price={'1$'}
                              rating={7}
                              image={require('../screens/images/shurikencutter.png')}
                              onPress={() => this.props.navigation.navigate('Profile')}
                          />



                                  </View>



                    </View>


     </ScrollView>

    </View>

    );
  }
}

export default ProfileMain;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'violet'

  },
  listItem: {
    marginVertical: 0,
    marginRight: 0,
  },
  dot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginHorizontal: 10,
  },
  scene: {
   flex: 1,
 },
 tabBar: {
    flexDirection: 'row',

  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
