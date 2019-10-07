
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








                                                        <Pie
                                                          ref={this.pie}
                                                          containerStyle={{

                                                            alignItems:'flex-start',
                                                            alignContent:'flex-start',
                                                           justifyContent:'flex-start',


                                                          }}
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

                                                        <MyLabels/>
                                                        </Pie>
