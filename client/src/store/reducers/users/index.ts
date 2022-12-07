
const initialState = {
    users: []
}

export function users(state = initialState, action: any) {
    switch (action.type) {
        case 'CHANGE_GET_ALL':
            return {
                ...state, 
                users: action.users
            }
        default:
            return state
    }
}