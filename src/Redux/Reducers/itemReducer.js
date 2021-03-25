const initState = {
    items: [],
    selectedItem: [],
    collectionPoints: [],
    itemList: [],
    searchlist: []
}

const itemReducers = (state = initState, action) => {

    switch (action.type) {
        case 'GET_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        case 'GET_ITEM':
            return {
                ...state,
                selectedItem: action.payload
            }
        case 'SEARCH_ITEM':
            return {
                ...state,
                searchlist: action.payload
            }
        case 'ADD_ITEM':
            return {
                ...state,
                addlist: action.payload
            }

        case 'FETCH_POST':
            return {
                ...state,
                itemList: action.payload
            }
        case 'GET_COLLECTION_POINTS':
            return {
                ...state,
                collectionPoints: action.payload
            }
        default:
            return state;
    }
}
export default itemReducers;