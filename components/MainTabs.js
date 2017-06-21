/**
 * @flow
 */

import React from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <Text>{banner}</Text>
    <Button
      onPress={() => {
        navigation.goBack(null);
      }}
      title="Go back"
    />
  </ScrollView>
);

const HomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home" navigation={navigation} />
);

const FavScreen = ({ navigation }) => (
  <MyNavScreen banner="Favourites" navigation={navigation} />
);

const AddScreen = ({ navigation }) => (
  <ScrollView>
    <Text>Choose the type of post you want to create</Text>
    <Button onPress={() => {}} title="Announcements, Shout Out" />
    <Button onPress={() => {}} title="Open Question" />
    <Button onPress={() => {}} title="Quick Poll" />
    <Button onPress={() => {}} title="Celebration, Gratitude" />
  </ScrollView>
);

const SearchScreen = ({ navigation }) => (
  <MyNavScreen banner="Search" navigation={navigation} />
);

const ProfileScreen = ({ navigation }) => (
  <MyNavScreen banner="Profile" navigation={navigation} />
);

const CustomTabBar = ({ navigation }) => {
  const { routes } = navigation.state;
  return (
    <View style={styles.tabContainer}>
      {routes.map(route => (
        <TouchableOpacity
          onPress={() => navigation.navigate(route.routeName)}
          style={styles.tab}
          key={route.routeName}
        >
          <Text>{route.routeName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const CustomTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForState(navigation.state);
  return (
    <View style={styles.container}>
      <ActiveScreen
        style={{flex: 1}}
        navigation={addNavigationHelpers({
          ...navigation,
          state: routes[index],
        })}
      />
      <CustomTabBar navigation={navigation} />
    </View>
  );
};

const CustomTabRouter = TabRouter(
  {
    Home: {
      screen: HomeScreen,
      path: 'home',
    },
    Favourites: {
      screen: FavScreen,
      path: 'fav',
    },
    Add: {
      screen: AddScreen,
      path: 'settings',
    },
    Search: {
      screen: SearchScreen,
      path: 'search',
    },
    Profile: {
      screen: ProfileScreen,
      path: 'profile',
    },
  },
  {
    // Change this to start on a different tab
    initialRouteName: 'Home',
  }
);

const MainTabs = createNavigationContainer(
  createNavigator(CustomTabRouter)(CustomTabView)
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 48,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});

export default MainTabs;
