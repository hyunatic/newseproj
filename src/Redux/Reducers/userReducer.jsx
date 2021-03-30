const initState = {
    loading: false,
    credentials: {},
    requests: [],
    notifications: [],
    response: []
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_AUTHENTICATED':
            return {
                ...state,
                response: action.payload
            }
        case 'SET_UNAUTHENTICATED':
            return initState

        case 'SET_USER':
            return {
                authenticated: true,
                loading: false,
                ...action.payload
            }
        case 'USER_REGISTERED':
            return {
                ...state,
                response: action.payload
            }

        case 'UPDATE_PROFILE':
            return {
                ...state,
            };

        case 'LOADING_USER':
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}
export default userReducer;