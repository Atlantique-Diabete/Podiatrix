import React from 'react';
import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import { Button, ButtonGroup, Text} from 'react-native-elements';
import Tooltip from 'react-native-walkthrough-tooltip';
import { Icon } from 'react-native-elements'
import { Platform, StatusBar } from 'react-native'

class WoundStateScreen extends React.Component {
      
  static test = (navigation) => (Alert.alert(
    'Voulez-vous arrêter le test ?',
    'Les données seront effacées.',
    [
      {
        text: 'Oui',
        onPress: () => { navigation('Home') },
        style: 'cancel',
    },
    {
        text: 'Non',
        onPress: () => console.log('Cancel Pressed'),
    }
    ],
    {cancelable: false},
  ));

static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation
    return {
    title: 'Plaie',
    headerRight: () => (
        <View style={{marginRight: 10}}>
            <Icon style={styles.crossContainer}
                underlayColor='transparent'
                name='cross'
                type='entypo' 
                onPress={() =>  this.test(navigate) }
                color="#fff"
            />
            </View>
      ),
    }
  };

  

  constructor () {
    super()
    this.state = {
      selectedIndex: 0,
      selectedIndex2: 0,
      selectedIndex3: 0,
      selectedIndex4: 0,
      toolTipVisible: false
    }
    this.updateIndex = this.updateIndex.bind(this)
    this.updateIndex2 = this.updateIndex2.bind(this)
    this.updateIndex3 = this.updateIndex3.bind(this)
    this.updateIndex4 = this.updateIndex4.bind(this)
  }

  componentDidMount(){
    this.setState({selectedIndex: this.props.navigation.state.params.footDiabService.gangrene == false ? 0 : 1})
    this.setState({selectedIndex2: this.props.navigation.state.params.footDiabService.abces == false ? 0 : 1})
    this.setState({selectedIndex3: this.props.navigation.state.params.footDiabService.fievre == false ? 0 : 1})
    this.setState({selectedIndex4: this.props.navigation.state.params.footDiabService.sris == false ? 0 : 1})
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    this.props.navigation.state.params.footDiabService.gangrene = selectedIndex == 0 ? false : true
  }
  updateIndex2 (selectedIndex2) {
    this.setState({selectedIndex2})
    this.props.navigation.state.params.footDiabService.abces = selectedIndex2 == 0 ? false : true
  }
  updateIndex3 (selectedIndex3) {
    this.setState({selectedIndex3})
    this.props.navigation.state.params.footDiabService.fievre = selectedIndex3 == 0 ? false : true
  }
  updateIndex4 (selectedIndex4) {
    this.setState({selectedIndex4})
    this.props.navigation.state.params.footDiabService.sris = selectedIndex4 == 0 ? false : true
  }

  moveToNextView(footDiabService, navigate) {
    if (footDiabService.isUrgenceAbs()) {
        navigate('Diagnostic', {footDiabService})
    } else {
        navigate('Clinique', {footDiabService})
    }
  }

