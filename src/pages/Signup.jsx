import React, { Component, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { registerUser } from '../Redux/Actions/userAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GuestNavBar from '../components/GuestNavBar'
import Footer from '../components/Footer'

class Signup extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        cfmpassword: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit() {
        console.log(this.state.customer);
        this.props.registerUser(this.state.customer)
    }
    componentWillReceiveProps(nextProps) {
        //When post is sent and received response
        //move to login page
        if(nextProps.register !== 0)
            this.props.history.push('/login')
    }
    render() {
        return (
            <React.Fragment>
                <GuestNavBar />
                <br />
                <MDBContainer >
                    <MDBRow >
                        <MDBCol size='12' >
                            <h1>Create a new account!</h1>
                        </MDBCol>
                        <MDBCol md="6">
                            {<form>
                                <div className="grey-text">
                                    <MDBInput label="Username" id="username" onChange={this.handleChange} icon="user-alt" group type="text" validate error="wrong"
                                        success="right" value={this.state.username} />
                                    <MDBInput label="Email Address" id="email" icon="envelope" onChange={this.handleChange} group type="email" validate error="wrong"
                                        success="right" value={this.state.email} />
                                    <MDBInput label="Password" id="password" icon="lock" group onChange={this.handleChange} type="password" validate value={this.state.password} />
                                    <MDBInput label="Confirmed Password" id="cfmpassword" icon="lock" onChange={this.handleChange} group type="password" validate value={this.state.cfmpassword} />
                                </div>
                                <div className="text-center">
                                    <MDBBtn onlick={this.handleSubmit(this)} color="red" size="lg" href="http://localhost:3000/login">Sign Up</MDBBtn>
                                </div>
                            </form>}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br />
                <Footer />
            </React.Fragment>

        )
    }
}
const mapStateToProps = state => ({
    register: state.user.response
})

//export default Signup
export default connect(mapStateToProps, { registerUser })(Signup)