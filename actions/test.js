import { createActions } from 'reduxsauce'

import Types from '../actions/types'


export const updateUserName = (userName) => {
    return {
        type: Types.TEST_UPDATE_USERNAME,
        userName: userName,
    }
}

export const updateTimestamp = () => {
    return {
        type: Types.TEST_UPDATE_TIMESTAMP,
    }
}

export const updateDescription = (description) => {
    return {
        type: Types.TEST_UPDATE_DESCRIPTION,
        description: description,
    }
}

// thunks
export const getDescription = () => {
    return (dispatch) => {
        return fetch('https://api.github.com/users/cheeming')
            .then(
                // OK
                (resp) => {
                    return resp.json();
                },
                // Error
                (reason) => {
                    dispatch(updateDescription('Failed to get bio'));
                })
            .then(
                (data)  => {
                    dispatch(updateDescription(data.bio));
                });
    }
}
