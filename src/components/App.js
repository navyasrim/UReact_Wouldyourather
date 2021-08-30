import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from '../components/Nav'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import Leaderboard from '../components/Leaderboard'
import Nomatch from '../components/Nomatch'
import AddNewQuestion from '../components/Addnewquestion'
import './App.css'
import '../index.css';



class App extends Component {
    //when component mounts we want to dispatch invocation of handleInitialData action creator
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        const loggedOut = (this.props.authedUser === '') || !this.props.authedUser
        console.log(this.props.user)
        return (
            <div>
                { loggedOut
                    ? <Login />
                    :
                    <Router>
                        <Fragment>
                            <LoadingBar />
                            <div className="main-container">
                            <Nav />
                                <Route path='/' exact component={Dashboard} />
                                <Route path='/add' component={AddNewQuestion} />
                                <Route path='/leaderboard' component={Leaderboard} />
                                <Route path='/question/:id' component={Nomatch} />
                               
                            </div>
                        </Fragment>
                    </Router>
                }
            </div>
        );
        
    }
}

function mapStateToProps({ authedUser }) {
    return {
        //loading will be true if authedUser null
    loading : authedUser === null,
       authedUser,
       }
}
//we need to connect our App component  to get invocation 
export default connect(mapStateToProps) (App)
