export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_NEWQUESTION = 'ADD_NEWQUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveusers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}
