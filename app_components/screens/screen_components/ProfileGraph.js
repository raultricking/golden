import React from 'react';
import { View, Text, Button, Dimensions, Image,TouchableOpacity } from 'react-native';
import Pie from 'react-native-fab-pie';
import Labels from './Labels';
const { height, width } = Dimensions.get('window')

export default class ProfileGraph extends React.PureComponent {
  constructor(props) {
    super(props);
    const data = [100,200,300,200,150];
    const colors = ['9900ef', 'fcb900', '00d084', '4fc3f7','8bc34a'];
    const types = ['Power', 'Style', 'Flow', 'Creativity','Inspiration'];


    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => {
        const toRet = {
          value,
          title: `${types[index]}`,
          color: `#${colors[index]}`,
          key: `pie-${index}`,
        };
        return toRet;
      });
    this.state = {
      pieData,
    };
  }

  componentDidMount() {
    this.pie.current.animate();
  }

  animate = () => {
    this.pie.current.reset().then(this.pie.current.animate);
  };

  pie = React.createRef();

  render() {
    return (
<TouchableOpacity onLongPress={this.animate}>
      <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                alignContent: 'flex-start',
                flex: 1,
                flexDirection: 'row'
              }}
            >

      <Pie
        ref={this.pie}
        containerStyle={{}}
        pieStyle={{
          width:width/2,height: height*2/6
        }}
        outerRadius={80}
        innerRadius={65}
        data={this.state.pieData}
        animate
      >





      <Image
      source={require('./images/user.jpg')}
      onPress={this.animate}
      style={{
        position:'absolute',
        top: ((height * 2 / 6)/2) - (width/2)/4 * 1.2,
        left: ((width/2)/2) - (width/2)/4 * 1.2 ,
        width:(width/2)/2 * 1.2 ,
        height: (width/2)/2 * 1.2,
        resizeMode:'cover',
        borderRadius:(width/2)/4 * 1.2,

      }}
      >


      </Image>



      <Labels/>

      </Pie>


      </View>
      </TouchableOpacity>

    );
  }
}
