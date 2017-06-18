import React from 'react';
import {
    Button,
    View,
} from 'react-native';
import PropTypes from 'prop-types'

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

                <Title>{this.props.userName}, {this.props.email}</Title>
                <Button
                    onPress={this.props.onUpdateUserName}
                    title="Update Username" />

                <Title>{this.props.timestamp}</Title>
                <Button
                    onPress={this.props.onUpdateTimestamp}
                    title="Update Timestamp" />

                <Title>{this.props.description}</Title>
                <Button
                    onPress={this.props.onGetDescription}
                    title="Get @cheeming bio" />
            </View>

        );
    }
}
HomeScreen.propTypes = {
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    onUpdateUserName: PropTypes.func.isRequired,
    onUpdateTimestamp: PropTypes.func.isRequired,
    onGetDescription: PropTypes.func.isRequired,
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
