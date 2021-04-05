import firebase from '../Firebase/fbConfig'


export const UserLogin = (email, password) => dispatch => {
    const fetchData = async () => {
        const db = firebase.firestore()
        const data = await db.collection('users').where('email', '==', email).get()
            .then(snapshot => snapshot.forEach(x => {
                dispatch({
                    type: 'USER_LOGIN',
                    payload: x.data(),
                    id: x.id
                })
            }))

    }
    fetchData()
}

export const registerUser = (formdata) => dispatch => {
    const db = firebase.firestore()
    db.collection("users").add({ ...formdata }).then(() => {
        dispatch({
            type: "REGISTER_USER"
        })
    })

}

export const updateProfile = (data, id) => dispatch => {
    const db = firebase.firestore()
    db.collection("users").doc(id).update({ ...data })
    dispatch({
        type: "UPDATE_PROFILE"
    })
}