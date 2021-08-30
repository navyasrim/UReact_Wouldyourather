import React, { Component } from 'react'
import { connect } from 'react-redux'
import Questionsanswered from '../components/Questionsanswered'
import Questionsunanswered from '../components/Questionsunanswered'

class Nomatch extends Component {
    render() {
        const { id, hasAnswered } = this.props;
        //console.log(hasAnswered);
        console.log('here', this.props.questions[id]);
        if (this.props.question === 'question does not exist') {
            return (
                <div style={{ dislay: 'flex', flex: 1, fontSize: '100px' }}>
                    No Matching ERROR 404 
                </div>
            )
        }
        else {
            let unanswered = !hasAnswered;
            return (
                unanswered ?
                    <div className='Question'>
                        <Questionsunanswered id={id} />

                    </div> :

                    <div className='Question'>
                        <Questionsanswered id={id} />
                    </div>
            )
        }
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {

    const { id } = props.match.params;
    const question = questions[id] ? questions[id] : 'question does not exist';

    let userAnswers =
        (authedUser !== '') ?
            users[authedUser].answers
            : [];

    //will be -1 if question is unanswered
    let hasAnswered = Object.keys(userAnswers).indexOf(id);

    return {
        authedUser,
        questions,
        question,
        hasAnswered: hasAnswered >= 0,
        id
    }
}

export default connect(mapStateToProps)(Nomatch);