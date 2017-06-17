const initialState = {
    userName: 'Jane Doe',
    email: 'jane@example.com',
}

const test = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST_UPDATE_USERNAME':
            return {
                ...state,
                userName: action.data,
            }
        default:
            return state
    }
}
export default test;
