import React, { Component } from 'react'
import { connect } from 'react-redux'
import Usercard from '../components/Usercard'

class Leaderboard extends Component {
    render() {
        const { userIDs, getScore } = this.props;
        return (
            <div id='leaderboard'>
                {userIDs.map((userID) => (<Usercard userID={userID} getScore={getScore} />))}
               </div>

        )
    }
}

function mapStateToProps({ users }) {
    function getScore(user) {
        return user.questions.length + Object.keys(user.answers).length;
    }

    return {
        userIDs: Object.keys(users).sort(
            (a, b) => getScore(users[b]) - getScore(users[a])
        ),
        getScore,
    }
}

export default connect(mapStateToProps)(Leaderboard)