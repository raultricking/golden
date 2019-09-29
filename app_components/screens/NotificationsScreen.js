import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Container, Content, Header, Right, Left, Body, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems  } from 'react-navigation-drawer';
import { Animated, TouchableWithoutFeedback, Easing} from 'react-native';








class NotificationsScreen extends React.Component {





   render() {
     let scaleValue= new Animated.Value(0);

     const cardScale = scaleValue.interpolate({
           inputRange: [0, 0.5, 1],
           outputRange: [1, 0.9, 0.8]
         });

 let transformStyle = { ...styles.card, transform: [{ scale: cardScale }] };
     return (





       <TouchableWithoutFeedback
             onPressIn={() => {
               scaleValue.setValue(0);
               Animated.timing(scaleValue, {
                 toValue: 1,
                 duration: 250,
                 easing: Easing.linear,
                 useNativeDriver: true
               }).start();


               {/*cardAction();*/}

             }}
             onPressOut={() => {
               Animated.timing(scaleValue, {
                 toValue: 0,
                 duration: 100,
                 easing: Easing.linear,
                 useNativeDriver: true
               }).start();
             }}
           >
             <Animated.View style={transformStyle}>

              <Ionicons name='ios-navigate' style={{marginLeft:10}} size={30}/>
              {/*
               <Image source={item.pic} style={styles.thumbnail} />
               <Text style={styles.name}>{item.name}</Text>
               <View style={styles.icons}>
                 <IconButton
                   icon="search"
                   onPress={() => {
                     viewAction(item.name, item.full_pic);
                   }}
                   data={item}
                 />
                 <IconButton icon="bookmark" onPress={bookmarkAction} data={item} />
                 <IconButton icon="share" onPress={shareAction} data={item} />
               </View>
               */}
             </Animated.View>
           </TouchableWithoutFeedback>
























     );
   }
 }







 const styles = {
   card: {
     width: 120,
     height: 140,
     backgroundColor: "#fafbfc",
     padding: 10,
     margin: 10,
     alignItems: "center"
   },
   name: {
     fontSize: 15,
     color: "#333",
     fontWeight: "bold"
   },
   thumbnail: {
     width: 75,
     height: 75
   },
   icons: {
     marginTop: 10,
     flexDirection: "row",
     justifyContent: "space-between"
   }
 };


export default NotificationsScreen;
