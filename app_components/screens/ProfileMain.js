import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Image, SafeAreaView, ScrollView, Dimensions, ImageBackground,TouchableNativeFeedback,Platform,TouchableOpacity,Constants } from 'react-native';
import { Container, Content, Header, Right, Left, Body, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems  } from 'react-navigation-drawer';

import Pie from 'react-native-fab-pie';
const { height, width } = Dimensions.get('window')

import Animated from 'react-native-reanimated';
import { TabView, SceneMap } from 'react-native-tab-view';

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















class ProfileMain extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'TrickStats', title: 'TrickStats' },
      { key: 'Description', title: 'Description' },
      { key: 'Ranking', title: 'Ranking' },
      { key: 'Others', title: 'Others' },
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
              navigationState={this.state}
              renderScene={this._renderScene}
              tabStyle={{backgroundColor:'white'}}
              onIndexChange={this._handleIndexChange}

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
