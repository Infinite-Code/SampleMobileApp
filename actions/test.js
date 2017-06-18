export const updateUserName = (userName) => {
    return {
        type: 'TEST_UPDATE_USERNAME',
        data: userName,
    }
}

export const updateTimestamp = () => {
    return {
        type: 'TEST_UPDATE_TIMESTAMP',
    }
}

export const updateDescription = (description) => {
    return {
        type: 'TEST_UPDATE_DESCRIPTION',
        data: description,
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
