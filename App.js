import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Home'
import TerrainScreen from './TerrainScreen'
import CliniqueScreen from './CliniqueScreen';
import DiagnosticScreen from './DiagnosticScreen';
import WoundStateScreen from './WoundStateScreen';
import ReevalScreen from './ReevalScreen'


const AppNavigator = createStackNavigator(
  
  {
    Home: HomeScreen,
    Terrain: TerrainScreen,
    Clinique: CliniqueScreen,
    Diagnostic: DiagnosticScreen,
    WoundState: WoundStateScreen,
    Reeval: ReevalScreen
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2271b3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home',
    }
  }
);


export default createAppContainer(AppNavigator);
