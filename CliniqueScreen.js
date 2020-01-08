import React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { Button, ButtonGroup, Overlay, CheckBox} from 'react-native-elements';
import { Icon } from 'react-native-elements'

class CliniqueScreen extends React.Component {
      
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
    title: 'Clinique',
    headerRight: () => (
      <View style={{marginRight: 10}}>
      <Icon style={styles.crossContainer}
          name='cross'
          type='entypo' 
          onPress={() =>  this.test(navigate) }
          color="#fff"
      />
      </View>
      ),
    }
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  constructor () {
    super()
    this.state = {
      selectedIndex: 0,
      selectedIndex2: 0,
      selectedIndex3: 0,
      selectedIndex4: 0,
      selectedItems: [],
      isVisible: false,
      checkGonflement: false,
      checkErythemePeriph: false,
      checkSensibiliteDouleurLoc: false,
      checkChaleur: false,
      checkSecretionsPurulent: false,
      checkAutreCauseInflamation: false,
    }
    this.updateIndex = this.updateIndex.bind(this)
    this.updateIndex2 = this.updateIndex2.bind(this)
    this.updateIndex3 = this.updateIndex3.bind(this)
    this.updateIndex4 = this.updateIndex4.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    this.props.navigation.state.params.footDiabService.absPouls = selectedIndex == 0 ? false : true
  }
  updateIndex2 (selectedIndex2) {
    this.setState({selectedIndex2})
    this.props.navigation.state.params.footDiabService.infection = selectedIndex2 == 0 ? false : true
  }
  updateIndex3 (selectedIndex3) {
    this.setState({selectedIndex3})
    this.props.navigation.state.params.footDiabService.necrose = selectedIndex3 == 0 ? false : true
  }
  updateIndex4 (selectedIndex4) {
    this.setState({selectedIndex4})
    this.props.navigation.state.params.footDiabService.miseANuDesOsTendons = selectedIndex4 == 0 ? false : true
  }

  goToNextTerrainScreen(footDiabService, navigate) {
    this.setInfectedValue()
    navigate('Terrain', {footDiabService})
  }

  setInfectedValue() {
    if (this.props.navigation.state.params.footDiabService.isInfected()) {
      this.props.navigation.state.params.footDiabService.infection = true
    } else {
      this.props.navigation.state.params.footDiabService.infection = false
    }
  }

  getTextRiskInfection() {
    if (this.props.navigation.state.params.footDiabService.isInfected()) {
      return 'Le patient a des risques d’infections'
    }
    return 'Le patient n\'a pas de risques d’infections'
  }

  componentDidMount(){
    this.setState({selectedIndex: this.props.navigation.state.params.footDiabService.absPouls == false ? 0 : 1})
    this.setState({selectedIndex3: this.props.navigation.state.params.footDiabService.necrose == false ? 0 : 1})
    this.setState({selectedIndex4: this.props.navigation.state.params.footDiabService.miseANuDesOsTendons == false ? 0 : 1})
    
    this.setState({checkGonflement: this.props.navigation.state.params.footDiabService.gonflement})
    this.setState({checkErythemePeriph: this.props.navigation.state.params.footDiabService.erythemePeriph})
    this.setState({checkSensibiliteDouleurLoc: this.props.navigation.state.params.footDiabService.sensibiliteDouleurLoc})
    this.setState({checkChaleur: this.props.navigation.state.params.footDiabService.chaleur})
    this.setState({checkSecretionsPurulent: this.props.navigation.state.params.footDiabService.secretionsPurulent})
    this.setState({checkAutreCauseInflamation: this.props.navigation.state.params.footDiabService.autreCauseInflamation})

  }

