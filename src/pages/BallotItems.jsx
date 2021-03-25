// import React, { Component } from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBIcon } from "mdbreact";
// import PendingItems from '../components/PendingItems';
// import { connect } from 'react-redux'
// //import { getAllBallotItems, ballotItem } from '../Redux/Actions/itemAction'
// import { getUserData } from '../Redux/Actions/userAction'
// import { bindActionCreators } from 'redux'
// import { Link } from 'react-router-dom';

// class BallotItems extends Component {

//     constructor(props) {
//         super(props)
//         this.handleBallotItem = this.handleBallotItem.bind(this)
//         this.state= {
//             //ballot: [],
//             isLoading: false
//         }
//     };

//     componentDidMount() {
//         this.props.getAllBallotItems()
//         console.log("ballot items:", this.props.ballotItems)
//         this.props.getUserData()
//         console.log("userData:", this.props.user.credentials)
//         // this.setState(() => ({
//         //     ...state,
//         //     item: {
//         //       ...this.state.ballot,
//         //       ballot:this.props.ballotItems
//         //     }
//         //   }));
//         // this.props.item.forEach(element => {
//         //     console.log(element)
//         // });
//     }

//     handleBallotItem(itemId) {
//         //Need to find how to load the page dynamically
//         if (this.props.user.credentials.isAdmin) {
//             this.props.ballotItem(itemId)
//         }
//         else {
//             alert("Unauthorised. Please login as admin first.");
//             this.props.history.push('/login');
//         }
//     }

//     display = this.props.ballotItems.length? this.props.ballotItems.map((eachItem) => {
//         console.log(this.props.ballotItems)
//         return (
//             <tr>
//                 <td><img src={eachItem.imageUrl}
//                     width='200' height='200' className="img-fluid" alt="ballotItem image"></img></td>
//                 <td><div>Item name: {eachItem.itemName}</div>
//                     <div>Item condition: {eachItem.itemCondition}</div></td>
//                 <td>{eachItem.location}</td>
//                 <td>
//                     <MDBBtn color="success" onClick={() => this.handleBallotItem(eachItem.itemId)}>
//                         <MDBIcon icon="check" className="mr-1" /> Ballot
//                                             </MDBBtn>
//                 </td>
//             </tr>
//         )
//     }) : "Empty";

//     render() {
//         return (
//             <MDBContainer>
//                 <MDBRow>
//                     <MDBCol>
//                         <div>
//                             <h3>Ballot Items</h3>
//                             <hr />
//                             <MDBTable striped>
//                                 <MDBTableHead>
//                                     <tr>
//                                         <th>Picture</th>
//                                         <th>Item name and description</th>
//                                         <th>Location</th>
//                                         <th>Ballot</th>
//                                     </tr>
//                                 </MDBTableHead>
//                                 <MDBTableBody>
//                                     {this.display}
//                                 </MDBTableBody>
//                             </MDBTable>
//                         </div>
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>
//         )
//     }

// }
// const mapStateToProps = state => {
//     return {
//         ballotItems: state.item.items,
//         ui: state.ui,
//         user: state.user
//     }
// }

// const mapDispatchToProps = dispatch => bindActionCreators(
//     { getAllBallotItems, ballotItem, getUserData }
//     , dispatch);

// //connect is a function, returns a higher order component
// //higher order component is wrapping the home component
// export default connect(mapStateToProps, mapDispatchToProps)(BallotItems)