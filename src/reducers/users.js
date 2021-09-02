import { RECEIVE_USERS } from '../actions/users'
import { ADD_NEW_QUESTION } from '../actions/users'
import { ANSWER_QUESTION } from '../actions/users'




//default state is assigned with empty object
export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                //new state of user slice has everything which is empty obj also
                ...state,
                //all of the users grabbing from the action
                ...action.users
            }
        case ADD_NEW_QUESTION:
            const { question } = action;
            const id = question.id;
            const author = question.author;
            const oldUserInfo = state[author];
            return {
                ...state,
                [author]:
                {
                    ...oldUserInfo,
                    questions: oldUserInfo.questions.concat([id]),
                }
            }
        case ANSWER_QUESTION:
            const { qid, answer, authedUser } = action;

         return {

        ...state,
        [authedUser]:
        {
            ...state[authedUser],
            answers:
            {
                ...state[authedUser].answers,
                [qid]: answer,
            }
        }
         }

        default:
            return state

    }
}