
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../Home';
import AddNewScreen from '../AddNew';

export default StackNavigator({
  HomeScreen: { screen: HomeScreen },
  AddNewScreen: { screen: AddNewScreen }
}, {
    headerMode: 'none'
  });
