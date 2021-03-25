import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { adduser } from '../Redux/Actions/itemAction'

class Test extends Component {
    addUser = () => {
        const form = {
            id: "brendan",
            email: "brendan@hotmail.com",
            handle: "cs",
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/secondlove-cc51b.appspot.com/o/no-img.png?alt=media",
            isAdmin: false,
            createdAt: new Date()
        }
        this.props.adduser(form)
    }

    render() {
        //let itemlist = this.props.itemlist.map(x => x.itemName)
        const { userlist } = this.props
        console.log(userlist)
        return (
            <div>
                {userlist && userlist.map(x => x.email)}
                <button onClick={this.addUser}>Add</button>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    console.log(state)
    return {
        itemlist: state.firestore.ordered.items,
        userlist: state.firestore.ordered.users
    }
};
var dbNeeded = [{ collection: 'items' }, { collection: 'users' }]
//Table name collectionpoint, items, notifications, requests, users
export default compose(
    connect(mapStatetoProps, { adduser }),
    firestoreConnect(dbNeeded)
)(Test);