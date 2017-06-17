import React from 'react';
import {
    Text,
} from 'react-native';


export class Title extends React.Component {
    render() {
        return (
            <Text style={{marginTop: 20, fontSize: 20, textAlign: 'center'}}>
                {this.props.children}
            </Text>
        );
    }
}
