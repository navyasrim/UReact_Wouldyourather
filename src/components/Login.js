import React, { Component } from 'react'
import { connect } from 'react-redux'
import images from './images/images'
import { setAuthedUser } from '../actions/authedUser'



class Login extends Component {
    state = {       
        value : '',
    };
  //  handleLoading = () => {
    //    this.setState({ loading: true });
  //  };
    handleChange = (e) => {
        console.log(e.target);
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { value } = this.state;
        const { dispatch } = this.props;     
        dispatch(setAuthedUser(value))
    }
    render() {
        const { users, loading } = this.props;
        console.log(Object.entries(users));
        return (
            <div className='login'>
                <div className='login-header'>
                    <h2>Welcome to the Would You Rather App!</h2>
                    <h4> Please Sign In to continue</h4>
                </div>
             <img
                    className='avatar'
                    src={images.Image__Logo}
              alt={`Logo`}
              style={{display: 'block',
                      margin: '0px auto',
                      width: '40%',
                      height: '50%',
                    }}
            />
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h3> Sign In </h3>
                        <select 
                            value={this.state.value}
                            onChange={this.handleChange}                            
                            defaultValue=''
                            style={{ width: '95%', height : '30px' }}>
                            <option value={''}>Select</option>
                            {Object.values(users).map((user) =>
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            )}
                        </select>
                    </label>
                    <input type="submit" disabled={this.state.value === '' } value="Sign In" style={{ width: '95%', height: '30px', backgroundColor: 'darkgray', fontFamily: 'Times New Roman', fontSize: '20px', color: 'black' }} />
                </form>
            </div>
       
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users,
        loading: Object.entries(users).length === 0
    }
}
export default connect(mapStateToProps)(Login)