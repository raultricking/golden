import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import NavigationR from './components/navigation.js'
import { PieChart } from 'react-native-svg-charts'

class HomeScreen extends React.Component {
  render() {
    return (

        <NavigationR />

    );
  }
}




class ProfileScreen extends React.Component {
  render() {
    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

       const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

       const pieData = data
           .filter(value => value > 0)
           .map((value, index) => ({
               value,
               svg: {
                   fill: randomColor(),
                   onPress: () => console.log('press', index),
               },
               key: `pie-${index}`,
           }))

       return (
         <View style={{
      flex: 1,
      flexDirection: 'column',
    }}>

      <View style={{
        flex: 1,
        backgroundColor: 'cyan',
        marginTop: 23,

      }} >

      <PieChart
          style={ { height: 100 } }
          data={ pieData }
      />
<Text style={{ textAlign: 'center' }}>Raultricking PROFILE</Text>




      </View>

      <View style={{flex: 2, backgroundColor: 'grey',alignItems: 'stretch'}} >
      <Button

        title="Rank Status"
        color="#000"
      />

      <FlatList
               data={[
                 {key: '24.MarcVilla'},
                 {key: '23.Polin'},
                 {key: '22.Raultricking'},
                 {key: '21.RaulGuarna'},
                 {key: '20.Cascarilla'},
                 {key: '19.Michael Guthrie'},
                 {key: '19.JosuperezV'},
                 {key: 'Jillian'},
                 {key: 'Jimmy'},
                 {key: 'Julie'},
               ]}
               renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
             />



  </View>

      <View style={{flex: 2, backgroundColor: 'grey'}} >

      <Button

        title="Uploads"
        color="#000"
      />

      <Image
           style={{flex: 1}}
           source={{uri: 'https://i.ytimg.com/vi/2GrjUfnhVZ0/maxresdefault.jpg'}}
         />

        </View>
    </View>
       )
  }
}

class OptionsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}



class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Ranking') {
    iconName = `ios-flame`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Perfil') {
    iconName = `ios-body`;
  } else if (routeName === 'Opciones') {
    iconName = `ios-options`;
  }


  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Ranking: { screen: HomeScreen },
      Perfil: { screen: ProfileScreen },
      Opciones: {screen: OptionsScreen}
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#f4511e',
        inactiveTintColor: 'gray',
      },
    }
  )
);


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 40,
  },
})
