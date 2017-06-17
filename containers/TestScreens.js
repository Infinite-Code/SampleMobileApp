import { connect } from 'react-redux'

import TestScreens from '../components/TestScreens';
import {
    updateUserName,
    updateTimestamp,
} from '../actions/test';


const mapStateToProps = (state) => {
    return {
        userName: state.test.userName,
        email: state.test.email,
        timestamp: state.test.timestamp,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateUserName: () => {
            dispatch(updateUserName('John Doe'))
        },
        onUpdateTimestamp: () => {
            dispatch(updateTimestamp())
        }
    }
}

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(TestScreens.HomeScreen)