render() {

    const footDiabService = this.props.navigation.state.params.footDiabService
    const {navigate} = this.props.navigation;
    const buttons = ['Non', 'Oui']
    const { selectedIndex } = this.state
    const { selectedIndex2 } = this.state
    const { selectedIndex3 } = this.state
    const { selectedIndex4 } = this.state

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.containerScrollView} contentContainerStyle={{flexGrow: 1, justifyContent : 'center'}}>
        
        <View>
    <Text style={styles.textContainer}>Gangrène humide/extensive</Text>
    <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        selectedButtonStyle={{backgroundColor: "#2271b3"}}
        /*containerStyle={{height: 100}}*/ />
        </View>

        <View>
    <Text style={styles.textContainer}>Abcès</Text>
    <ButtonGroup
        onPress={this.updateIndex2}
        selectedIndex={selectedIndex2}
        buttons={buttons}
        selectedButtonStyle={{backgroundColor: "#2271b3"}}
        /*containerStyle={{height: 100}}*/ />
        </View>

        <View >
    <Text style={styles.textContainer}>Fièvre</Text>
    <ButtonGroup
        onPress={this.updateIndex3}
        selectedIndex={selectedIndex3}
        buttons={buttons}
        selectedButtonStyle={{backgroundColor: "#2271b3"}}
        /*containerStyle={{height: 100}}*/ />
        </View>

        <View style={{flex:1, flexDirection: "column"}}>
        <View style={{flexDirection: "row", alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.textContainer}>SRIS</Text>
        <View style={{alignItems:'center', marginTop:13}}>
        <Tooltip
    topAdjustment={Platform.OS === 'android' ? 0 : 0}
  isVisible={this.state.toolTipVisible}
  content={<View style={{flex:1, margin:10}}>
      <View style={{flex:1, alignItems: 'center'}}>
      <Text style={{color: '#424242', textAlign: 'center'}} h4 h4Style={{fontSize:20}}>Syndrome de Réponse Inflammatoire Systémique</Text>
      </View>
      <View style={{flex:1, alignItems: 'center', marginTop: 20}}>
     <Text h1 h1Style={{fontSize:12, fontWeight:'bold'}} style={{color: '#424242', textAlign: 'center'}} h4 h4Style={{fontSize:16}}>Oui si au moins 2 critères :</Text>
        </View>
    <View style={{marginTop:5}}>
    <Text h1 h1Style={{fontSize:10}} style={{color: '#424242'}}>- Température >38 °C ou {"<"}36°C</Text>
    <Text h1 h1Style={{fontSize:10}} style={{color: '#424242'}}>- FC > 90 bpm</Text>
    <Text h1 h1Style={{fontSize:10}} style={{color: '#424242'}}>- Fréquence respiratoire >20 cycles/minute</Text>
    <Text h1 h1Style={{fontSize:10}} style={{color: '#424242'}}>- Leucocytes 12 G/L ou {"<"} 4 G/L ou 10% de formes immatures</Text>
    </View>
    </View>
    }
  placement="top"
  onClose={() => this.setState({ toolTipVisible: false })}>
    <Icon style={{flex:1}}
    reverse
    name='question'
    type='font-awesome'
    size={10}
    color='#03a9f4'
    onPress={() => {
        this.setState({toolTipVisible: true})
    }}/>
  </Tooltip>
  </View>
  </View>

    <ButtonGroup
        onPress={this.updateIndex4}
        selectedIndex={selectedIndex4}
        buttons={buttons}
        selectedButtonStyle={{backgroundColor: "#2271b3"}}
        /*containerStyle={{height: 100}}*/ />
    </View>




       <View style={{margin:24}}>
      <Button style={styles.launchButton}
        title="Continuer"
        type='outline'
        titleStyle={{
        color: "#2271b3",
        fontSize: 30,
      }}

      iconRight
      icon={
        <View style={{marginLeft: 10, marginTop:5}}>
        <Icon
        size={24}
        name='arrow-right'
        type='feather'
        color="#2271b3"
        />
        </View>
      }
      onPress={() => this.moveToNextView(footDiabService, navigate) }

    />
    </View>
    </ScrollView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  //  alignItems: 'center',
   // justifyContent: 'center',
  },
container: {
  margin: 10,
  backgroundColor: '#fafafa',
  //marginTop: 0,
  //justifyContent: 'space-around',
 // justifyContent: 'center',
},
containerScrollView: {

    marginTop: 0,
    marginLeft: 24,
    marginRight: 24,
    flex: 1,
   backgroundColor: '#fafafa'
},
launchButton: {
//  margin: 30,
  fontSize: 200,
  fontWeight: 'bold',
 // alignSelf: 'center',
  justifyContent: 'flex-end',
   // position: 'absolute',
   justifyContent: 'center',
   // marginBottom: 15
   bottom: 15
//      width:'80%'
},
textContainer: {
  color: '#424242',
  textAlign: 'center',
//    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 15
},
crossContainer: {
    marginRight: 20
}
});

  export default WoundStateScreen;