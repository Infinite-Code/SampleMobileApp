import Parse from 'parse/react-native'
import { createActions } from 'reduxsauce'


export const { Types, Creators } = createActions({
    testUpdateUsername: ['userName'],
    testUpdateTimestamp: null,
    testUpdateDescription: ['description'],
    testUpdateGamescore: ['gamescore'],
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
                        dispatch(Creators.testUpdateGamescore(gameScoreStr))
                    },
                    error: (object, error) => {
                        dispatch(Creators.testUpdateGamescore('ERROR getting Gamescore: ' + error.code + ', ' + error.message))
                    }
                })
            },
            error: (object, error) => {
                dispatch(Creators.testUpdateGamescore('ERROR saving Gamescore: ' + error.code + ', ' + error.message))
            }
        })

    }
}
