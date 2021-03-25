import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Test extends Component {

    render() {
        console.log(this.props.projects)
        return (
            <div>
                test page
            </div>
        )
    }
}

const mapStatetoProps = state => {
    console.log(state)
    projects: state.firestore.data
};
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'items' }
    ])
)(Test);