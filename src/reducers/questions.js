import { RECEIVE_QUESTIONS } from '../actions/questions'
import { ADD_NEW_QUESTION } from '../actions/questions'
import { ANSWER_QUESTION } from '../actions/questions'
//default state is assigned with empty object
export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                //new state of user slice has everything which is empty obj also
                ...state,
                //all of the users grabbing from the action
                ...action.questions
            }
        case ADD_NEW_QUESTION:
            const { question } = action;
            const id = question.id;
            return {
                ...state,
                [id]: question,
            }
        case ANSWER_QUESTION:
            const { qid, answer, authedUser } = action;
            return {
                ...state,
                [qid]:
                {
                    ...state[qid],
                    [answer]:
                    {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }

        default:
            return state

    }
}
