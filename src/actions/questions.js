
import { saveQuestion } from '../utils/api'
import { saveQuestionAnswer  } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receivequestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function answerQuestion({ qid, authedUser, answer }) {

    return {
        type: ANSWER_QUESTION,
        qid,
        authedUser,
        answer
    }
}


export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        }).then(() => dispatch(answerQuestion({ qid, authedUser, answer })))
            .then(() => dispatch(hideLoading()));
    }
}

//new question

function addNewQuestion(question) {
    return {
        type: ADD_NEW_QUESTION,
        question
    }
}


export function handleAddNewQuestion(questionOne, questionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading()); 
        return saveQuestion({
            optionOneText: questionOne,
            optionTwoText: questionTwo,
            author: authedUser,
        })
            .then((question) => dispatch(addNewQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}
