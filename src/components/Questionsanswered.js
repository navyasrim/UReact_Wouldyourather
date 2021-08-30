import React, { Component } from 'react'
import { connect } from 'react-redux'
import images from './images/images'

class Questionsanswered extends Component {
    render() {
        const { author, question, authedUser } = this.props;
        const image = author.avatarURL;

        const optionOneText = question.optionOne.text;
        const optionTwoText = question.optionTwo.text;

        let isAuthedUserOptionOne =
            question.optionOne.votes.indexOf(authedUser) >= 0;

        const optionOneVotes = question.optionOne.votes.length;

        const optionTwoVotes = question.optionTwo.votes.length;

        const optionOnePercent =
            Math.round(optionOneVotes / (optionOneVotes + optionTwoVotes) * 100) + '%';

        const optionTwoPercent =
            Math.round(optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100)
            + '%';

        return (
            <div
                style={{
                    
                    margin: '0px auto'
                }}
                className='result-component'>
                <div
                    className='question-header'
                    style={{ display: 'block' }}
                >
                    {author.name} asks:
        </div>
                <img
                    className='avatar'
                    src={images[image]}
                    alt={`avatar of ${author.name}`}
                    style={{
                        display: 'inline-block',
                        height: '150px',
                        width: '175px',
                        marginTop: '25px'
                    }}
                />

                <div className='results'>
                    <h2 style={{ display: 'block' }}>
                        Results:
          </h2>
                    <div
                        className='percentage-card'
                        id='option-one-percentage'
                        style={{
                            backgroundColor: isAuthedUserOptionOne ?
                                'aqua' :
                                'azure'
                        }}>
                        {'Would you rather ' + optionOneText + '?'}
                        <div class='percentage-bar'
                            style={{
                                width: '100%',
                                backgroundColor: 'grey',
                            }}>
                            <div class='percentage-filler'
                                style={{
                                    height: '30px',
                                    backgroundColor: 'green',
                                    width: optionOnePercent,
                                    textAlign: 'center'
                                }} >
                                {optionOnePercent}
                            </div>
                            <div class='percentage-label'
                                style={{ textAlign: 'center', }}>
                                {`${optionOneVotes} out of ${optionOneVotes + optionTwoVotes} votes`}
                            </div>
                        </div>
                    </div>
                    <div
                        className='percentage-card'
                        id='option-two-percentage'
                        style={{
                            backgroundColor: !isAuthedUserOptionOne ?
                                'aqua' :
                                'azure'
                        }}>
                        {'Would you rather ' + optionTwoText + '?'}
                        <div class='percentage-bar'
                            style={{
                                width: '100%',
                                backgroundColor: 'grey',
                            }}>
                            <div class='percentage-filler'
                                style={{
                                    height: '30px',
                                    backgroundColor: 'green',
                                    width: optionTwoPercent,
                                    textAlign: 'center'
                                }} >
                                {optionTwoPercent}
                            </div>
                            <div class='percentage-label'
                                style={{ textAlign: 'center', }}>
                                {`${optionTwoVotes} out of ${optionOneVotes + optionTwoVotes} votes`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
    return {
        authedUser,
        author: users[questions[id].author],
        question: questions[id],
        id,

    }
}

export default connect(mapStateToProps)(Questionsanswered)