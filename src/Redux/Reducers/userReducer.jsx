const initState = {
    loginCred: [],
    userid: ''
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                loginCred: action.payload,
                userid: action.id
            }
        case 'REGISTER_USER':
            return {
                ...state,
            }
        case 'UPDATE_PROFILE':
            return {
                ...state,
            }
        default:
            return state;
    }
}
export default userReducer;