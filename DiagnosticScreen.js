import React from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import FootDiabService from './FootDiabService';

class DiagnosticScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;

    return {
        title: 'Diagnostic',
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <Icon
            underlayColor='transparent'
              name="exit-to-app"
              size={30}
              type='material-community-icons'
              color="white"
              onPress={() => {
                navigation.navigate('Home')
              }}
            />
            </View>
          ),
        }
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

    recomandation = (footDiabService, navigate) => {

      switch (footDiabService.getDiagnosticState()) {
        case 1:
      return  <View style={{marginLeft:24}}>
              {footDiabService.newMode == FootDiabService.mode.REEVAL
              && <Text style={{...styles.textRoc, textAlign:'left'}}  h4 h4Style={{fontSize:12}}>- Poursuite du suivi hebdomadaire jusqu’à cicatrisation.</Text>}
              <Text style={{...styles.textRoc, textAlign:'left'}}  h4 h4Style={{fontSize:12}}>- Contact avec la structure spécialisée pied diabétique la plus proche.</Text>
      <Text style={{...styles.textRoc, textAlign:'left'}} h4 h4Style={{fontSize:12}}>- Réévaluation à deux semaines par un professionnel de santé.</Text>
      
      
            </View>
        case 2:
          return (<View style={{marginLeft:24}}>
            <Text style={{...styles.textRoc, textAlign:'left'}}  h4 h4Style={{fontSize:12}}>- Adresser le patient dans les 48 heures vers une structure spécialisée du pied diabétique de référence.</Text>
            </View>);
        case 3:
          return (<View style={{marginLeft:24}}>
            <Text style={{...styles.textRoc, textAlign:'left'}}  h4 h4Style={{fontSize:18, fontWeight:'bold'}}>Hospitalisation en urgence.</Text>
            </View>);
      }
    }

    displayChargeTaken = (footDiabService) => {
      switch (footDiabService.getDiagnosticState()) {
        case 1:
          return true
      }
      return false
    }

    shouldDo = (footDiabService) => {
      switch (footDiabService.getDiagnosticState()) {
        case 2:
          return <View>
            <View style={{justifyContent:'flex-start', alignItems:'flex-start'}}>
              <Text style={styles.textRocSubTitle} h4 h4Style={{fontSize:14}}>Conduite à tenir jusqu’à consultation spécialisée :</Text>
            </View>
            <View style={{marginLeft:24}}>
              <Text style={{...styles.textRoc, textAlign:'left'}}  h4 h4Style={{fontSize:12}}>- Mise en décharge de la plaie.</Text>
              <Text style={{...styles.textRoc, textAlign:'left'}}  h4 h4Style={{fontSize:12}}>- Soins locaux quotidiens.</Text>
              <Text style={{...styles.textRoc, textAlign:'left'}}  h4 h4Style={{fontSize:12}}>- Antibiothérapie si dermohypodermite.</Text>
            </View>
          </View>
      }
    }

    recommandationAddresse = (footDiabService) => {
      switch (footDiabService.getDiagnosticState()) {
        case 1:
        case 2:
          return <View style={{marginTop: 10}}>
            <View style={{justifyContent:'flex-start', alignItems:'flex-start'}}>
          <Text style={styles.textRocSubTitle} h4 h4Style={{fontSize:14}}>Contacter :</Text>
          </View>
          <View style={{justifyContent:'center'}}>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:12, fontWeight:'bold'}}>Centre Pied</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:12, fontWeight:'bold'}}>Centre hospitalier</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:12, fontWeight:'bold'}}>Saint Louis</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:12}}>rue du DR Schweitzer</Text>
          <Text style={styles.textRoc} h4 h4Style={{fontSize:12}}>17000 LA ROCHELLE</Text>
          <TouchableHighlight underlayColor="#transparent" onPress={() => {
            try {
              Linking.openURL('tel:05 46 45 53 21')
            } catch (e) {
            }
          }}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center', marginBottom:4}}>
            <Icon
              iconStyle={{marginRight:4}}
              underlayColor='transparent'
              name="phone"
              size={15}
              type='feather'
              color="#03a9f4"
            />
            <Text style={styles.textRoc} h4 h4Style={{color: '#03a9f4', fontSize:12, textDecorationLine:'underline'}}>05 46 45 53 21</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#transparent" onPress={() => {
            try {
              Linking.openURL('mailto:secretariat.diabetologie@ght-atlantique17.fr')
            } catch (e) {
            }
          }}>
          <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
            <Icon
              iconStyle={{marginRight:4}}
              underlayColor='transparent'
              name="mail"
              size={15}
              type='feather'
              color="#03a9f4"
            />
            <Text style={styles.textRoc} h4 h4Style={{color: '#03a9f4', fontSize:12, textDecorationLine:'underline'}}>secretariat.diabetologie@ght-atlantique17.fr</Text>
            </View>
          </TouchableHighlight>
          </View>
          </View>
      }
    }

    //{this.recommandationAddresse(footDiabService)}
        
       
    render() {
        
      const {navigate} = this.props.navigation;
      const footDiabService = this.props.navigation.state.params.footDiabService      

      return (
        <View style={styles.mainContainer}>
          <ScrollView style={styles.scollViewContainer}>
        {this.titleText(footDiabService)}
        <View style={{marginTop:24, marginBottom: 10}}>
        <View style={{justifyContent:'flex-start', alignItems:'flex-start'}}>
          <Text style={styles.textRocSubTitle} h4 h4Style={{fontSize:14}}>Recommandation :</Text>
        </View>
        {this.recomandation(footDiabService, navigate)}
        {this.shouldDo(footDiabService)}
        {this.recommandationAddresse(footDiabService)}
        {this.displayChargeTaken(footDiabService) && <View>
        <View style={styles.containerCards}>
                  <TouchableHighlight style={styles.touchableHighlightContainer} onPress={() => {
                  //  this.onPressHealingAndDump(navigate)
                  navigate('HealingAndDump')
                }}>

                  <View style={styles.item}>
                    <View style={styles.subitem}>
                      <Icon
                          size={40}
                          name='heart'
                          type='foundation'
                          color="#FAFAFA"
                        />
                        </View>
                      <Text h1 h1Style={styles.textStyleCards}>Soins{"\n"}et décharge</Text>
                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.touchableHighlightContainer} onPress={() => {
                //  this.onPressAfterHealing(navigate)
                navigate('AfterHealing')
              }}>

                  <View style={styles.item}>
                    <View style={styles.subitem}>
                      <Icon
                          size={40}
                          name='healing'
                          type='material-icons'
                          color="#FAFAFA"
                        />
                        </View>
                      <Text h1 h1Style={styles.textStyleCards}>Après{"\n"}cicatrisation</Text>
                  </View>
                  </TouchableHighlight>

      </View>
      </View>}
        </View>
        <View style={{paddingBottom:24}}></View>
        </ScrollView>
      </View>
      );
    }
  }
