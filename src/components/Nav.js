import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/authedUser'
import images from './images/images.js'
import { createBrowserHistory as createHistory } from 'history'

class Nav extends Component {
    state = {
        //loading: false
        toHome: 'false',
    }
    history = createHistory()

    handleLogout = (e) => {
        e.preventDefault()
        console.log('history', this.history)
        this.history.push("/")
        const { dispatch } = this.props;
        dispatch(logOutUser())
    }
    render() {
        const { user } = this.props;
        const image = user.avatarURL;
        return (
            <nav className='nav'
                style={{
                    display: 'flex',                   
                }}>
                <ul >
                    <li
                        className='navLink'>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
            </NavLink>
                    </li>
                    <li className='navLink'>
                        <NavLink to='/add' exact activeClassName='active' >
                            New Question
            </NavLink>
                    </li>
                    <li className='navLink'>
                        <NavLink to='/leaderboard' exact activeClassName='active' >
                            Leader Board
            </NavLink>
                    </li>        
                                   
                        <li className='navLink'>                         
                                Hello, {user.name}                         
                          </li>                              
                    <li className='navLink' >
                            <img
                                className='avatar logInAvatar'
                                src={images[image]}
                                alt={`avatar of ${user.name}`}
                                style={{
                                    display: 'inline-block',
                                    margin: '0px auto',
                                    height: '30px',
                                    width: '30px'
                                }}
                            />
                       
                    </li>
                    <li className='navLink' style={{ marginLeft: '10px' }}>
                        <NavLink to='/' exact activeClassName='active' onClick={this.handleLogout}>
                            Log Out
            </NavLink>
                    </li>
                      </ul>
                </nav>
        )
    }
}

function mapStateToProps({ authedUser,users,  }) {
        return {
            authedUser,
            user: users[authedUser],
        }
    }

    export default connect(mapStateToProps)(Nav)

