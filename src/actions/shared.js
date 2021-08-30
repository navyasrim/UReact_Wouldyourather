import { getInitialData } from '../utils/api'
import { receiveusers } from '../actions/users'
import { receivequestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = '';

//returning a function handleInitialData() from an action creator, we have tohook up redux thunk middleware
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveusers(users))
                dispatch(receivequestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())

            })
    }
}
