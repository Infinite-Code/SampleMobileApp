import React from 'react';
import {
    Button,
    View,
} from 'react-native';

import { Title } from './Common';


export class HomeScreen extends React.Component {
    render() {
        const navigate = this.props.navigation.navigate;
        return (
            <View>
                <Title>Home</Title>
                <Button
                    onPress={() => navigate('DrawerOpen')}
                    title="Open Drawer" />
            </View>

        );
    }
}

export class ProfileScreen extends React.Component {
    render() {
        return (
            <View>
                <Title>Profile</Title>
            </View>
        );
    }
}

export class AboutScreen extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <View>
                <Title>About</Title>
                <Button
                    onPress={() => navigation.goBack()}
                    title="Go Back" />
            </View>
        );
    }
}

export default {
    HomeScreen,
    ProfileScreen,
    AboutScreen,
};
