const UserScreen = createDrawerNavigator(
  {
  Profile: ProfileStack,
  Settings: SettingsStack,
},
{
contentComponent: customNavigator,
drawerPosition: 'right',
drawerWidth: 250,


}

);
