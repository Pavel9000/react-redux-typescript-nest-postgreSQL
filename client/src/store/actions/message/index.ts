
export function change_message(message: string) {
    return {
        type: 'CHANGE_MESSAGE',
        message: message
    }
}
