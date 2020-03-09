import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import FootDiabService from './FootDiabService';
import SplashScreen from 'react-native-splash-screen';
import { TouchableHighlight } from 'react-native-gesture-handler';
import DeviceInfo from 'react-native-device-info';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Menu',
        header: null
      };

      constructor() {
          super()
      }

      componentDidMount() {
          SplashScreen.hide()
          console.log('DEVICE:', DeviceInfo.getVersion())
      }

      
      onPressButtonTest(footDiabService, navigate) {
        footDiabService.reset(FootDiabService.mode.CLASSIC)
        navigate('WoundState', {footDiabService})
      }

      onPressButtonReeval(footDiabService, navigate) {
        footDiabService.reset(FootDiabService.mode.REEVAL)
        navigate('Reeval', {footDiabService})
      }

      onPressAfterHealing(navigate) {
        navigate('AfterHealing')
      }

      onPressHealingAndDump(navigate) {
        navigate('HealingAndDump')
      }

    render() {


      

      const {navigate} = this.props.navigation;
      const footDiabService = new FootDiabService()

      return (
        <View style={styles.container}>
        <Icon  style={styles.iconLauch}
          name='foot'
          size= {150}
          color='white'
          type='foundation' />
          <View style={{marginTop: 0, marginBottom:4}}>
      <Text style={styles.textContainer} h4 h4Style={{fontSize:18}}>Votre patient diabétique vous</Text>
      <Text style={styles.textContainer} h4 h4Style={{fontSize:18}}>consulte pour un problème de pied.</Text>
      </View>
      <View style={styles.containerCards}>
        <TouchableHighlight style={styles.touchableHighlightContainer} onPress={() => {
          this.onPressButtonTest(footDiabService, navigate)
        }}>
          <View  style={styles.item}>
            <View style={styles.subitem}>
              <Icon
                  size={40}
                  name='activity'
                  type='feather'
                  color="#2271b3"
              />
              </View>
          <Text h1 h1Style={styles.textStyleCards}>Première{"\n"}évaluation</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchableHighlightContainer} onPress={() => {
          this.onPressButtonReeval(footDiabService, navigate)
        }}>
          <View style={styles.item}>
            <View style={styles.subitem}>
              <Icon
                  size={40}
                  name='controller-fast-forward'
                  type='entypo'
                  color="#2271b3"
              />
              </View>
         <Text h1 h1Style={styles.textStyleCards}>Réévaluation{"\n"}à 2 semaines</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchableHighlightContainer} onPress={() => {
            this.onPressHealingAndDump(navigate)
        }}>

          <View style={styles.item}>
            <View style={styles.subitem}>
              <Icon
                  size={40}
                  name='heart'
                  type='foundation'
                  color="#2271b3"
                />
                </View>
              <Text h1 h1Style={styles.textStyleCards}>Soins{"\n"}et décharge</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchableHighlightContainer} onPress={() => {
          this.onPressAfterHealing(navigate)
        }}>

          <View style={styles.item}>
            <View style={styles.subitem}>
              <Icon
                  size={40}
                  name='healing'
                  type='material-icons'
                  color="#2271b3"
                />
                </View>
              <Text h1 h1Style={styles.textStyleCards}>Après{"\n"}cicatrisation</Text>
          </View>
          </TouchableHighlight>

        </View>
        <View style={{position:'absolute', bottom:10, right:10, borderRadius:30}}>
              <Icon
                  underlayColor="transparent"
                  size={30}
                  name='info'
                  type='feather'
                  color="white"
                  onPress={() => {
                    navigate('WhoAreWe')
                  }}
                />
        </View>
        <View style={{position:'absolute', bottom:10, alignSelf:'center'}}>
          <Text style={{color: '#FAFAFA'}} h1 h1Style={{fontSize: 12, fontWeight:'bold'}}>Version : {DeviceInfo.getVersion()}</Text>
        </View>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    touchableHighlightContainer: {
    //  backgroundColor:'red',
      margin: 10,
      width:125,
      borderRadius:5
      //flex:1,
    },
    containerCards: {
      justifyContent:'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      //flex:1,
//      aspectRatio: 1.025,
    //  backgroundColor:'green',
      alignItems: 'flex-start'
    },
    subitem: {
      marginBottom:8
    },
    textStyleCards: {
      fontSize:14,
      textAlign:'center',
      color:'#424242',
      fontWeight:'bold'
    },
    item: {
      //flex:1,
      alignItems:'center',
      justifyContent:'center',
      //aspectRatio: 1.025,
      height: 120,
      backgroundColor:'#FAFAFA',
      padding:0, borderRadius:5, borderWidth: 3, borderColor:'#EDEDED'
    },
    container: {
      flex:1,
      padding: 10,
      backgroundColor: '#2271b3',
    //  alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer: {
      color: '#fafafa',
      fontSize: 40,
      textAlign: 'center',
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 15
    },
    launchButton: {
      fontSize: 200,
      fontWeight: 'bold',
      //marginLeft: 30,
     // marginRight: 30
//      width:'80%'
    },
    iconLauch: {
        alignItems: 'center'
    }
  });

  export default HomeScreen;