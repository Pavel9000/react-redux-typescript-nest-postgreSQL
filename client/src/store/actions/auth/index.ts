

import { Dispatch } from "redux"
import { change_message } from "../message"
import { change_token } from "../token"

export function register_action( email: string, password: string, date_born: string ) {
    return async (dispatch: Dispatch<any>, getState: any) => {
        try {
            const url = 'http://localhost:5000/auth/registration'
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({email, password, date_born}),
                headers: {'Content-Type': 'application/json; charset=utf-8'}
            })
            const json = await response.json()
            if (json["token"] === undefined) {
                return dispatch(change_message('Ошибка регистрации'))
            }
            dispatch(change_token(json["token"]))
            localStorage.token = json["token"]
        } catch (error) {
            return dispatch(change_message('Ошибка регистрации'))
        }
    }
}

export function login_action( email: string, password: string ) {
    return async (dispatch: Dispatch<any>, getState: any) => {
        try {
            const url = 'http://localhost:5000/auth/login'
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({email, password}),
                headers: {'Content-Type': 'application/json; charset=utf-8'}
            })
            const json = await response.json()
            
            if (json["token"] === undefined) {
                return dispatch(change_message('Неверный логин или пароль'))
            }
            dispatch(change_token(json["token"]))
            localStorage.token = json["token"]
        } catch (error) {
            return dispatch(change_message('Неверный логин или пароль'))
        }
    }
}