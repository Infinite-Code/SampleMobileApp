// @flow

import { connect } from 'react-redux'

import TestScreens from '../components/TestScreens';
import {
    updateUserName,
    updateTimestamp,
    updateDescription,
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
            dispatch(updateUserName('John Doe'))
        },
        onUpdateTimestamp: () => {
            dispatch(updateTimestamp())
        },
        onGetDescription: () => {
            dispatch(updateDescription('Getting bio...'))
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
