import firebase from '../Firebase/fbConfig'
export const loginUser = (userData) => dispatch => {
    
     fetch('https://us-central1-secondlove-cc51b.cloudfunctions.net/api/login',{
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then((res) => {
            if(!res.ok) throw res;
            return res.json();
        })
        .then(data => dispatch({
            type: 'SET_AUTHENTICATED',
            payload: data
        }))
        .catch((err) => {
            err.json().then((body)=>{
                dispatch({
                    type : 'SET_AUTHENTICATED',
                    payload : body
                })
            })
        });
}

export const getUserData = () => (dispatch) => {
    dispatch({ type: 'LOADING_USER' });
    fetch('https://us-central1-secondlove-cc51b.cloudfunctions.net/api/user',{
        method: 'GET',
        headers : {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.FBIdToken
        },
    })
    .then((res) => res.json())
    .then((data) => {
        dispatch({
          type: 'SET_USER',
          payload: data
        });
      })
      .catch((err) => console.log(err));
  }
  
export const registerUser = (userData) => dispatch => {
    fetch('https://us-central1-secondlove-cc51b.cloudfunctions.net/api/signup',{
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then((res) => {
            console.log("bro register user response coming in")
            if(!res.ok) throw res;
            return res.json();
        })
        .then(data => dispatch({
            type: 'USER_REGISTERED',
            payload: data
        }))
        .catch((err) => {
            console.log(err)
            err.json().then((body)=>{
                //console.log(body)
                dispatch({
                    type : 'SET_ERRORS',
                    payload : body
                })
            })
        });
}

export const updateProfile = (data,id) => dispatch => {
    const db = firebase.firestore()
    db.collection("users").doc(id).update({ ...data })
    dispatch({
        type: "UPDATE_PROFILE"
    })
}