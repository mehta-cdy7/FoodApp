import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from './src/screens/SearchScreen';
import ScreenResultDetails from "./src/screens/ScreenResultDetails";


const navigator = createStackNavigator({

  Search: SearchScreen,
  ShowResultDetail : ScreenResultDetails,
  

}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator); 