import firebase from '../Firebase/fbConfig'

export const getAvailableItems = () => dispatch => {
    fetch('https://us-central1-secondlove-cc51b.cloudfunctions.net/api/items')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_ITEMS',
            payload: data
        }))

}

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
export const approveItem = (id) => dispatch => {
    const db = firebase.firestore()
    db.collection("items").doc(id).update({ itemStatus: 'Approved' })
    dispatch({
        type: "APPROVE_ITEM"
    })
}
export const updateItem = (id) => dispatch => {
    const db = firebase.firestore()
    db.collection("items").doc(id).update({ itemStatus: 'PendingCollection' })
    dispatch({
        type: "UPDATE_ITEM"
    })
}

export const addRequest = (formdata) => dispatch => {
    const db = firebase.firestore()
    db.collection("requests").add({ ...formdata })
    dispatch({
        type: "ITEM_REQUEST"
    })
}
export const deleteItem = id => dispatch => {
    const db = firebase.firestore()
    db.collection("items").doc(id).delete()
    dispatch({
        type: "DELETE_ITEM",
        payload: data
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

