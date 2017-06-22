// @flow

import { connect } from 'react-redux'

import TestScreens from '../components/TestScreens';
import {
    Creators,
    getDescription,
} from '../actions/test';


const mapStateToProps = (state) => {
    return {
        userName: state.test.userName,
        email: state.test.email,
        timestamp: state.test.timestamp,
        description: state.test.description,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateUserName: () => {
            dispatch(Creators.testUpdateUsername('John Doe'))
        },
        onUpdateTimestamp: () => {
            dispatch(Creators.testUpdateTimestamp())
        },
        onGetDescription: () => {
            dispatch(Creators.testUpdateDescription('Getting bio...'))
            dispatch(getDescription())
                .then(() => {
                    console.log('onGetDescription.complete');
                })
        }
    }
}

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(TestScreens.HomeScreen)
