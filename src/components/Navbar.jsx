import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBFooter, MDBNavLink, MDBIcon } from 'mdbreact';


class Navbar extends Component {
    state = {
        collapseID: '',
        username: localStorage.getItem("name"),
        admin: localStorage.getItem("usertype")
    };
    componentDidMount() {
        if (!this.state.username)
            this.props.navigate()
    }

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
        const { collapseID } = this.state;
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
        );
        if (this.state.admin === "false") {
            return (
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
                                    exact
                                    to='/'
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                >
                                    <strong>Home</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/profile'
                                >
                                    <strong>Profile</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/status'
                                >
                                    <strong>My Orders</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/mydonate'
                                >
                                    <strong>My Donation Items</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/donation'
                                >
                                    <strong>Donation</strong>
                                </MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/logout'
                                >
                                    <strong>Logout</strong>
                                </MDBNavLink>
                            </MDBNavItem>

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            )

        }
        else {
            return (
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
                                    to='/profile'
                                >
                                    <strong>Profile</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                        <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/approval'
                                >
                                    <strong>Approval</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/logout'
                                >
                                    <strong>Logout</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            )
        }
    }
}
export default Navbar