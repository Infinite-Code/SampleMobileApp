import {
    TabNavigator,
    DrawerNavigator,
} from 'react-navigation';

import TabBarBottom from './TabBarBottom';
import TestScreens from './TestScreens';
import { HomeScreen } from '../containers/TestScreens'


const MainTab = TabNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: TestScreens.ProfileScreen},
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
});

const App = DrawerNavigator({
    Home: {screen: MainTab},
    About: {screen: TestScreens.AboutScreen},
});
export default App;
