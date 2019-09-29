import React, {
  Component
} from "react";
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
import MoveHighlight from './screen_components/MoveHighlight';
import ImageCard from './screen_components/ImageCard'
const { height, width } = Dimensions.get('window')

class Catalogue extends React.Component {



  componentWillMount() {

        this.scrollY = new Animated.Value(0)



        if (Platform.OS == 'android') {
            this.startHeaderHeight = 25 + StatusBar.currentHeight
            this.endHeaderHeight = 0
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        })
        this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [50, 30],
            extrapolate: 'clamp'
        })


    }



  render() {
    return (






<SafeAreaView style={{ flex: 1 }}>


                     <View style={{ flex: 1 }}>


                         <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>

                             <Animated.View
                                 style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity, justifyContent: 'center' }}>


                                 <Tag onPress={() => this.props.navigation.navigate('move_list')}  name="PRO" />
                                 <Tag onPress={() => this.props.navigation.navigate('move_list')}  name="ADVANCED" />
                                 <Tag onPress={() => this.props.navigation.navigate('move_list')}  name="MEDIUM" />
                                 <Tag onPress={() => this.props.navigation.navigate('move_list')}  name="BEGGINER" />

                             </Animated.View>

                         </Animated.View>



                         <ScrollView
                                scrollEventThrottle={16}
                                bounce={true}
                                onScroll={Animated.event(
                                                     [
                                                         { nativeEvent: { contentOffset: { y: this.scrollY } } }
                                                     ]
                                                 )}
                                             >





                                             <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 0, marginTop: 10 }}>


                                             <View style={{ marginTop: 0, paddingHorizontal: 20 }}>


                                                         <View style={{ width: width - 40, height: 200, marginTop: 7, }}>


                                                             <Image
                                                                 style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 7, borderWidth: 1, borderColor: '#dddddd' }}
                                                                 source={require('../screens/images/prolevel.jpg')}
                                                             />



                                                     </View>
                                                    </View>

                                                    </View>





                                                 <View style={{ marginTop: 20 }}>
                                                     <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                                         The Best Tricks around the world
                                                     </Text>
                                                     <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>






                                                         <MoveHighlight width={width}
                                                             name="CorkRodeo Twist"
                                                             type="PRO"
                                                             price={'Free'}
                                                             rating={4}
                                                             Image={require('../screens/images/corkrodeo.png')}
                                                         />

                                                         <MoveHighlight width={width}
                                                             name="Triple Cork"
                                                             type="PRO"
                                                             price={'Free'}
                                                             rating={3}
                                                             Image={require('../screens/images/triplecork.png')}
                                                         />


                                                         <MoveHighlight width={width}
                                                             name="Snapu Swipe"
                                                             type="PRO"
                                                             price={'Free'}
                                                             rating={6}
                                                             Image={require('../screens/images/snapuswipe.png')}
                                                         />

                                                         <MoveHighlight width={width}
                                                             name="The ShurikenCutter"
                                                             type="GOLD"
                                                             price={'1$'}
                                                             rating={7}
                                                             Image={require('../screens/images/shurikencutter.png')}
                                                         />





                                                 </View>
                                                 </View>



                                                 <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 0, marginTop: 10 }}>


                                                 <View style={{ marginTop: 0, paddingHorizontal: 20 }}>


                                                             <View style={{ width: width - 40, height: 200, marginTop: 7 }}>
                                                                 <Image
                                                                     style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 7, borderWidth: 1, borderColor: '#dddddd' }}
                                                                     source={require('../screens/images/prolevel.jpg')}
                                                                 />

                                                         </View>
                                                        </View>

                                                        </View>





                                                     <View style={{ marginTop: 20 }}>
                                                         <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                                             Amateur level... Keep Pushing!
                                                         </Text>
                                                         <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>



                                                             <MoveHighlight width={width}
                                                                 name="CorkRodeo Twist"
                                                                 type="PRO"
                                                                 price={'Free'}
                                                                 rating={4}
                                                                 Image={require('../screens/images/corkrodeo.png')}
                                                             />

                                                             <MoveHighlight width={width}
                                                                 name="Triple Cork"
                                                                 type="PRO"
                                                                 price={'Free'}
                                                                 rating={3}
                                                                 Image={require('../screens/images/triplecork.png')}
                                                             />


                                                             <MoveHighlight width={width}
                                                                 name="Snapu Swipe"
                                                                 type="PRO"
                                                                 price={'Free'}
                                                                 rating={6}
                                                                 Image={require('../screens/images/snapuswipe.png')}
                                                             />

                                                             <MoveHighlight width={width}
                                                                 name="The ShurikenCutter"
                                                                 type="GOLD"
                                                                 price={'1$'}
                                                                 rating={7}
                                                                 Image={require('../screens/images/shurikencutter.png')}
                                                             />


                                                     </View>
                                                     </View>



                                                     <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 0, marginTop: 10 }}>


                                                     <View style={{ marginTop: 0, paddingHorizontal: 20 }}>


                                                                 <View style={{ width: width - 40, height: 200, marginTop: 7 }}>
                                                                     <Image
                                                                         style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 7, borderWidth: 1, borderColor: '#dddddd' }}
                                                                         source={require('../screens/images/prolevel.jpg')}
                                                                     />

                                                             </View>
                                                            </View>

                                                            </View>





                                                         <View style={{ marginTop: 20 }}>
                                                             <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                                                 Start your way with this begginer tricks.
                                                             </Text>
                                                             <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>





                                                                 <MoveHighlight width={width}
                                                                     name="CorkRodeo Twist"
                                                                     type="PRO"
                                                                     price={'Free'}
                                                                     rating={4}
                                                                     Image={require('../screens/images/corkrodeo.png')}
                                                                 />

                                                                 <MoveHighlight width={width}
                                                                     name="Triple Cork"
                                                                     type="PRO"
                                                                     price={'Free'}
                                                                     rating={3}
                                                                     Image={require('../screens/images/triplecork.png')}
                                                                 />


                                                                 <MoveHighlight width={width}
                                                                     name="Snapu Swipe"
                                                                     type="PRO"
                                                                     price={'Free'}
                                                                     rating={6}
                                                                     Image={require('../screens/images/snapuswipe.png')}
                                                                 />

                                                                 <MoveHighlight width={width}
                                                                     name="The ShurikenCutter"
                                                                     type="GOLD"
                                                                     price={'1$'}
                                                                     rating={7}
                                                                     Image={require('../screens/images/shurikencutter.png')}
                                                                 />


                                                         </View>
                                                         </View>



                                             </ScrollView>

































                     </View>

</SafeAreaView>













    );
  }
}

export default Catalogue;
