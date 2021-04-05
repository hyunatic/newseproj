import React, { Component, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { UserLogin } from '../Redux/Actions/userAction'
import { connect } from 'react-redux'
import GuestNavbar from '../components/GuestNavBar';
import Footer from '../components/Footer';
import sha256 from 'sha256';

class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = () => {
        this.setState({ password: sha256(this.state.password) })
        this.props.UserLogin(this.state.email)
    }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.loginResponse)
            return

        if (nextProps.loginResponse.password == this.state.password) {
            localStorage.setItem("id", nextProps.loginID)
            localStorage.setItem("username", this.state.email)
            localStorage.setItem("name", nextProps.loginResponse.handle)
            localStorage.setItem("usertype", nextProps.loginResponse.isAdmin)
            localStorage.setItem("bio", nextProps.loginResponse.bio)
            localStorage.setItem("location", nextProps.loginResponse.location)
            localStorage.setItem("image", nextProps.loginResponse.imageUrl)
            this.props.history.push('/')
        }

        //Login Failed
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <GuestNavbar />
                <MDBContainer >
                    <br />
                    <MDBRow center>
                        <MDBCol md="12">
                            <h3 className="pink-text">Welcome to SecondLove</h3>
                            <hr />
                            <form>
                                <div className="grey-text">
                                    <MDBInput label="Email Address" id="email" icon="envelope" onChange={this.handleChange} group type="email" validate error="wrong" success="right" value={this.state.email} />
                                    <MDBInput label="Password" icon="lock" group type="password" onChange={this.handleChange} id="password" validate value={this.state.password} />
                                </div>
                                <div className="text-center">
                                    <MDBBtn onClick={this.handleSubmit} color="red" size="lg">Login</MDBBtn>
                                    <p></p>
                                    <p> <a href="http://localhost:3000/signup" >Click here to sign up if don't have an account</a></p>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loginResponse: state.user.loginCred,
    loginID: state.user.userid,
});

//export default LoginPage
export default connect(mapStateToProps, { UserLogin })(LoginPage)