render() {
    const footDiabService = this.props.navigation.state.params.footDiabService
    const {navigate} = this.props.navigation;
    const buttons = ['Non', 'Oui']
    const { selectedItems } = this.state
    const { selectedIndex } = this.state
    const { selectedIndex2 } = this.state
    const { selectedIndex3 } = this.state
    const { selectedIndex4 } = this.state

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.containerScrollView} contentContainerStyle={{flexGrow: 1, justifyContent : 'center'}}>
        
        <View>
    <Text style={styles.textContainer}>Absence de pouls</Text>
    <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        selectedButtonStyle={{backgroundColor: "#2271b3"}}
        /*containerStyle={{height: 100}}*/ />
        </View>

        <View>
    <Text style={styles.textContainer}>Nécrose</Text>
    <ButtonGroup
        onPress={this.updateIndex3}
        selectedIndex={selectedIndex3}
        buttons={buttons}
        selectedButtonStyle={{backgroundColor: "#2271b3"}}
        /*containerStyle={{height: 100}}*/ />
        </View>

        <View>
    <Text style={styles.textContainer}>Mise à nu des tendons, os ou muscles</Text>
    <ButtonGroup
        onPress={this.updateIndex4}
        selectedIndex={selectedIndex4}
        buttons={buttons}
        selectedButtonStyle={{backgroundColor: "#2271b3"}}
        /*containerStyle={{height: 100}}*/ />
        </View>

        <View style={{flex:1}}>
          <View>
          <View style={{flex:1, flexDirection: "row", justifyContent:'center', alignItems:'center'}}>
            <View style={{marginTop:10, marginRight:2}}>
          <Icon 
           // reverse
            name='hand-pointer-o'
            type='font-awesome'
            size={13}
            color='#03a9f4'
            onPress={() => {
                this.setState({toolTipVisible: true})
            }}/>
            </View>
        <Text style={styles.textContainerInfections} onPress={
        () => {
          this.setState({ isVisible: true })
        }}>Risque d'infections</Text>
        </View>
        <Button style={{marginLeft:10, marginRight:10, marginTop: 0}}
        title={this.getTextRiskInfection()}
        titleStyle={{
        color: "white",
        fontSize: 20
      }}
      disabled
      buttonStyle={{backgroundColor: "#2271b3"}}
      onPress={() => this.setState({isVisible: true} ) }
    />
    </View>
        <Overlay
        width="auto"
        height="auto"
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}>
        <View style={{flexDirection: "column"}}>
          <Text style={styles.textContainerOverlay}>Risque d'infections</Text>
        <CheckBox
        //  center
        right
          iconRight
          title='Gonflement/induration'
          checked={this.state.checkGonflement}
          onPress={() => {
            this.setState({checkGonflement: !this.state.checkGonflement})
            footDiabService.gonflement = !this.state.checkGonflement
            if (footDiabService.gonflement) {
              footDiabService.infectionCounts += 1
            } else {
              footDiabService.infectionCounts -= 1
            }
          }}
        />
        <CheckBox
        right
        iconRight
          title='Erythème périphérique >0,5cm de large'
          fontSize={12}
          checked={this.state.checkErythemePeriph}
          onPress={() => {
            this.setState({checkErythemePeriph: !this.state.checkErythemePeriph})
            footDiabService.erythemePeriph = !this.state.checkErythemePeriph
            if (footDiabService.erythemePeriph) {
              footDiabService.infectionCounts += 1
            } else {
              footDiabService.infectionCounts -= 1
            }
          }}
        />
        <CheckBox
        right
        iconRight
          title='Sensibilité ou douleur localement'
          checked={this.state.checkSensibiliteDouleurLoc}
          onPress={() => {
            this.setState({checkSensibiliteDouleurLoc: !this.state.checkSensibiliteDouleurLoc})
            footDiabService.sensibiliteDouleurLoc = !this.state.checkSensibiliteDouleurLoc
            if (footDiabService.sensibiliteDouleurLoc) {
              footDiabService.infectionCounts += 1
            } else {
              footDiabService.infectionCounts -= 1
            }
          }}
        />
        <CheckBox
        right
        iconRight
          title='Chaleur'
          checked={this.state.checkChaleur}
          onPress={() => {
            this.setState({checkChaleur: !this.state.checkChaleur})
            footDiabService.chaleur = !this.state.checkChaleur
            if (footDiabService.chaleur) {
              footDiabService.infectionCounts += 1
            } else {
              footDiabService.infectionCounts -= 1
            }
          }}
        />
        <CheckBox
        right
        iconRight
          title='Sécrétions purulentes'
          checked={this.state.checkSecretionsPurulent}
          fontSize={15}
          onPress={() => {
            this.setState({checkSecretionsPurulent: !this.state.checkSecretionsPurulent})
            footDiabService.secretionsPurulent = !this.state.checkSecretionsPurulent
            if (footDiabService.secretionsPurulent) {
              footDiabService.infectionCounts += 1
            } else {
              footDiabService.infectionCounts -= 1
            }
          }}
        />

        <CheckBox
        right
        iconRight
          title='Autre cause d’inflammation'
          checked={this.state.checkAutreCauseInflamation}
          onPress={() => {
            this.setState({checkAutreCauseInflamation: !this.state.checkAutreCauseInflamation})
            footDiabService.autreCauseInflamation = !this.state.checkAutreCauseInflamation
          }}
        />

          <View style={{margin:24, marginBottom:12}}>
        <Button style={{marginLeft:24, marginRight:24}}
        title="Valider"
        titleStyle={{
          color: "white",
          fontSize: 15,
        }}

      icon={
        <View style={{marginRight: 5}}>
        <Icon
        size={24}
        name='check'
        type='feather'
        color="white"
        />
        </View>
      }
        buttonStyle={{backgroundColor: "#2271b3"}}
        onPress={() => this.setState({ isVisible: false })} />
        </View>
        </View>
      </Overlay>
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
      //buttonStyle={{backgroundColor: "#2271b3"}}
      onPress={() => {this.goToNextTerrainScreen(footDiabService, navigate)}}
    />
    </View>

    </ScrollView>
    </View>
  );
}
}
/*
    <Text style={styles.textContainer}>Signes d'infection</Text>
    <ButtonGroup
        onPress={this.updateIndex2}
        selectedIndex={selectedIndex2}
        buttons={buttons}
        selectedButtonStyle={{backgroundColor: "#2271b3"}}
        />

*/
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  //  alignItems: 'center',
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
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 15
},
textContainerInfections: {
  textDecorationLine: 'underline',
  color: '#03a9f4',
  textAlign: 'center',
    marginTop: 20,
    //marginLeft: 10,
    marginBottom: 10,
    fontSize: 15
},
textContainerOverlay: {
  color: '#424242',
  textAlign: 'center',
    marginTop: 24,
    marginBottom: 12,
    fontSize: 20
},
crossContainer: {
    marginRight: 20
}
});

  export default CliniqueScreen;