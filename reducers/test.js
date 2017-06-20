const getDateNow = () => new Date().toISOString()

const initialState = {
    userName: 'Jane Doe',
    email: 'jane@example.com',
    timestamp: getDateNow(),
    description: '',
    gamescore: 'GAME_SCORE',
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
        case 'TEST_UPDATE_DESCRIPTION':
            return {
                ...state,
                description: action.data,
            }
        case 'TEST_UPDATE_GAMESCORE':
            return {
                ...state,
                gamescore: action.data,
            }
        default:
            return state
    }
}
export default test;
