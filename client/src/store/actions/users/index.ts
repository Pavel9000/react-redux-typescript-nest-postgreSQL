

import { Dispatch } from "redux"
import { change_message } from "../message"

export function change_get_all(users: []) {
    return {
        type: 'CHANGE_GET_ALL',
        users: users
    }
}

export function getAll() {
    return async (dispatch: Dispatch<any>, getState: any) => {
        try {
            const url = 'http://localhost:5000/api/users'
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer '+getState().token.token,
                    'Content-Type': 'application/json; charset=utf-8'
                }
            })
            const json = await response.json()
            if (response.status !== 200) {
                return dispatch(change_message('Ошибка авторизации'))
            }
            dispatch(change_get_all(json))
        } catch (error) {
            return dispatch(change_message('Ошибка'))
        }
    }
}