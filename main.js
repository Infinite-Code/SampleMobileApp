/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import {
    AppRegistry,
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'


class AppWithStore extends React.Component {
    constructor(props) {
        super(props)
        this.store = createStore(reducers)
    }
    render() {
        return (
            <Provider store={this.store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('SampleMobileApp', () => AppWithStore)
