/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import {
    AppRegistry,
    AsyncStorage,
} from 'react-native'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import Parse from 'parse/react-native'

import App from './components/App'
import { Title } from './components/Common'
import reducers from './reducers'


class AppWithStore extends React.Component {
    state: {
        ready: boolean,
    }
    store: any

    constructor(props) {
        super(props)
        this.state = {
            ready: false,
        }

        this.store = createStore(reducers, applyMiddleware(thunk),
                                 compose(autoRehydrate()))

        persistStore(this.store, {
            whitelist: ['test'],
            storage: AsyncStorage,
        }, () => {
            console.log('Rehydration completed')
            // TODO: Please REMOVE!
            // Slow it down to show, loading message
            setTimeout(() => {
                this.setState({ready: true})
            }, 1000)
        });

        // setup parse
        const PARSE_APP_ID = '123456'
        const PARSE_SERVER_URL = 'http://localhost:1337/parse/'
        Parse.initialize(PARSE_APP_ID)
        Parse.serverURL = PARSE_SERVER_URL
    }
    render() {
        if (!this.state.ready) {
            return <Title>Loading...</Title>
        }
        return (
            <Provider store={this.store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('SampleMobileApp', () => AppWithStore)
