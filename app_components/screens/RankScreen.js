import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Image, SafeAreaView, ScrollView, Dimensions, SectionList } from 'react-native';
import { Container, Content, Header, Right, Left, Body, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems  } from 'react-navigation-drawer';
import { withNavigation } from 'react-navigation';





const ranking_data = [
{
  level: 'PRO',
  data: [
    {position: '1',
     name: 'Michael Guthrie'
    },
    {position: '2',
     name: 'Shosei Iwamoto'
    },
    {position: '3',
     name: 'AnderserTrickz'
    },
    {position: '4',
     name: 'Cork Corksson'
    },
    {position: '5',
     name: 'Ali Gudiev'
    },
    {position: '6',
     name: 'AlexD'
    },
    {position: '7',
     name: 'Laurent Arrabito'
    },
    {position: '8',
     name: 'Sam Kojo'
    },
    {position: '9',
     name: 'Matteo Dcara'
    },
    {position: '10',
     name: 'JJ Battel'
    },
    {position: '11',
     name: 'Galaicostunts'
    },
    {position: '12',
     name: 'Kyotto'
    },
    {position: '13',
     name: 'DlBlando'
    },
    {position: '14',
     name: 'CtanganaTricker'
    },
    {position: '15',
     name: 'ElreY'
    },
    {position: '16',
     name: 'AliG'
    }
  ]
},
{
  level: 'ADVANCED',
  data: [
    {position: '1',
     name: 'MarcVilla'
    },
    {position: '2',
     name: 'Rua M2s'
    },
    {position: '3',
     name: 'Raul Guarna'
    },
    {position: '4',
     name: 'Polin'
    },
    {position: '5',
     name: 'Raultricking'
    },
    {position: '6',
     name: 'JosuperezV'
    },
    {position: '7',
     name: 'PedroPT'
    },
    {position: '8',
     name: 'Noah Tricker'
    },
    {position: '9',
     name: 'izanworkbook'
    },
    {position: '10',
     name: 'Rekaro'
    },
    {position: '11',
     name: 'Lavalle'
    },
    {position: '12',
     name: 'OSwaldo'
    },
    {position: '13',
     name: 'Reiki'
    },
    {position: '14',
     name: 'Hector'
    },
    {position: '15',
     name: 'Bryan'
    },
    {position: '16',
     name: 'Toreto'
    },
    {position: '17',
     name: 'JOseph'
    },
    {position: '18',
     name: '00_Brain'
    },
    {position: '19',
     name: 'BugGlith'
    },
    {position: '20',
     name: 'NO_pain'
    },
    {position: '21',
     name: 'ScareShit'
    }
  ]
},
{
  level: 'BEGGINER',
  data: [
    {position: '1',
     name: 'Abel_Cavessa'
    },
    {position: '2',
     name: 'Xoel_m2s'
    },
    {position: '3',
     name: 'josue_porros'
    },
    {position: '4',
     name: 'VieitesBem'
    },
    {position: '5',
     name: 'ChechuSankuas'
    },
    {position: '6',
     name: 'IzanLavalle'
    },
    {position: '7',
     name: 'ScareCrow'
    },
    {position: '8',
     name: 'ELpayasoIT'
    },
    {position: '9',
     name: 'Lumbre'
    },
    {position: '10',
     name: 'Ainhoa'
    },
    {position: '11',
     name: 'Mequiereestapava'
    },
    {position: '12',
     name: 'Ornamente'
    },
    {position: '13',
     name: 'SanacionDeAlma'
    },
    {position: '14',
     name: 'Airbnb'
    },
    {position: '15',
     name: 'Rastreator'
    },
    {position: '16',
     name: 'ToretoV&'
    },
    {position: '17',
     name: 'JOsephoGato'
    },
    {position: '18',
     name: '00_GlitchMob'
    },
    {position: '19',
     name: 'S14a'
    },
    {position: '20',
     name: 'S15silvia'
    },
    {position: '21',
     name: '350_z_nismo'
    }
  ]
}
]




class RankScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      dataSource: []
    }
  }

  componentDidMount() {
    const url='http://178.60.19.156:5000/ranks'
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource : responseJson.result
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  _renderLevels(item){
  return (
    <View style={styles.levels}>
    <Header style={{backgroundColor: 'black', height: 40 }}>
    <Text style= {{color:'white', fontSize:20, marginTop: 10}}>{item.level}</Text>
    </Header>
      <FlatList
        data={item.data}
        renderItem={({item}) => this._renderRank(item)}
        keyExtractor={item => item.position}
      />
    </View>
  )
}

_renderRank(item){
  return(
    <Text style={{fontSize: 20,marginTop:10}}  onPress={() => this.props.navigation.navigate('Profile')}>{item.position}.{item.name}</Text>
  )
}


  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex:3, marginTop: 20, marginBottom: 20}}>
          <FlatList
            horizontal
            ItemSeparatorComponent = {() => <View style={{width: 30}}  />}
            renderItem={({item}) => this._renderLevels(item)}
            keyExtractor={item => item.level}
            data = { this.state.dataSource }
            />
        </View>

        <View style={{flex:2}}>
          <Text>Aquí gente que mas puntos ha ganado recientemente</Text>
        </View>




        </View>
    );
  }
}
export default RankScreen;


const styles = StyleSheet.create({
  levels:
  {
    width: 200

  },
  eachrank:
  {


  },
  text:
  {
   color: 'black'
  },
  sectionHeader:
  {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item:
  {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
