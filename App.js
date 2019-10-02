import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Container, Content, Header, Right, Left, Body, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems  } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';



{/*
  IMPORTS FROM ALL SCREENS  -.------------------------------------------------------------------------------------------------
*/}



import NavigationR from './templates/navigation.js';
import ProfileScreen from './app_components/screens/ProfileScreen';
import FeedScreen from './app_components/screens/FeedScreen';
import RankScreen from './app_components/screens/RankScreen';
import NotificationsScreen from './app_components/screens/NotificationsScreen';
import SettingsScreen from './app_components/screens/SettingsScreen';
import Example from "./app_components/screens/Example";
import Catalogue from "./app_components/screens/Catalogue";
import MoveList from "./app_components/screens/MoveList";

{/*
  ICON UTILS ----------------------------------------------------------------------------------------------------------------------
*/}


class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={styles.IconBadge}>

        <Ionicons name={name} size={size} color={color} />

        {badgeCount > 0 &&
          (
            <View style={styles.IconBadgeView}>
            <Text style={styles.IconBadgeText }>
              {badgeCount}
            </Text>
            </View>
        )}

      </View>
    );
  }
}


const MoveIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={1} />;
};

const NotificationsIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={7} />;
};


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Movement') {
    iconName = `md-cloud-outline`;
    // We want to add badges to home tab icon
    IconComponent = MoveIconWithBadge;
  } else if (routeName === 'Feed') {
    iconName = `md-eye`;
  } else if (routeName === 'Ranking') {
    iconName = `ios-flame`;
  } else if (routeName === 'Notifications') {
    iconName = `ios-notifications`;
    IconComponent = NotificationsIconWithBadge
  } else if (routeName === 'Profile') {
    iconName = `ios-body`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};




{/*
-------------------------------------------------------------------------------------------------------------
*/}







{/*
  AUTHENTIFICATION STACK  -------------------------------------------------------------------------------------------------------------
*/}



const AuthStack = createStackNavigator({
  Landing: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Landing"
    }
  },
  SignIn: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Sign In"
    }
  },
  CreateAccount: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Create Account"
    }
  },
  ForgotPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Forgot Password"
    }
  },
  ResetPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Reset Password"
    }
  }
});

{/*
STUDYSTACK--------------------------------------------------------------------------------------------------------
*/}


const MovementStack = createStackNavigator({
  catalogue: {
    screen: Catalogue,
    navigationOptions: {
      headerTitle: "The World of Movement☘"
    }
  },
  move_list: {
    screen: MoveList,
    navigationOptions: {
      headerTitle: "All movements ⚡"
    }
  },
  movement: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Movement"
    }
  }
});


{/*
STUDYSTACK--------------------------------------------------------------------------------------------------------
*/}

const RankStack = createStackNavigator({
  Ranking: {
    screen: RankScreen,
    navigationOptions: {
      headerTitle: "Ranking",
    }
  },
  Other: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Movement"
    }
  }
});

{/*
  PROFILE PAGES STACK NAVIGATOR  -.------------------------------------------------------------------------------------------------
*/}

const ProfileStack = createStackNavigator({
  Profile_main: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Profile Main',
    },
  },
  Profile_others: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Profile Others',
    },
  },
}

);

{/*
  SETTINGS PAGES STACK NAVIGATOR  -.------------------------------------------------------------------------------------------------
*/}

const SettingsStack = createStackNavigator({
  Settings_main: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Settings Main',
    },
  },
  Settings_others: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Settings Others',
    },
  },
});












{/*
  USER TAB ( DRAWER NAVIGATOR + STACK NAVIGATORS )  -.------------------------------------------------------------------------------------------------
*/}

{/*
  CUSTOM DRAWER CONFIG  -.------------------------------------------------------------------------------------------------
*/}
const customNavigator = (props) => (
<SafeAreaView style={styles.DrawerSafeArea}>
<View style={styles.DrawerHeader}>
<Ionicons name='md-infinite' style={styles.DrawerImage} size={70}/>
</View>
<ScrollView>
  <DrawerNavigatorItems {...props} />
</ScrollView>
</SafeAreaView>

)

{/*
  USER TAB MAIN DRAWER NAVIGATOR  -.------------------------------------------------------------------------------------------------
*/}


const UserScreen = createDrawerNavigator(
  {
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        drawerLabel: 'Profile',
        drawerIcon: () =>  <Ionicons name='ios-body' size={25}  />
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        drawerIcon: () =>  <Ionicons name='ios-settings' size={25} />
      }
    }
  },
  {

      contentComponent: customNavigator,
      drawerPosition: 'right',
      drawerWidth: 250,


  }
);




















{/*
  APP NAVIGATOR USING BOTTOMNAVIGATION  -.------------------------------------------------------------------------------------------------
*/}

const AppModalStack =
  createBottomTabNavigator(
    {
      Movement: {screen: MovementStack},
      Feed:{screen: FeedScreen},
      Ranking: { screen: RankStack },
      Notifications: { screen: NotificationsScreen },
      Profile: {screen: UserScreen}
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
  tabBarOptions: {
        activeTintColor: '#0288d1',
        inactiveTintColor: 'black',

      },
    }

);



{/*
MAIN SWTICH NAVIGATOR -.------------------------------------------------------------------------------------------------
*/}


const App = createSwitchNavigator({
  Loading: {
    screen: Example
  },
  Auth: {
    screen: AuthStack
  },
  App: {
    screen: AppModalStack
  }
});

export default createAppContainer(App);




































{/*
  styles -.------------------------------------------------------------------------------------------------
*/}


const styles = StyleSheet.create({
  IconBadge: {
     width: 24,
     height: 24,
     margin: 5
  },
  IconBadgeView: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'black',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconBadgeText: {
    color: '#4fc3f7',
    fontSize: 10,
    fontWeight: 'bold'
  },
  DrawerImage: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DrawerHeader: {
  height: 140,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  },
  DrawerSafeArea: {
flex: 1

  }
})
