import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements'

class DiagnosticScreen extends React.Component {
    static navigationOptions = {
        title: 'Diagnostic',
      };

     emojiIcon = (footDiabService) => {
        if (footDiabService.absPouls == true
            || footDiabService.infection == true
            || footDiabService.necrose == true
            || footDiabService.miseANuDesOsTendons == true) {
                return <Icon 
                name='emoji-sad'
                size= {50}
                color='red'
                type='entypo' />
        } else {
            return <Icon 
            name='emoji-happy'
            size= {50}
            color='green'
            type='entypo' />
        }
    };

    titleText = (footDiabService) => {
      switch (footDiabService.getDiagnosticState()) {
        case 1:
          return <Text style={styles.textTitleRoc} h4 h4Style={{color:'#4caf50'}}>Plaie de pied diabétique non compliquée</Text>
        case 2:
          return <Text style={styles.textTitleRoc} h4 h4Style={{color:'#ff9800'}}>Plaie de pied diabétique compliquée</Text>
        case 3:
          return <Text style={styles.textTitleRoc} h4 h4Style={{color:'#f44336'}}>Plaie de pied diabétique en urgence absolue</Text>
      }
    }

    recomandation = (footDiabService) => {

      switch (footDiabService.getDiagnosticState()) {
        case 1:
      return <Text style={styles.textRoc}  h4 h4Style={{fontSize:14}}>Contact immédiat avec la structure spécialisée pied diabétique la plus proche.{"\n"}Réévaluation hebdomadaire par un professionnel de santé.</Text>
        case 2:
          return <Text style={styles.textRoc}  h4 h4Style={{fontSize:14}}>Adresser le patient dans les 48 heures vers une structure spécialisée du pied diabétique de référence.</Text>
        case 3:
          return <Text style={styles.textRoc}  h4 h4Style={{fontSize:14}}>Hospitalisation en urgence.</Text>
      }
    }

    recommandationAddresse = (footDiabService) => {
      switch (footDiabService.getDiagnosticState()) {
        case 1:
          return 
        case 2:
        case 3:
          return <View style={{marginTop: 10}}>
            <View style={{justifyContent:'flex-start', alignItems:'flex-start'}}>
          <Text style={styles.textRocSubTitle} h4 h4Style={{fontSize:16}}>Contacter :</Text>
          </View>
          <View style={{justifyContent:'center'}}>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>Centre Pieds</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>Centre hospitalier</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>Saint Louis</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>rue du DR Schweitzer</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>17000 LA ROCHELLE</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>Tél : 05 46 45 22 86</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:14}}>Diabétologue référent : Dr F. Duengler, 1 IDE, 1 podologue et équipe pluridisciplinaire</Text>
          </View>
          </View>
      }
    }
       
    render() {
        
      const {navigate} = this.props.navigation;
      const footDiabService = this.props.navigation.state.params.footDiabService      

      return (
        <View style={{flex:1, backgroundColor:"#fafafa"}}>
        <View style={styles.mainContainer}>
        <View style={styles.container}>
        {this.titleText(footDiabService)}
        <View style={{marginTop:24, marginBottom: 10}}>
        <View style={{justifyContent:'flex-start', alignItems:'flex-start'}}>
        <Text style={styles.textRocSubTitle} h4 h4Style={{fontSize:16}}>Recommandation :</Text>
        </View>
        {this.recomandation(footDiabService)}
        {this.recommandationAddresse(footDiabService)}
        </View>
        </View>
            
            <View style={{margin:24}}>
        <Button style={styles.launchButton}
          title="Retour au menu"
          titleStyle={{
            color: "white",
            fontSize: 20,
          }}
          buttonStyle={{backgroundColor: "#2271b3"}}
          onPress={() => navigate('Home')}
          iconRight
          icon={
            <View style={{marginLeft: 10}}>
            <Icon
              name="exit-to-app"
              size={30}
              type='material-community-icons'
              color="white"
            />
            </View>
          } />
        </View>
      </View>
      </View>
      );
    }
  }

  //exit-to-app

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginTop: 0,
      marginLeft: 24,
      marginRight: 24,
   //   margin: 10,
      backgroundColor: '#fafafa',
    //  alignItems: 'center',
   //   justifyContent: 'center',
    },
  container: {
    margin: 10,
    flex: 1,
    backgroundColor: '#fafafa',
    //marginTop: 0,
   // justifyContent: 'space-around',
   // justifyContent: 'center',
  },
  textTitleRoc: {
    textAlign: 'center',
    color: '#424242',
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

  export default DiagnosticScreen;