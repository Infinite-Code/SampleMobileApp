/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
    AppRegistry,
} from 'react-native';
import {
    TabNavigator,
    DrawerNavigator,
} from 'react-navigation';

import TabBarBottom from './components/TabBarBottom';
import TestScreens from './components/TestScreens';


const MainTab = TabNavigator({
    Home: {screen: TestScreens.HomeScreen},
    Profile: {screen: TestScreens.ProfileScreen},
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
});

const App = DrawerNavigator({
    Home: {screen: MainTab},
    About: {screen: TestScreens.AboutScreen},
});


AppRegistry.registerComponent('SampleMobileApp', () => App);
