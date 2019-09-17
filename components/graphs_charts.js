import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import NavigationR from './components/navigation.js';

import Pie from 'react-native-pie';
import { PieChart } from 'react-native-svg-charts'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
 <Text>Pie Chart Example</Text>
   <Pie
     radius={70}
     series={[56, 11, 77]}
     colors={['yellow', 'green', 'orange']}
   />
   <Text>Solid/Filled Pie Chart</Text>
   <Pie
     radius={70}
     innerRadius={40}
     series={[10, 20, 30, 40]}
     colors={['#f00', '#0f0', '#00f', '#ff0']}
   />
   <Text>Donut Pie Chart</Text>
   <View>
     <Pie
       radius={70}
       innerRadius={65}
       series={[55]}
       colors={['#f00']}
       backgroundColor="#ddd"
     />
     <View style={styles.gauge}>
       <Text style={styles.gaugeText}>55%</Text>
     </View>
     <Text>Gauge Pie Chart</Text>
   </View>
 </View>
    );
  }
}

class SettingsScreen extends React.Component {
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
           <PieChart
               style={ { height: 200 } }
               data={ pieData }
           />
       )
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop:30,
  },
  gauge: {
    position: 'absolute',
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});
