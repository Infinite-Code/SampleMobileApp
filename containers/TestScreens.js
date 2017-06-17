import { connect } from 'react-redux'

import TestScreens from '../components/TestScreens';
import { updateUserName } from '../actions/test';


const mapStateToProps = (state) => {
    return {
        userName: state.test.userName,
        email: state.test.email,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateUserName: () => {
            dispatch(updateUserName('John Doe'))
        }
    }
}

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(TestScreens.HomeScreen)
