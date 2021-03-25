import React, { Component, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact'
import CarouselPage from '../components/CarouselPage'
import Card from '../components/Card'
import CategoriesBtn from '../components/CategoriesBtn'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAvailableItems, getAllItems, searchItem } from '../Redux/Actions/itemAction'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Main extends Component {
    state = {
        FilteredPosts: '',
        username: localStorage.getItem("username"),
        usertype: localStorage.getItem("usertype"),
        itemList: [],
        search: '',
        searchDisplay: false
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
        if (this.state.search !== '')
            this.setState({ searchDisplay: true })
        else
            this.setState({ searchDisplay: false })
    }
    componentDidMount() {
        this.props.getAllItems()
    }
    validateLogin = () => {
        this.props.history.push('/logout')
    }
    onKeyPress = (e) => {
        if (e.key === 'Enter')
            this.searchitem()
    }
    searchitem = () => {
        this.props.searchItem(this.state.search)
    }

    render() {
        let PopularListing = this.props.itemlist.map(x => <MDBCol size="4"> <Card post={x} /> </MDBCol>)
        let SearchListing = this.props.searchList.map(x => <MDBCol size="4"> <Card post={x} /> </MDBCol>)
        let searchResult = (this.props.searchList.length !== 0) ? <MDBRow> <MDBCol size="12"><h3>Search Results</h3> <br />{SearchListing}</MDBCol></MDBRow> : <React.Fragment></React.Fragment>
        return (
            <div>
                <Navbar navigate={this.validateLogin} />
                <br />
                <MDBContainer>
                    <MDBRow >
                        <MDBCol size>
                            <div>
                                <MDBBtn className='red-text pr-4 pl-4' floating size="lg" color='white'>
                                    <MDBIcon icon="align-justify" />
                                </MDBBtn>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <CarouselPage />
                        </MDBCol>
                    </MDBRow>
                    <br />
                    <br />

                    {searchResult}
                    <MDBRow>
                        <MDBCol>
                            <h3>Popular Listings</h3>
                            <MDBInput id="search" onChange={this.handleChange} onKeyDown={this.onKeyPress} value={this.state.search} label="Search" />
                            <MDBRow>
                                {PopularListing}
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

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
        // Assigning the state properties into our propname
        // propname  :  state.somefield
        item: state.item.items,
        itemlist: state.item.itemList,
        searchList: state.item.searchlist
    }
}


//connect is a function, returns a higher order component
//higher order component is wrapping the home component
export default connect(mapStateToProps, { getAvailableItems, getAllItems, searchItem })(Main)