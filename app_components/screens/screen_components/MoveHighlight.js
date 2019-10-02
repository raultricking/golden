import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import StarRating from 'react-native-star-rating'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


class MoveHighlight extends Component {
    render() {
        return (
            <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2 - 45, borderWidth: 0.5, borderRadius: 7, borderColor: '#dddddd',marginBottom:10 }}>

                <View style={{ flex: 10 }}>

                <ImageBackground
                source={this.props.image}
                style={{flex:1}}
                >

                <View style={{ flex: 1,flexDirection:'row',alignItems: 'flex-end', alignContent:'flex-end',borderRadius:20}}>

                <View style={{ flex: 1,borderRadius:20,flexDirection:'row',alignItems: 'flex-end', justifyContent:'flex-end'}}>


                <TouchableOpacity
                  onPress={this.props.onPress}
                  >
                <View style={{borderRadius:20,flexDirection:'row',alignItems: 'flex-end', justifyContent:'flex-end',backgroundColor: 'rgba(0, 0, 0, 0.37)'}}>

                  <MaterialIcons name='person' size={17} style={{color:'white',paddingBottom:3}} />
                  <Text  style={{ fontSize: 10, color: 'white', fontWeight: '400',borderRadius:20,paddingTop:3,paddingLeft:1,paddingRight:3,paddingBottom:3 }}>{this.props.trickername}</Text>


                    </View>

                        </TouchableOpacity>
                  </View>
                </View>




                  </ImageBackground>




                </View>

                <View style={{ flex: 7, alignItems: 'flex-start', justifyContent: 'space-between',alignItems: 'stretch' }}>


                          <View style={{ flex: 3, flexDirection: 'row', paddingTop: 3, paddingLeft: 10, paddingRight: 5, justifyContent: 'space-between' }}>

                              <Text style={{ fontSize: 11, color: '#03a9f4' }}>{this.props.type}</Text>


                          </View>


                          <View style={{ flex: 7, alignItems: 'flex-start',justifyContent: 'space-between', flexDirection: 'column',paddingLeft: 10 }}>

                              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{this.props.trickname}</Text>
                              <StarRating
                                  disable={false}
                                  maxStars={7}
                                  rating={this.props.rating}
                                  starSize={10}

                              />




                                                    <Text style={{ fontSize: 10 }}>{this.props.price}</Text>

                          </View>


                </View>
            </View>
        );
    }
}
export default MoveHighlight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
