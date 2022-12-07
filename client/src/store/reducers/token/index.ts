
const initialState = {
    token: ''
}

export function token(state = initialState, action: any) {
    switch (action.type) {
        case 'CHANGE_TOKEN':
            return {
                ...state, 
                token: action.token
            }
        default:
            return state
    }
}