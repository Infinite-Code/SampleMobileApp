const getDateNow = () => new Date().toISOString()

const initialState = {
    userName: 'Jane Doe',
    email: 'jane@example.com',
    timestamp: getDateNow(),
}

const test = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST_UPDATE_USERNAME':
            return {
                ...state,
                userName: action.data,
            }
        case 'TEST_UPDATE_TIMESTAMP':
            return {
                ...state,
                timestamp: getDateNow(),
            }
        default:
            return state
    }
}
export default test;
