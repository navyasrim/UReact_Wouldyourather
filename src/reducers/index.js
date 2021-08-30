import { combineReducers } from 'redux'
import authedUser from '../reducers/authedUser'
import questions from '../reducers/questions'
import users from '../reducers/users'
import { loadingBarReducer } from 'react-redux-loading'

//combing all reducers into one main reduce(to a single state obj) so that we can create store for single reducer
export default combineReducers({
    authedUser,
    questions,
    users,
    loadingBar : loadingBarReducer,

})
