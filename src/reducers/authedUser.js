import { SET_AUTHED_USER, LOG_OUT_USER } from '../actions/authedUser'
//initially state will be null so we use default parameters
export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id
        case LOG_OUT_USER:
            return ''
        default:
            return state
    }

}