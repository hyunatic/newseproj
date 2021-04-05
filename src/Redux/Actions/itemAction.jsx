import firebase from '../Firebase/fbConfig'

export const adduser = (record) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("users").add({
            ...record
        }).then(() => {
            dispatch({
                type: 'USER_ADD'
            })
        })
    }
}

export const donateItem = (record) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("items").add({
            ...record
        }).then(() => {
            dispatch({
                type: 'ADD_ITEM'
            })
        })
    }
}

export const approveItem = (id) => dispatch => {
    const db = firebase.firestore()
    db.collection("items").doc(id).update({ itemStatus: 'Approved', approved: true })
    dispatch({
        type: "APPROVE_ITEM"
    })
}
export const updateItem = (id) => dispatch => {
    const db = firebase.firestore()
    db.collection("items").doc(id).update({ itemStatus: 'PendingCollection', recipient: localStorage.getItem("userhandle") })
    dispatch({
        type: "UPDATE_ITEM"
    })
}

export const collectItem = (id) => dispatch => {
    const db = firebase.firestore()
    db.collection("items").doc(id).update({ itemStatus: 'Collected' })
    dispatch({
        type: "COLLECT_ITEM"
    })
}

export const addRequest = (formdata) => dispatch => {
    const db = firebase.firestore()
    db.collection("requests").add({ ...formdata })
    dispatch({
        type: "ITEM_REQUEST"
    })
}

export const rejectItem = (id) => dispatch => {
    const db = firebase.firestore()
    db.collection("items").doc(id).update({ itemStatus: 'Rejected' })
    dispatch({
        type: "REJECTED_ITEM"
    })
}

export const deleteItem = id => dispatch => {
    const db = firebase.firestore()
    db.collection("items").doc(id).delete()
    dispatch({
        type: "DELETE_ITEM",
    })
}

export const ballotItem = (itemId) => dispatch => {
    fetch(`https://us-central1-secondlove-cc51b.cloudfunctions.net/api/item/${itemId}/ballotItem`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.FBIdToken
            }
        })
        .then((res) => {
            if (!res.ok) throw res;
            return res.json();
        })
        .then(data => {
            dispatch({
                type: 'GET_ITEMS',
                payload: data
            })
            dispatch({ type: 'CLEAR_ERRORS' })
        })
        .catch((err) => {
            console.log(err)
            err.json().then((body) => {
                dispatch({
                    type: 'SET_ERRORS',
                    payload: body
                })
            })
        });
}

