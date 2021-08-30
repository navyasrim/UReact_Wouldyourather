import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Fragment } from 'react'
import images from './images/images'

class Usercard extends Component {

    render() {
        const { user, getScore } = this.props;
        const totalAnswers = Object.keys(user.answers).length;
        const totalQuestions = user.questions.length;
        const image = user.avatarURL;
        return (
            <Fragment>
            <div id='user-card'>
                <img
                    src={images[image]}
                    alt={`avatar of ${user.name}`}
                    className='avatar'
                    style={{ width: '120px', height: '80px', marginTop: '20px' }}
                />
                <div id='user-info'>
                    <h3>{user.name}</h3>
                    <div className='user-questions answered-questions'>
                        Answered Questions  :    {totalAnswers}
                    </div>
                    <div className='user-questions answered-questions'>
                        Asked Questions  :     {totalQuestions}
                    </div>
                </div>
                    <div id='score-card' style={{ border: "1px solid", float: "inline-start" }}>
                        <Fragment>
                            <div id='score' style={{ border: "1px solid" }} > Score  </div>
                            <div id='score-number'>{getScore(user)}</div>
                        </Fragment>
                </div>

                </div>
            </Fragment>

        );
    }
}

function mapStateToProps({ users }, { userID, getScore }) {
    /* getScore is passed from leaderboard component,
       accepts a user and calculates score*/
    return {
        user: users[userID],
        getScore,
    }
}

export default connect(mapStateToProps)(Usercard)