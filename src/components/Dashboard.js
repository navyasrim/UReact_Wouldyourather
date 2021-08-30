import React, { Component } from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import Pollresults from '../components/Pollresults'

class Dashboard extends Component {
    state = {
        answered: false,
    }
    answered = (e) => {
        e.preventDefault();

        if (!this.state.answered) {

            this.setState(() => ({
                answered: !this.state.answered,
            }))
        }
    }

    unanswered = (e) => {
        e.preventDefault();


        if (this.state.answered) {
            this.setState(() => ({
                answered: !this.state.answered,
            }))
        }
    }
    render() {
        const { answered } = this.state;
        return (
            <div className='dashboard'>             
                <nav className='dashboard-nav-bar'>
                    <span style={{
                        backgroundColor: !answered ? 'lightgray' : '',
                        color: !answered ? 'white' : 'black', alignContent
                            : 'center'
                    }}
                        onClick={this.unanswered}
                        id='unanswered-nav'
                        className="dashboard-nav">

                        Unanswered Questions
          </span>
                    <span style={{
                        backgroundColor: answered ? 'lightgray' : '',
                        color: answered ? 'white' : 'black'
                    }}
                        onClick={this.answered}
                        id='answered-nav'
                        className="dashboard-nav">

                        Answered Questions
          </span>
                </nav>
                <Fragment>
                    {answered ?
                        <div className ="diplayGrid">                          
                            {this.props.answeredQuestionIds.map((id) => (
                                <div className="displayGrid-items" key={id}>
                                <Pollresults id={id} />
                            </div>
                        ))}                          
                        </div> :
                        <div className="diplayGrid">                  
                        {this.props.unansweredQuestionIds.map((id) => (
                            <div className="displayGrid-items" key={id}>
                                <Pollresults id={id} />
                            </div>
                        ))}
                        </div>
                    }
                </Fragment>
              </div>
            )
    }

}
function mapStateToProps({ questions, authedUser, users }) {


    //sort by timestamp
    const questionIds = Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    const authedUserAnswers = Object.keys(users[authedUser].answers);

    const answeredQuestionIds = [];

    const unansweredQuestionIds = [];


    //sorts questions into answered and unanswered arrays
    questionIds.map((id) => {
        if (authedUserAnswers.includes(id)) {
            answeredQuestionIds.push(id);
            return id;
        }
        else {
            unansweredQuestionIds.push(id);
            return id;
        }
    })


    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        answeredQuestionIds,
        unansweredQuestionIds,

    }
}
export default connect(mapStateToProps) (Dashboard)
