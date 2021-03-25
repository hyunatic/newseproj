import React, { Component, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact'
import CarouselPage from '../components/CarouselPage'
import Card from '../components/Card'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { searchItem } from '../Redux/Actions/itemAction'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { firestoreConnect } from 'react-redux-firebase'

class Main extends Component {
    state = {
        FilteredPosts: '',
        username: localStorage.getItem("username"),
        usertype: localStorage.getItem("usertype"),
        itemList: [],
        search: '',
        searchResult: [],
        searchDisplay: true
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    validateLogin = () => {
        this.props.history.push('/logout')
    }
    onKeyPress = (e) => {
        this.searchitem()
    }
    searchitem = () => {
        var search = this.props.itemlist.filter(x => x.itemName.toLowerCase().includes(this.state.search))
        this.setState({ searchResult: search, searchDisplay: false })
    }
    Navigate = (itemID) => {
        this.props.history.push("/itemDetails/" + itemID)
    }

    render() {
        let PopularListing;
        if (this.props.itemlist)
            PopularListing = this.props.itemlist.map(x => <MDBCol size="4"> <Card viewItem={this.Navigate} post={x} /> </MDBCol>)
        return (
            <div>
                <Navbar navigate={this.validateLogin} />
                <br />
                <MDBContainer>
                    <h3>Search for items</h3>
                    <MDBInput id="search" onChange={this.handleChange} onKeyDown={this.onKeyPress} value={this.state.search} label="Search" />
                    <MDBRow>
                        {this.state.searchResult.length !== 0 && this.state.searchResult.map(x => {
                            return (
                                <MDBCol size="4"><Card viewItem={this.Navigate} post={x} /></MDBCol>
                            )
                        })}
                    </MDBRow>
                    {this.state.searchDisplay &&
                        <MDBRow>
                            <MDBCol>
                                <h3>Popular Listings</h3>
                                <MDBRow>
                                    {PopularListing}
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    }
                    <br />
                    <br />

                    <MDBRow>
                        <MDBCol>
                            <h3> Categories </h3>

                            <MDBRow>

                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footer />
            </div>

        )
    }
}
Main.propTypes = {
    getAvailableItems: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        itemlist: state.firestore.ordered.items,
    }
}


//connect is a function, returns a higher order component
//higher order component is wrapping the home component
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'items' }]))(Main)