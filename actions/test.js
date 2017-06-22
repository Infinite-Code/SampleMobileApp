import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
    testUpdateUsername: ['userName'],
    testUpdateTimestamp: null,
    testUpdateDescription: ['description'],
}, {})

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
                    dispatch(Creators.testUpdateDescription('Failed to get bio'));
                })
            .then(
                (data)  => {
                    dispatch(Creators.testUpdateDescription(data.bio));
                });
    }
}
