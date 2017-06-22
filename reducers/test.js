import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

import { Types } from '../actions/test'


const getDateNow = () => new Date().toISOString()

const INITIAL_STATE = Immutable({
    userName: 'Jane Doe',
    email: 'jane@example.com',
    timestamp: getDateNow(),
    description: '',
})

const updateUsername = (state = INITIAL_STATE, action) => {
    return {...state, userName: action.userName}
}

const updateTimestamp = (state = INITIAL_STATE, action) => {
    return {...state, timestamp: getDateNow()}
}

const updateDescription = (state = INITIAL_STATE, action) => {
    return {...state, description: action.description}
}

export const HANDLERS = {
    [Types.TEST_UPDATE_USERNAME]: updateUsername,
    [Types.TEST_UPDATE_TIMESTAMP]: updateTimestamp,
    [Types.TEST_UPDATE_DESCRIPTION]: updateDescription,
}


export default createReducer(INITIAL_STATE, HANDLERS);
