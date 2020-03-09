import React from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import FootDiabService from './FootDiabService';

class AfterHealingScreen extends React.Component {
    static navigationOptions = {
        title: 'Conseils',
      };

    render() {
        
      const {navigate} = this.props.navigation;   

      return (
        <View style={styles.mainContainer}>
            <View>
            <Icon
                  size={100}
                  name='healing'
                  type='material-icons'
                  color="#2271b3"
                />
        <View style={{justifyContent:'center', marginTop:10}}>
            <Text style={styles.textTitleRoc} h4 h4Style={{fontSize:24}}>Après cicatrisation</Text>
        </View>

            </View>
        <View style={{justifyContent:'flex-start', alignItems:'flex-start', marginTop:24}}>
            <Text style={styles.textRocSubTitle} h4 h4Style={{fontSize:18}}>Conseils pour le patient :</Text>
        </View>
            <View style={{justifyContent:'center'}}>
                <Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>- Hydratation de vos pieds chaque jour.</Text>
                <Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>- Préférez chaussures cuirs large sans couture intérieur.</Text>
                <Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>- Consultez en cas de plaie, même petite !</Text>
            </View>
        <View style={{justifyContent:'flex-start', alignItems:'flex-start', marginTop:24}}>
            <Text style={styles.textRocSubTitle} h4 h4Style={{fontSize:18}}>Prescription :</Text>
        </View>
        <View style={{justifyContent:'center'}}>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>Forfait de soin podologique de 6 séances par an grade 3.</Text>
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
    //  alignItems: 'center',
   //   justifyContent: 'center',
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
   //     textAlign: 'center',
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

  export default AfterHealingScreen;