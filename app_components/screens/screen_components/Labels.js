import React from 'react';
import { Text, StyleSheet, View, TouchableNativeFeedback,Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')



export default function Labels({ data, focus }) {
  return <View style={styles.container}>
      {data.map((arc, index) => (
        <TouchableNativeFeedback onPress={() => focus(index)} key={index}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View style={[styles.dot, { backgroundColor: arc.color }]} />
            <View style={styles.listItem}>
              <Text>{arc.title}</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      ))}
    </View>;
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    width:width/2,height: height*2/6,
    left:width/2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'space-between',
    backgroundColor: 'white'
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
});
