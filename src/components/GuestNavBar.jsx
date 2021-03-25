import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBFooter, MDBNavLink, MDBIcon } from 'mdbreact';


class GuestNavbar extends Component {
    state = {
        collapseID: '',
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    closeCollapse = collID => () => {
        const { collapseID } = this.state;
        window.scrollTo(0, 0);
        collapseID === collID && this.setState({ collapseID: '' });
    };

    render() {
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
        );
        const { collapseID } = this.state;
        return (
            <div>
                <MDBNavbar color='rgba-pink-strong' dark expand='md' fixed='top' scrolling>
                    <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
                        <MDBIcon fab icon="gratipay" style={{ height: '1.5rem', width: '1.5rem' }} />
                        <strong className='align-middle'>SecondLove</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        onClick={this.toggleCollapse('mainNavbarCollapse')}
                    />
                    <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                        
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/signup'
                                >
                                    <strong>Signup</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/login'
                                >
                                    <strong>Login</strong>
                                </MDBNavLink>
                            </MDBNavItem>

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        )
    }
}
export default GuestNavbar