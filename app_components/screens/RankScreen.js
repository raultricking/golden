import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Image, SafeAreaView, ScrollView, Dimensions, SectionList,Animated, TouchableWithoutFeedback, Easing } from 'react-native';
import { Container, Content, Header, Right, Left, Body, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems  } from 'react-navigation-drawer';


  {/*------------------------------------------------------ addons---------------------------------------------------------*/}
import ImageCard from './screen_components/ImageCard';
import RankUser from './screen_components/RankUser';


  {/*------------------------------------------------------ TEST DATA---------------------------------------------------------*/}
  const ranking_data = [
  {
    level: 'PRO',
    data: [
      {position: '1',
       name: 'Michael Guthrie',
       xp:'8732'
      },
      {position: '2',
       name: 'Shosei Iwamoto',
       xp:'8732'
      },
      {position: '3',
       name: 'AnderserTrickz',
       xp:'8732'
      },
      {position: '4',
       name: 'Cork Corksson',
       xp:'8732'
      },
      {position: '5',
       name: 'Ali Gudiev',
       xp:'8732'
      },
      {position: '6',
       name: 'AlexD',
       xp:'8732'
      },
      {position: '7',
       name: 'Laurent Arrabito',
       xp:'8732'
      },
      {position: '8',
       name: 'Sam Kojo',
       xp:'8732'
      },
      {position: '9',
       name: 'Matteo Dcara',
       xp:'8732'
      },
      {position: '10',
       name: 'JJ Battel',
       xp:'8732'
      },
      {position: '11',
       name: 'Galaicostunts',
       xp:'8732'
      },
      {position: '12',
       name: 'Kyotto',
       xp:'8732'
      },
      {position: '13',
       name: 'DlBlando',
       xp:'8732'
      },
      {position: '14',
       name: 'CtanganaTricker',
       xp:'8732'
      },
      {position: '15',
       name: 'ElreY',
       xp:'8732'
      },
      {position: '16',
       name: 'AliG',
       xp:'8732'
      }
    ]
  },
  {
    level: 'ADVANCED',
    data: [
      {position: '1',
       name: 'MarcVilla',
       xp:'8732'
      },
      {position: '2',
       name: 'Rua M2s',
       xp:'8732'
      },
      {position: '3',
       name: 'Raul Guarna',
       xp:'8732'
      },
      {position: '4',
       name: 'Polin',
       xp:'8732'
      },
      {position: '5',
       name: 'Raultricking',
       xp:'8732'
      },
      {position: '6',
       name: 'JosuperezV',
       xp:'8732'
      },
      {position: '7',
       name: 'PedroPT',
       xp:'8732'
      },
      {position: '8',
       name: 'Noah Tricker',
       xp:'8732'
      },
      {position: '9',
       name: 'izanworkbook',
       xp:'8732'
      },
      {position: '10',
       name: 'Rekaro',
       xp:'8732'
      },
      {position: '11',
       name: 'Lavalle',
       xp:'8732'
      },
      {position: '12',
       name: 'OSwaldo',
       xp:'8732'
      },
      {position: '13',
       name: 'Reiki',
       xp:'8732'
      },
      {position: '14',
       name: 'Hector',
       xp:'8732'
      },
      {position: '15',
       name: 'Bryan',
       xp:'8732'
      },
      {position: '16',
       name: 'Toreto',
       xp:'8732'
      },
      {position: '17',
       name: 'JOseph',
       xp:'8732'
      },
      {position: '18',
       name: '00_Brain',
       xp:'8732'
      },
      {position: '19',
       name: 'BugGlith',
       xp:'8732'
      },
      {position: '20',
       name: 'NO_pain',
       xp:'8732'
      },
      {position: '21',
       name: 'ScareShit',
       xp:'8732'
      }
    ]
  },
  {
    level: 'BEGGINER',
    data: [
      {position: '1',
       name: 'Abel_Cavessa',
       xp:'8732'
      },
      {position: '2',
       name: 'Xoel_m2s',
       xp:'8732'
      },
      {position: '3',
       name: 'josue_porros',
       xp:'8732'
      },
      {position: '4',
       name: 'VieitesBem',
       xp:'8732'
      },
      {position: '5',
       name: 'ChechuSankuas',
       xp:'8732'
      },
      {position: '6',
       name: 'IzanLavalle',
       xp:'8732'
      },
      {position: '7',
       name: 'ScareCrow',
       xp:'8732'
      },
      {position: '8',
       name: 'ELpayasoIT',
       xp:'8732'
      },
      {position: '9',
       name: 'Lumbre',
       xp:'8732'
      },
      {position: '10',
       name: 'Ainhoa',
       xp:'8732'
      },
      {position: '11',
       name: 'Mequiereestapava',
       xp:'8732'
      },
      {position: '12',
       name: 'Ornamente',
       xp:'8732'
      },
      {position: '13',
       name: 'SanacionDeAlma',
       xp:'8732'
      },
      {position: '14',
       name: 'Airbnb',
       xp:'8732'
      },
      {position: '15',
       name: 'Rastreator',
       xp:'8732'
      },
      {position: '16',
       name: 'ToretoV&',
       xp:'8732'
      },
      {position: '17',
       name: 'JOsephoGato',
       xp:'8732'
      },
      {position: '18',
       name: '00_GlitchMob',
       xp:'8732'
      },
      {position: '19',
       name: 'S14a',
       xp:'8732'
      },
      {position: '20',
       name: 'S15silvia',
       xp:'8732'
      },
      {position: '21',
       name: '350_z_nismo',
       xp:'8732'
      }
    ]
  }
  ]


