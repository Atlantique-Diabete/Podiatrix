import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import FootDiabService from './FootDiabService';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Menu',
        header: null
      };

      constructor() {
          super()
      }

      onPressButtonTest(footDiabService, navigate) {
        footDiabService.reset(FootDiabService.mode.CLASSIC)
        navigate('WoundState', {footDiabService})
      }

      onPressButtonReeval(footDiabService, navigate) {
        footDiabService.reset(FootDiabService.mode.REEVAL)
        navigate('Reeval', {footDiabService})
      }

    render() {
        
      const {navigate} = this.props.navigation;
      const footDiabService = new FootDiabService()

      return (
        <View style={styles.mainContainer}>
        <View style={styles.container}>
        <Icon  style={styles.iconLauch}
          name='foot'
          size= {200}
          color='white'
          type='foundation' />
          <View style={{marginTop: 5, marginBottom:5}}>
      <Text style={styles.textContainer} h4 h4Style={{fontSize:18}}>Votre patient diabétique vous</Text>
      <Text style={styles.textContainer} h4 h4Style={{fontSize:18}}>consulte pour un problème de pied.</Text>
      </View>
          <View style={{marginTop:25}}>
          <Text style={styles.textContainer} h4 h4Style={{fontSize:16}}>1er contact ?</Text>
          <View style={{marginRight: 30, marginLeft: 30}}>
        <Button style={styles.launchButton}
          title="Lancer le test"
          titleStyle={{
            color: "#2271b3",
            fontSize: 20,
          }}
          type='outline'
          buttonStyle={{backgroundColor: "white"}}
          iconRight
      icon={
        <View style={{position: 'absolute', right: 5}}>
        <Icon
        size={30}
        name='keyboard-arrow-right'
        type='material-icons'
        color="#2271b3"
        />
        </View>
      }
          
          onPress={() => this.onPressButtonTest(footDiabService, navigate)}
        /> 
        </View>
        </View>
        <View style={{marginTop:30}}>
        <Text style={styles.textContainer} h4 h4Style={{fontSize:16}}>Réévaluation à 2 semaines ?</Text>
        <View  style={{marginRight: 30, marginLeft: 30}}>
        <Button style={styles.launchButton}
          title="Lancer le test"
          titleStyle={{
            color: "#2271b3",
            fontSize: 20,
          }}
          type='outline'
          buttonStyle={{backgroundColor: "white"}}
          iconRight
      icon={
        <View style={{position: 'absolute', right: 5}}>
        <Icon
        size={30}
        name='keyboard-arrow-right'
        type='material-icons'
        color="#2271b3"
        />
        </View>
      }
          onPress={() => this.onPressButtonReeval(footDiabService, navigate)}
        />
        </View>
        </View>
      </View>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#2271b3',
    //  alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      margin: 10,
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