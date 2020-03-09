import React from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { TouchableHighlight, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import FootDiabService from './FootDiabService';

class HealingAndDumpScreen extends React.Component {
    static navigationOptions = {
        title: 'Soins et décharge',
      };


      constructor() {
        super()
        this.state = {
          showCase: -1
        }
      }

    render() {
        
      const {navigate} = this.props.navigation;
      const footDiabService = new FootDiabService()

      return (
        <View style={styles.mainContainer}>
          <ScrollView style={styles.scollViewContainer}>



          <TouchableHighlight style={styles.itemSelected} onPress={() => {
                value = -1
                if (this.state.showCase != 0) {
                  value = 0
                }
                this.setState({showCase: value})
              }}>
            <View style={styles.item}>
              <View style={styles.itemNumber}>
                <Text style={styles.textRocNbr} h4 h4Style={{fontSize:14}}>1</Text>
              </View>
              <View style={{...styles.itemContent}}>
                <View style={{flexDirection:'row', flex:1}}>
                <View style={{flex:1}}>
                <Text style={styles.textRocBold} h4 h4Style={{fontSize:14, fontFamily:'Roboto-Bold'}}>Rechercher, identifier et supprimer les causes de la plaie</Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <Icon
                  size={20}
                  name={this.state.showCase == 0 ? 'chevron-up' : 'chevron-down'}
                  type='entypo'
                  color="#2271b3"
                />
                </View>

                </View>
                  {this.state.showCase == 0 &&
                  <View>
                    <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:14}}>Corps étrangers, chaussures, ongles trop longs, hyperappui.</Text>
                    </View>
                    }
                </View>
            </View>
            </TouchableHighlight>

            <TouchableWithoutFeedback style={styles.itemSelected} onPress={() => {
                value = -1
               /* if (this.state.showCase != 1) {
                  value = 1
                }*/
                this.setState({showCase: value})
              }}>
   
            <View style={styles.item}>
            <View style={styles.itemNumber}>
                <Text style={styles.textRocNbr} h4 h4Style={{fontSize:14}}>2</Text>
              </View>
              <View style={{...styles.itemContent}}>
              <View style={{flexDirection:'row', flex:1}}>
                <View style={{flex:1}}>
                <Text style={styles.textRocBold} h4 h4Style={{fontSize:14, fontFamily:'Roboto-Bold'}}>Mesurer la plaie et prendre une photo</Text>
                </View>
                </View>
                {this.state.showCase == 1 && <View>
                  <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:14}}>Utile pour le suivi.</Text>
                  </View>
                  }
                </View>
            </View>
            </TouchableWithoutFeedback>

            <TouchableHighlight style={styles.itemSelected} onPress={() => {
                value = -1
                if (this.state.showCase != 2) {
                  value = 2
                }
                this.setState({showCase: value})
              }}>
            <View  style={styles.item}>
            <View style={styles.itemNumber}>
                <Text style={styles.textRocNbr} h4 h4Style={{fontSize:14}}>3</Text>
              </View>
              <View style={styles.itemContent}>
              <View style={{flexDirection:'row', flex:1}}>
                <View style={{flex:1}}>
                <Text style={styles.textRocBold} h4 h4Style={{fontSize:14, fontFamily:'Roboto-Bold'}}>Mise en décharge de la plaie</Text>
                </View>
                <View style={{alignSelf:'center'}}>
                <Icon
                  size={20}
                  name={this.state.showCase == 2 ? 'chevron-up' : 'chevron-down'}
                  type='entypo'
                  color="#2271b3"
                />
                </View>
                </View>
                {this.state.showCase == 2 && <View>
                <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:14}}>Prescrire un appareillage de décharge adapté au site de la plaie.</Text>
                <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:14, textDecorationLine:'underline'}}>Appareillage inamovible recommandé :</Text>
                <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:14}}>- Botte en résine ou botte platrée.</Text>
                <View style={{marginTop:10}}>
                <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:14}}>- Si non accessible :</Text>
                  <View style={{paddingBottom:8, paddingLeft:8, paddingRight:8}}>
                    <Text style={styles.textRocBold} h4 h4Style={{fontSize:12, fontFamily:'Roboto-Bold'}}>Plaie de l'avant pied :</Text>
                    <View style={{paddingTop:4, paddingLeft:8, paddingRight:8}}>
                    <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:12}}>CHUT de décharge de l’avant pied.</Text>
                    <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:12}}>ou</Text>
                    <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:12}}>Botte de décharge.</Text>
                    </View>
                  </View>
                  <View style={{paddingTop:8, paddingLeft:8, paddingRight:8}}>
                  <Text style={styles.textRocBold} h4 h4Style={{fontSize:12, fontFamily:'Roboto-Bold'}}>Plaie du médiopied :</Text>
                  <View style={{paddingTop:4, paddingLeft:8, paddingRight:8}}>
                  <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:12}}>Botte de décharge.</Text>
                    <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:12}}>et/ou</Text>
                    <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:12}}>Béquillage.</Text>
                    </View>
                  </View>
                  <View style={{paddingTop:8, paddingLeft:8, paddingRight:8}}>
                  <Text style={styles.textRocBold} h4 h4Style={{fontSize:12, fontFamily:'Roboto-Bold'}}>Plaie du talon :</Text>
                  <View style={{paddingLeft: 8, paddingRight:8, paddingTop:4}}>
                  <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:12}}>CHUT de décharge du talon.</Text>
                  </View>
                  </View>
                </View>
              </View>}
              </View>
            </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.itemSelected} onPress={() => {
                value = -1
                if (this.state.showCase != 3) {
                  value = 3
                }
                this.setState({showCase: value})
              }}>
            <View style={styles.item}>
            <View style={styles.itemNumber}>
                <Text style={styles.textRocNbr} h4 h4Style={{fontSize:14}}>4</Text>
              </View>
              <View style={styles.itemContent}>
              <View style={{flexDirection:'row', flex:1}}>
                <View style={{flex:1}}>
                <Text style={styles.textRocBold} h4 h4Style={{fontSize:14, fontFamily:'Roboto-Bold'}}>Soins locaux quotidiens</Text>
                </View>
                <View style={{alignSelf:'center'}}>
                <Icon
                  size={20}
                  name={this.state.showCase == 3 ? 'chevron-up' : 'chevron-down'}
                  type='entypo'
                  color="#2271b3"
                />
                </View>
                </View>
                {this.state.showCase == 3 && <View>
                  <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:14}}>Ordonnance par IDE à domicile : "Soins lourds et complexes de pieds diabétiques à réaliser tous les jours, dimanche et jours fériés compris."</Text>

                <Text style={styles.textRocBold} h4 h4Style={{fontSize:14, fontFamily:'Roboto-Bold'}}>Écrire le protocole :</Text>
                <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:14}}>- Débridement des zones d’hyperkératose ou de fibrine à l’aide d’une curette ou d’un scalpel.</Text>
                <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:14}}>- Nettoyer au serum physiologique.</Text>
                <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:14}}>- Appliquer un pansement adapté ou une compresse sèche et ne pas utiliser les hydrocolloides.</Text>
                <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:14}}>- Bandage (pas de collant sur la peau).</Text>
                </View>}
                </View>
            </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.itemSelected} onPress={() => {
                value = -1
                if (this.state.showCase != 4) {
                  value = 4
                }
                this.setState({showCase: value})
              }}>
            <View style={styles.item}>
            <View style={styles.itemNumber}>
                <Text style={styles.textRocNbr} h4 h4Style={{fontSize:14}}>5</Text>
              </View>
              <View style={styles.itemContent}>
              <View style={{flexDirection:'row', flex:1}}>
                <View style={{flex:1}}>

                <Text style={styles.textRocBold} h4 h4Style={{fontSize:14, fontFamily:'Roboto-Bold'}}>Biologie</Text>
                </View>
                <View style={{alignSelf:'center'}}>
                <Icon
                  size={20}
                  name={this.state.showCase == 4 ? 'chevron-up' : 'chevron-down'}
                  type='entypo'
                  color="#2271b3"
                />
                </View>
                </View>
                {this.state.showCase == 4 && <View>
                <Text style={styles.textRoc} h4 h4Style={{...styles.textRoc, fontSize:14}}>NFS CRP HbA1c et Albuminémie</Text>
                </View>}
                </View>
            </View>
            </TouchableHighlight>

            <TouchableWithoutFeedback style={styles.itemSelected} onPress={() => {
                value = -1
                if (this.state.showCase != 5) {
                  value = 5
                }
                this.setState({showCase: value})
              }}>
            <View style={styles.item}>
            <View style={styles.itemNumber}>
                <Text style={styles.textRocNbr} h4 h4Style={{fontSize:14}}>6</Text>
              </View>
              <View style={styles.itemContent}>

                <Text style={styles.textRocBold} h4 h4Style={{fontSize:14, fontFamily:'Roboto-Bold'}}>Suivi hebdomadaire</Text>
              </View>
            </View>
            </TouchableWithoutFeedback>

            <TouchableHighlight style={styles.itemSelected} onPress={() => {
                value = -1
                if (this.state.showCase != 6) {
                  value = 6
                }
                this.setState({showCase: value})
              }}>
            <View style={styles.item}>
            <View style={styles.itemNumber}>
                <Text style={styles.textRocNbr} h4 h4Style={{fontSize:14}}>7</Text>
              </View>
              <View style={styles.itemContent}>
              <View style={{flexDirection:'row', flex:1}}>
                <View style={{flex:1}}>
              <Text style={styles.textRocBold} h4 h4Style={{fontSize:14, fontFamily:'Roboto-Bold'}}>Réévaluation à 2 semaines</Text>
              </View>
                <View style={{alignSelf:'center'}}>
                <Icon
                  size={20}
                  name={this.state.showCase == 6 ? 'chevron-up' : 'chevron-down'}
                  type='entypo'
                  color="#2271b3"
                />
                </View>
                </View>
              {this.state.showCase == 6 &&
              <View>
                <TouchableHighlight style={{}} underlayColor='transparent' onPress={() => {
                  footDiabService.reset(FootDiabService.mode.REEVAL)
                  navigate('Reeval', {footDiabService})
          
                }}>
                  <View style={{padding:10, alignSelf:'center'}}>
                <Text  style={{...styles.textRoc, textDecorationLine:'underline', color:'#03a9f4'}} h4 h4Style={{fontSize:14}}>Commencer la réévaluation</Text>
                </View>
                </TouchableHighlight>
                </View>}
                </View>
            </View>
            </TouchableHighlight>

            
            <View style={{marginBottom:24}}>
              <Text style={styles.textRoc} h1 h1Style={{...styles.textRoc, fontSize:10, textAlign:'center'}}>"Selon les dernières recommandations du IWGDF de 2019"</Text>
            </View>


        </ScrollView>
      </View>
      );
    }
  }


  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
   //   margin: 10,
      backgroundColor: '#fafafa',
    //  alignItems: 'center',
   //   justifyContent: 'center',
    },
    itemSelected: {
      marginBottom:8,
      borderRadius: 5
    },
    item: {
        backgroundColor:'#EDEDED',
        borderRadius: 5, borderWidth:2, borderColor:'#ECECEC',
        padding:10,
        flexDirection:'row',
        alignItems:'center',
    },
    itemNumber: {
      paddingRight: 10
//      borderRightWidth:1,
      //backgroundColor:'red'
    },
    itemContent: {
      flex:1,
      borderLeftWidth:1,
      paddingLeft: 10,
    //  paddingRight: 10,
      borderColor: '#FDFDFD'
      //backgroundColor:'green'
    },
    scollViewContainer: {
      paddingTop: 10,
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
    textRocBold: {
      color: "#424242",
      fontFamily:'Roboto-Bold',
      padding: 3
    },
    textRoc: {
        fontWeight: 'normal',
       // textAlign: 'center',
        color: "#424242",
        fontFamily:'Roboto-Regular',
        padding: 3
    },
    textRocNbr: {
      // textAlign: 'center',
       color: "#424242",
       padding: 3,
       fontFamily:'Roboto-Bold'
      // fontWeight: 'bold'
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

  export default HealingAndDumpScreen;