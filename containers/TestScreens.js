// @flow

import { connect } from 'react-redux'

import TestScreens from '../components/TestScreens';
import {
    Creators,
    getDescription,
    getParseGameScore,
} from '../actions/test';


const mapStateToProps = (state) => {
    return {
        userName: state.test.userName,
        email: state.test.email,
        timestamp: state.test.timestamp,
        description: state.test.description,
        gamescore: state.test.gamescore,
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
        },
        onGetParseGameScore: () => {
            dispatch(getParseGameScore())
        }
    }
}

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(TestScreens.HomeScreen)
