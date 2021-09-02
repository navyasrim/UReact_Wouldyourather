import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddNewQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import { Fragment } from 'react'

class Addnewquestion extends Component {
    state = {
        questionOne: '',
        questionTwo: '',
        toHome: false,
    }

    handleOptionOne = (e) => {
        const questionOne = e.target.value

        this.setState(() => ({
            questionOne
        }))
    }

    handleOptionTwo = (e) => {
        const questionTwo = e.target.value

        this.setState(() => ({
            questionTwo
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { questionOne, questionTwo } = this.state;
        const { dispatch } = this.props;
        //Add question to the store
        //just make sure it is working
        console.log(
            'New Question: ', questionOne, 'or', questionTwo
        );
        dispatch(handleAddNewQuestion(questionOne, questionTwo));

        //after done resetting fields to empty
        this.setState(() => ({
            questionOne: '',
            questionTwo: '',
            toHome: true,
        }))
    }
    render() {
        //comes questionOne, questionTwo, toHome from setstate then assigning to value={} in textarea
        const { questionOne, questionTwo, toHome } = this.state
        const qOneLeft = 280 - questionOne.length
        const qTwoLeft = 280 - questionTwo.length
        //redirencting to home after sumbitting is done
        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <Fragment>
                <div id='user-card'>
                    <div className='displayGrid-itemsheader' >
                        <h1 style={{ fontWeight: 'bold' }}>  Create New Question </h1>
                        </div>
                     
                    <div className='displayGrid-itemsheader' >

                        Complete the Question:
                         
                <br />
                        <h2 style={{ fontWeight: 'bold' }}> Would you rather ...</h2>

                        <form className='new-question' onSubmit={this.handleSubmit}>
                            <textarea
                                placeholder="Enter Option One Text Here"
                                value={questionOne}
                                onChange={this.handleOptionOne}
                                className='textarea'
                                maxLength={280}
                            />
                            {qOneLeft <= 100 && (
                                <div className='new-question-length'>
                                    {qOneLeft}

                                </div>
                            )}
                            <span style={{ fontWeight: 'bold', textAlign: 'center', width : '90%' }}>  OR </span>
                            <textarea
                                placeholder="Enter Option Two Text Here"
                                value={questionTwo}
                                onChange={this.handleOptionTwo}
                                className='textarea'
                                maxLength={280}
                            />
                            {qTwoLeft <= 100 && (
                                <div className='new-question-length'>
                                    {qTwoLeft}

                                </div>
                            )}
                            <br />
                            <button
                                className='btn'
                                type='submit'
                                disabled={questionOne === ""  && questionTwo === "" }>
                                Submit
          </button>

                        </form>
                    </div>
             
                       
                </div>
            </Fragment>
        )
    }

}


function mapStateToProps({ authedUser }) {
    return ({ authedUser });
}

export default connect(mapStateToProps)(Addnewquestion);