/*
            <View style={{marginTop:24, alignSelf:'center', marginBottom:24}}>
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

*/
  //exit-to-app

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginTop: 0,
   //   margin: 10,
      backgroundColor: '#fafafa',
    //  alignItems: 'center',
   //   justifyContent: 'center',
    },
    scollViewContainer: {
      paddingTop: 24,
      paddingLeft: 24,
      paddingRight: 24,
    },
  container: {
    padding: 10,
    flex: 1,
//    paddingBottom:24,
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
   // textAlign: 'center',
    color: "#424242",
    marginBottom: 5,
    marginTop:10
  },
    textRoc: {
        textAlign: 'center',
        //marginLeft: 24,
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
    },


    touchableHighlightContainer: {
      //  backgroundColor:'red',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        width:115,
        borderRadius:5
        //flex:1,
      },
      containerCards: {
        marginTop: 10,
        justifyContent:'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //flex:1,
  //      aspectRatio: 1.025,
        //backgroundColor:'green',
        alignItems: 'flex-start'
      },
      subitem: {
        marginBottom:8
      },
      textStyleCards: {
        fontSize:14,
        textAlign:'center',
        color:'#FAFAFA',
        fontWeight:'bold'
      },
      item: {
        //flex:1,
        alignItems:'center',
        justifyContent:'center',
        //aspectRatio: 1.025,
        height: 115,
        backgroundColor:'#2271b3',
        padding:0, borderRadius:5//, borderWidth: 3//, borderColor:'#F9F9F9'
      },
  });

  export default DiagnosticScreen;