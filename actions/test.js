import Parse from 'parse/react-native'

// basic actions
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

export const updateGamescore = (gamescore) => {
    return {
        type: 'TEST_UPDATE_GAMESCORE',
        data: gamescore,
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

// Setup models
// NOTE: Move the definition of the objects into another module/file
const GameScore = Parse.Object.extend('GameScore')


export const getParseGameScore = () => {
    return (dispatch) => {
        let gs = new GameScore();
        gs.set('score', parseInt(Math.random() * 10000))
        gs.set('playerName', 'John Doe')
        gs.save(null, {
            success: (newGS) => {
                var query = new Parse.Query(GameScore)
                query.get(newGS.id, {
                    success: (gameScore) => {
                        let gameScoreStr = gameScore.get('playerName') + ', ' + gameScore.get('score') + ', ' + gameScore.get('createdAt')
                        dispatch(updateGamescore(gameScoreStr))
                    },
                    error: (object, error) => {
                        dispatch(updateGamescore('ERROR getting Gamescore: ' + error.code + ', ' + error.message))
                    }
                })
            },
            error: (object, error) => {
                dispatch(updateGamescore('ERROR saving Gamescore: ' + error.code + ', ' + error.message))
            }
        })

    }
}
