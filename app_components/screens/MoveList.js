import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Tag from './screen_components/Tag';
import MoveListItem from './screen_components/MoveListItem';
import ImageCard from './screen_components/ImageCard'
const { height, width } = Dimensions.get('window')


class MoveList extends React.Component {
  render() {
    return (
    <View style={{ flex:1, paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>



     <ScrollView>

      <MoveListItem width={width}
          name="CorkRodeo Twist"
          type="PRO"
          price={'Free'}
          rating={4}
          Image={require('../screens/images/corkrodeo.png')}
      />

      <MoveListItem width={width}
          name="Triple Cork"
          type="PRO"
          price={'Free'}
          rating={3}
          Image={require('../screens/images/triplecork.png')}
      />


      <MoveListItem width={width}
          name="Snapu Swipe"
          type="PRO"
          price={'Free'}
          rating={6}
          Image={require('../screens/images/snapuswipe.png')}
      />

      <MoveListItem width={width}
          name="The ShurikenCutter"
          type="GOLD"
          price={'1$'}
          rating={7}
          Image={require('../screens/images/shurikencutter.png')}
      />

      <MoveListItem width={width}
          name="CorkRodeo Twist"
          type="PRO"
          price={'Free'}
          rating={4}
          Image={require('../screens/images/corkrodeo.png')}
      />

      <MoveListItem width={width}
          name="Triple Cork"
          type="PRO"
          price={'Free'}
          rating={3}
          Image={require('../screens/images/triplecork.png')}
      />


      <MoveListItem width={width}
          name="Snapu Swipe"
          type="PRO"
          price={'Free'}
          rating={6}
          Image={require('../screens/images/snapuswipe.png')}
      />

      <MoveListItem width={width}
          name="The ShurikenCutter"
          type="GOLD"
          price={'1$'}
          rating={7}
          Image={require('../screens/images/shurikencutter.png')}
      />


      <MoveListItem width={width}
          name="CorkRodeo Twist"
          type="PRO"
          price={'Free'}
          rating={4}
          Image={require('../screens/images/corkrodeo.png')}
      />

      <MoveListItem width={width}
          name="Triple Cork"
          type="PRO"
          price={'Free'}
          rating={3}
          Image={require('../screens/images/triplecork.png')}
      />


      <MoveListItem width={width}
          name="Snapu Swipe"
          type="PRO"
          price={'Free'}
          rating={6}
          Image={require('../screens/images/snapuswipe.png')}
      />

      <MoveListItem width={width}
          name="The ShurikenCutter"
          type="GOLD"
          price={'1$'}
          rating={7}
          Image={require('../screens/images/shurikencutter.png')}
      />


      <MoveListItem width={width}
          name="CorkRodeo Twist"
          type="PRO"
          price={'Free'}
          rating={4}
          Image={require('../screens/images/corkrodeo.png')}
      />

      <MoveListItem width={width}
          name="Triple Cork"
          type="PRO"
          price={'Free'}
          rating={3}
          Image={require('../screens/images/triplecork.png')}
      />


      <MoveListItem width={width}
          name="Snapu Swipe"
          type="PRO"
          price={'Free'}
          rating={6}
          Image={require('../screens/images/snapuswipe.png')}
      />

      <MoveListItem width={width}
          name="The ShurikenCutter"
          type="GOLD"
          price={'1$'}
          rating={7}
          Image={require('../screens/images/shurikencutter.png')}
      />


      <MoveListItem width={width}
          name="CorkRodeo Twist"
          type="PRO"
          price={'Free'}
          rating={4}
          Image={require('../screens/images/corkrodeo.png')}
      />

      <MoveListItem width={width}
          name="Triple Cork"
          type="PRO"
          price={'Free'}
          rating={3}
          Image={require('../screens/images/triplecork.png')}
      />


      <MoveListItem width={width}
          name="Snapu Swipe"
          type="PRO"
          price={'Free'}
          rating={6}
          Image={require('../screens/images/snapuswipe.png')}
      />

      <MoveListItem width={width}
          name="The ShurikenCutter"
          type="GOLD"
          price={'1$'}
          rating={7}
          Image={require('../screens/images/shurikencutter.png')}
      />

      <MoveListItem width={width}
          name="CorkRodeo Twist"
          type="PRO"
          price={'Free'}
          rating={4}
          Image={require('../screens/images/corkrodeo.png')}
      />

      <MoveListItem width={width}
          name="Triple Cork"
          type="PRO"
          price={'Free'}
          rating={3}
          Image={require('../screens/images/triplecork.png')}
      />


      <MoveListItem width={width}
          name="Snapu Swipe"
          type="PRO"
          price={'Free'}
          rating={6}
          Image={require('../screens/images/snapuswipe.png')}
      />

      <MoveListItem width={width}
          name="The ShurikenCutter"
          type="GOLD"
          price={'1$'}
          rating={7}
          Image={require('../screens/images/shurikencutter.png')}
      />

      </ScrollView>










      </View>
    );
  }
}

export default MoveList;
