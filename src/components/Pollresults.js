import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import images from '../components/images/images'


class Pollresults extends Component {
   
    render() {
        //question card
        const { question, author, id } = this.props;
        if (question === null) {
            return <p> This Question doesn't exist </p>
        }
     

        const image = author.avatarURL;
        return (
            <div>
                <div className='displayGrid-itemsheader' >
                    {author.name} asks:
        </div>
                <img
                    className='avatar'
                    src={images[image]}
                    alt={`avatar of ${author.name}`}
                    style={{ width: '120px', height: '80px', marginTop: '20px' }}
                />
                <div className='question-summary'>
                    <strong> Would You Rather</strong>
                    <br />
                    <span>...{question.optionOne.text.slice(0, 300)}...</span>
                    <br />
                    <Link to={`/question/${id}`} > View Poll </Link>                
                </div>
                </div>
          
        )


    }
}


function mapStateToProps({ authedUser, users, questions }, { id }) {

    let userAnswers = users[authedUser].answers
    //will be -1 if question is unanswered
    let hasAnswered = Object.keys(userAnswers).indexOf(id);

    return {
        authedUser,
        question: questions[id]
            ? questions[id]
            : null,
        hasAnswered,
        author: users[questions[id].author],
        id,
    }

}
export default connect(mapStateToProps)(Pollresults);