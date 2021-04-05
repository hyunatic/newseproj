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
        password: '',
        wrongauth: false,
        emailError: "",
        passwordError: "",
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

   validate = () => {
    let emailError = "";
    let passwordError = "";

    if (this.state.email) {
      if (!this.state.email.includes('@')) {
        emailError = "invalid email";
      }
    }
    else {
      emailError = "email cannot be empty";
    }

    if (!this.state.password) {
      passwordError = "password cannot be empty";
      
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError })
      return false;
    }
    return true;
  };
    
    handleSubmit = () => {
       
        const isValid = this.validate();
        if (isValid) {
    
          this.setState({
            emailError: "",
            passwordError: "",
            password: sha256(this.state.password),
          });

          this.props.UserLogin(this.state.email);
         
    
        }
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
        
        else {//Login Failed
        this.setState({
            password: '',
            email: '',
            wrongauth: true,
            
        })
        alert ("Wrong username / password!")
    }
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
                                    <div style={{ fontSize: 20, color: "rgb(255, 61, 61)" }} > {this.state.emailError} </div>
                                    <MDBInput label="Password" icon="lock" group type="password" onChange={this.handleChange} id="password" validate value={this.state.password} />
                                    <div style={{ fontSize: 20, color: "rgb(255, 61, 61)" }} > {this.state.passwordError} </div>
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