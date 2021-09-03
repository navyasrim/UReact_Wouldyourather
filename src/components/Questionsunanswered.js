import React, { Component } from 'react'
import { connect } from 'react-redux'
import images from '../components/images/images'
import { handleAnswerQuestion } from '../actions/questions'

class Questionsunanswered extends Component {

    state = {
        selection: '',
    }
    onSelect = (e) => {
        let selection = e.target.id
        this.setState(() => ({
            selection,
        }))
    }

        handleSubmit = (e) => {
            e.preventDefault();
            const { selection } = this.state
            const { id, dispatch } = this.props       
            dispatch(handleAnswerQuestion(id, selection))
        }
        render() {
            const { author, question } = this.props
            const optionOne = question.optionOne.text
            const optionTwo = question.optionTwo.text
            const image = author.avatarURL
            return (
                <div
                    style={{                       
                        margin: '0px auto'
                    }}>
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
                    <form className="answer-selector"
                        style={{ display: 'inline-block', }}
                        onSubmit={this.handleSubmit}>
                        <h2> Would You Rather... </h2>
                        <div>
                            <input
                                type="radio"
                                id="optionOne"
                                name="option"
                                value={optionOne}
                                onChange={this.onSelect}
                                checked={this.state.selection === 'optionOne'}
                            />
                            <label htmlFor="optionOne">{optionOne}</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="optionTwo"
                                name="option"
                                value={optionTwo}
                                onChange={this.onSelect}
                                checked={this.state.selection === 'optionTwo'}
                            />
                            <label htmlFor="optionTwo">{optionTwo}</label>
                        </div>
                        <button
                            className='btn'
                            type='submit'
                            disabled={this.state.selection === ''}>
                            Submit
          </button>
                    </form>
                </div>
            )


        }
    }

function mapStateToProps({ questions, users }, { id }) {


    return {

        author: users[questions[id].author],
        question: questions[id],
        id,

    }
}

export default connect(mapStateToProps)(Questionsunanswered)