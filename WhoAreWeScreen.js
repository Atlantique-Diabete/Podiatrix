import React from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import FootDiabService from './FootDiabService';

class WhoAreWeScreen extends React.Component {
    static navigationOptions = {
        title: 'Présentation',
      };

    render() {
        
      const {navigate} = this.props.navigation;   


      return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scrollViewContainer}>
            <View>
            <Icon
                  size={100}
                  name='people'
                  type='material-icons'
                  color="#2271b3"
                />
        <View style={{justifyContent:'center', marginTop:10}}>
            <Text style={styles.textTitleRoc} h4 h4Style={{fontSize:24}}>Qui sommes-nous ?</Text>
        </View>

            </View>
            <View style={{justifyContent:'center', marginTop:8}}>
                <Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>
Podiaclic est une application crée en janvier 2020, développée en collaboration entre le service de diabétologie de l’hôpital de La Rochelle, un interne en médecine générale et un développeur d’application sur smartphone.
</Text>

<Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>
Elle se base sur les dernières recommandations de l’International Working Group on the Diabetic Foot (IWGDF) de 2019 concernant la prise en charge des pieds diabétiques.
</Text>

<View style={{justifyContent:'center', marginTop:10}}>
            <Text style={styles.textTitleRoc} h4 h4Style={{fontSize:24}}>Pourquoi ?</Text>
        </View>

<Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>
Les dernières études montrent que les patients diabétiques présentant des plaies de pied sont trop tardivement adressés aux centres de référence hospitalier de diabétologie.
</Text>
<Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>
Podiaclic a été conçu pour aider les médecins de ville dans la prise en charge de ces patients en réduisant le délai entre le diagnostic et la prise en charge hospitalière quand elle est nécessaire. Cette application propose une aide au parcours de soins du patient sans remplacer l’expertise du praticien.
</Text>
            </View>
            </ScrollView>
      </View>
      );
    }
  }


  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginTop: 0,
     // paddingTop: 24,
      paddingBottom:24,
   //   margin: 10,
      backgroundColor: '#fafafa',
    //  alignItems: 'center',
   //   justifyContent: 'center',
    },
    scrollViewContainer: {
        paddingLeft: 24,
        paddingRight: 24,
  
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
        marginTop:10,
   //     textAlign: 'center',
   textAlign:'justify',
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

  export default WhoAreWeScreen;