class RankScreen extends React.Component {


_renderLevels(item){
  return (
    <View style={styles.levels}>
    <Header style={styles.levelsHeader}>


    <Text style={styles.levelsHeaderText}>{item.level}</Text>


    </Header>
      <FlatList
        data={item.data}
        renderItem={({item}) => this._renderRankUsers(item)}
        keyExtractor={item => item.position}
      />
    </View>
  )
}

_renderRankUsers(item){
  return(

  <View  style={{flex:1, flexDirection: 'row'}}>
  <Text style={styles.levelsUsersText}  onPress={() => this.props.navigation.navigate('Profile')}>{item.position}.{item.name}</Text>
  <Text style={styles.levelsUsersText}  onPress={() => this.props.navigation.navigate('Profile')}>{item.xp}</Text>
  </View >


  )
}





  render() {

    {/*------------------------------------------------------ANIMATIONS SETUP---------------------------------------------------------*/}

    let scaleValue= new Animated.Value(0);

    const cardScale = scaleValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [1, 0.9, 0.8]
        });

     let transformStyle = { ...styles.card, transform: [{ scale: cardScale }] };

{/*------------------------------------------------------ANIMATIONS SETUP---------------------------------------------------------*/}












    return (
      <View style={{flex: 1}}>
{/*------------------------------------------------------MAIN FRAME---------------------------------------------------------*/}


{/*------------------------------------------------------RANKING ZONE---------------------------------------------------------*/}

      <TouchableWithoutFeedback

            onPressIn={() => {
              scaleValue.setValue(0);
              Animated.timing(scaleValue, {
                toValue: 1,
                duration: 400,
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


        <Animated.View style={{flex:6,marginBottom:10,marginTop: 20, transform: [{ scale: cardScale }] }}>
          <FlatList
            horizontal
            ItemSeparatorComponent = {() => <View style={{width: 30}}  />}
            renderItem={({item}) => this._renderLevels(item)}
            keyExtractor={item => item.level}
            data = { ranking_data }
            />
        </Animated.View>

        </TouchableWithoutFeedback>




{/*------------------------------------------------------END OF RANKING ZONE---------------------------------------------------------*/}


{/*------------------------------------------------------SPOTS,PLACES, COMPANIES ZONE----------------------------------------------*/}


        <View style={{flex:3, alignItems: 'center'}}>

          <View style={{flex:2, alignItems: 'center', flexDirection: 'row'}}>
            <Text style={styles.middletext}>
            Spots,Places & Companies
            </Text><Ionicons name='ios-navigate' style={{marginLeft:10}} size={30}/>
          </View>

          <View style={{flex:6, marginTop: 10}}>




                                     <ScrollView
                                         horizontal={true}
                                         showsHorizontalScrollIndicator={false}
                                     >
                                         <ImageCard imageUri={require('../screens/images/urbanplanet.jpg')}
                                             name="UrbanPlanet"
                                         />
                                         <ImageCard imageUri={require('../screens/images/bounce.png')}
                                             name="Bounce"
                                         />
                                         <ImageCard imageUri={require('../screens/images/flicflac.png')}
                                             name="ClubFlicFLac"
                                         />
                                         <ImageCard imageUri={require('../screens/images/castrelos.jpg')}
                                             name="Parque de Castrelos"
                                         />
                                         <ImageCard imageUri={require('../screens/images/samil.jpg')}
                                             name="Playa de Samil"
                                         />


                                     </ScrollView>
                                 </View>









        </View>
      </View>
    );
  }
}
export default RankScreen;





















const styles = StyleSheet.create({

  middletext:

  { fontSize: 20,
  fontWeight: '600'
  },

  levels:
  {
      width: 200,
      borderWidth: 0.5,
      borderColor: '#dddddd',
      marginLeft: 10,
  },

  levelsHeader:
  {
    backgroundColor: 'black',
    height: 40,

  },

  levelsHeaderText:
  {
    color:'white',
    fontSize:20,
    paddingTop:5
  },

  levelsUsersText:
  {
  fontSize: 20,
  paddingTop:10,
  paddingLeft:10,
  },

  text:
  {
   color: 'black'
  },

  item:
  {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
