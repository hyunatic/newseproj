import React, { Component, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { loginUser } from '../Redux/Actions/userAction'
import { connect } from 'react-redux'
import GuestNavbar from '../components/GuestNavBar';
import Footer from '../components/Footer';

class LoginPage extends Component {

    // You don't have to this way, its long winded 
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         customer: {
    //             email: props.email,
    //             password: props.password
    //         }
    //     }
    //     this.handleSubmit = this.handleSubmit.bind(this)
    //     this.handleSignInImmediate = this.handleSignInImmediate.bind(this)
    // }

    //This way works the same
    state = {
        email: '',
        password: ''
    }
    // Use functionName = () => {} instead of function(){} so dun have to write this.function.bind(this) syntax
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = () => {
        // email: "lovecode@email.com",
        // password: "123456"
        const form = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(form)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.logintoken.token) {
            localStorage.setItem("token", nextProps.logintoken.token)
            localStorage.setItem("username", this.state.email)
            localStorage.setItem("usertype", "Normal User")
            this.props.history.push('/')
        }
        else if (nextProps.logintoken.error) {
            this.setState({ email: '', password: '' })
            alert(nextProps.logintoken.error)
        }
    }

    render() {
        return (
            <div>
                <GuestNavbar />
                <MDBContainer >
                    <br/>
                    <MDBRow>
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
                <br/>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    logintoken: state.user.response
});

//export default LoginPage
export default connect(mapStateToProps, { loginUser })(LoginPage)