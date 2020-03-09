import React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { Button, ButtonGroup} from 'react-native-elements';
import { Icon } from 'react-native-elements'

class ReevalScreen extends React.Component {
    
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
        title: 'Réévaluation',
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <Icon style={styles.crossContainer}
                name='cross'
                underlayColor='transparent'
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
          selectedIndex3: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
        this.updateIndex2 = this.updateIndex2.bind(this)
        this.updateIndex3 = this.updateIndex3.bind(this)
      }
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
        this.props.navigation.state.params.footDiabService.dim25SurfPlaie = selectedIndex == 0 ?  false : true
      }
      updateIndex2 (selectedIndex2) {
        this.setState({selectedIndex2})
        this.props.navigation.state.params.footDiabService.bourgeonement = selectedIndex2 == 0 ? false : true
      }
      updateIndex3 (selectedIndex3) {
        this.setState({selectedIndex3})
        this.props.navigation.state.params.footDiabService.epithelialisation = selectedIndex3 == 0 ? false : true
      }

      componentDidMount(){
        this.setState({selectedIndex: this.props.navigation.state.params.footDiabService.dim25SurfPlaie == false ? 0 : 1})
        this.setState({selectedIndex2: this.props.navigation.state.params.footDiabService.bourgeonement == false ? 0 : 1})
        this.setState({selectedIndex3: this.props.navigation.state.params.footDiabService.epithelialisation == false ? 0 : 1})
      }

    render() {
  

        const footDiabService = this.props.navigation.state.params.footDiabService
        const {navigate} = this.props.navigation;
        const buttons = ['Non', 'Oui']
        const { selectedIndex } = this.state
        const { selectedIndex2 } = this.state
        const { selectedIndex3 } = this.state

      return (
        <View style={styles.mainContainer}>
        <ScrollView style={styles.containerScrollView} contentContainerStyle={{flexGrow: 1, justifyContent : 'center'}}>
        
        <View>
        <Text style={styles.textContainer}>Diminution de 25% de la surface de la plaie diabétique</Text>
        <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            selectedButtonStyle={{backgroundColor: "#2271b3"}}
            /*containerStyle={{height: 100}}*/ />
        </View>
        
        <View>
        <Text style={styles.textContainer}>Bourgeonnement</Text>
        <ButtonGroup
            onPress={this.updateIndex2}
            selectedIndex={selectedIndex2}
            buttons={buttons}
            selectedButtonStyle={{backgroundColor: "#2271b3"}}
            /*containerStyle={{height: 100}}*/ />
        </View>
        
        <View style={{flex:1}}>
        <Text style={styles.textContainer}>Ré-épithélialisation</Text>
        <ButtonGroup
            onPress={this.updateIndex3}
            selectedIndex={selectedIndex3}
            buttons={buttons}
            selectedButtonStyle={{backgroundColor: "#2271b3"}}
            /*containerStyle={{height: 100}}*/ />
        </View>
        
        
        <View style={{margin:24}}>
          <Button style={styles.launchButton}
            title="Diagnostic"
            titleStyle={{
            color: "#2271b3",
            fontSize: 30,
            
          }}
          icon={
            <View style={{marginRight: 10}}>
            <Icon
              name="activity"
              size={24}
              type='feather'
              color="#2271b3"
            />
            </View>
          }
          type='outline'
//          buttonStyle={{backgroundColor: "#2271b3"}}
          onPress={() => navigate('Diagnostic', {footDiabService})}
  
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
  containerScrollView: {
    marginTop: 0,
    marginLeft: 24,
    marginRight: 24,
    flex: 1,
   backgroundColor: '#fafafa'
  },
    launchButton: {
      fontWeight: 'bold',
      // alignSelf: 'center',
       justifyContent: 'flex-end',
        // position: 'absolute',
        justifyContent: 'center',
        // marginBottom: 15
        bottom: 15
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

  export default ReevalScreen;