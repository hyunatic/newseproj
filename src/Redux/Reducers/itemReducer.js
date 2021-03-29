const initState = {
    categories: []

}

const itemReducers = (state = initState, action) => {

    switch (action.type) {
        case 'GET_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        case 'UPDATE_ITEM':
            return {
                ...state,
            }
        case 'GET_CATEGORY':
            return {
                ...state,
                categories: action.payload
            }
        case 'ITEM_REQUEST':
            return {
                ...state,
            }
        case 'ADD_ITEM':
            return {
                ...state,
            }
        case 'FETCH_POST':
            return {
                ...state,
            }
        case 'GET_COLLECTION_POINTS':
            return {
                ...state,
            }
        default:
            return state;
    }
}
export default itemReducers;