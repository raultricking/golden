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
import StarRating from 'react-native-star-rating'
const { height, width } = Dimensions.get('window')



class Home extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', borderWidth: 1, borderColor: '#dddddd',marginBottom:10, height: this.props.width / 4 }}>

                <View style={{ flex: 3 }}>
                    <Image
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        source={this.props.Image} />
                </View>


                <View style={{ flex: 5, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>


                    <Text style={{ fontSize: 10, color: '#b63838' }}>{this.props.type}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{this.props.name}</Text>
                    <Text style={{ fontSize: 10 }}>{this.props.price}</Text>
                    <StarRating
                        disable={false}
                        maxStars={7}
                        rating={this.props.rating}
                        starSize={10}

                    />




                </View>
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
