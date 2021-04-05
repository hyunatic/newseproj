import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { registerUser } from '../Redux/Actions/userAction'
import { connect } from 'react-redux'
import GuestNavBar from '../components/GuestNavBar'
import Footer from '../components/Footer'
import sha256 from 'sha256';

class Signup extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        cfmpassword: '',
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    Validate = () => {
        if (this.state.name === ""){
            alert("Username cannot be empty")
            return
        }
        if (this.state.email === ""){
            alert("Email cannot be empty")
            return
        }
        if (this.state.cfmpassword !== this.state.password){
            alert("Password doesn't match")
            return
        }
        this.userRegister()
    }

    userRegister = () => {
        const form = {
            handle: this.state.name,
            email: this.state.email,
            password: sha256(this.state.password)
        }
        this.props.registerUser(form)
        this.props.history.push('/login')
    }
    render() {
        return (
            <React.Fragment>
                <GuestNavBar />
                <br />
                <MDBContainer >
                    <MDBRow >
                        <MDBCol md="12">
                            <h1>Create a new account!</h1>
                        </MDBCol>
                        <MDBCol md="6">
                            <form>
                                <div className="grey-text">
                                    <MDBInput label="Name" id="name" onChange={this.handleChange} icon="user-alt" group type="text" validate error="wrong"
                                        success="right" value={this.state.name} />
                                    <MDBInput label="Email Address" id="email" icon="envelope" onChange={this.handleChange} group type="email" validate error="wrong"
                                        success="right" value={this.state.email} />
                                    <MDBInput label="Password" id="password" icon="lock" group onChange={this.handleChange} type="password" validate value={this.state.password} />
                                    <MDBInput label="Confirm Password" id="cfmpassword" icon="lock" onChange={this.handleChange} group type="password" validate value={this.state.cfmpassword} />
                                </div>
                                <div className="text-center">
                                    <MDBBtn onClick={this.Validate} color="red" size="lg">Sign Up</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                        <MDBCol md="6">
                            <br /><br />
                            <img src="http://agora.rovernet.eu/wp-content/uploads/2020/01/Registration.jpeg" className="img-fluid" alt="" />
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