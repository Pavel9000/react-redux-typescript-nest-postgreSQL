
const initialState = {
    message: ''
}

export function message(state = initialState, action: any) {
    switch (action.type) {
        case 'CHANGE_MESSAGE':
            return {
                ...state, 
                message: action.message
            }
        default:
            return state
    }
}