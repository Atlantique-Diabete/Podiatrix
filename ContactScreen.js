import React from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import FootDiabService from './FootDiabService';

class ContactScreen extends React.Component {
    static navigationOptions = {
        title: 'Contacter',
      };

    render() {
        
      const {navigate} = this.props.navigation;   

      return (
        <View style={styles.mainContainer}>
          <View style={{justifyContent:'center'}}>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:20, fontWeight:'bold'}}>Centre Pied</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:16, fontWeight:'bold'}}>Centre hospitalier</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:16, fontWeight:'bold'}}>Saint Louis</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:16}}>rue du DR Schweitzer</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:16}}>17000 LA ROCHELLE</Text>
          <TouchableHighlight underlayColor="#transparent" onPress={() => {
            try {
              Linking.openURL('tel:05 46 45 53 21')
            } catch (e) {

            }
          }}>
            <Text style={styles.textRoc} h4 h4Style={{color: '#03a9f4', fontSize:16, textDecorationLine:'underline'}}>Tél : 05 46 45 53 21</Text>
          </TouchableHighlight>
        <Text style={styles.textRoc} h4 h4Style={{fontSize:16}}>Diabétologue référent : Dr F. Duengler,{"\n"}1 IDE, 1 podologue et équipe pluridisciplinaire</Text>
          </View>
      </View>
      );
    }
  }


  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginTop: 0,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 10,
   //   margin: 10,

      backgroundColor: '#fafafa',
      alignItems: 'center',
      justifyContent: 'center',
    },
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fafafa',
    //marginTop: 0,
   // justifyContent: 'space-around',
   // justifyContent: 'center',
  },
  textTitleRoc: {
    textAlign: 'center',
    color: '#424242',
    fontWeight:'bold'
  },
  textRocSubTitle: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: "#424242",
    marginBottom: 10
  },
    textRoc: {
        textAlign: 'center',
        color: "#424242"
    },
    launchButton: {
      justifyContent: 'flex-end',
      // position: 'absolute',
      justifyContent: 'center',
      // marginBottom: 15
      bottom: 15
   //      width:'80%'
     // width:"90%"
    }
  });

  export default ContactScreen;