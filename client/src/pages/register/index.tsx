import React, { FC, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {Dispatch} from 'redux'
import { useDispatch } from 'react-redux'
import { change_message } from '../../store/actions/message'
import { register_action } from '../../store/actions/auth'

import { Layout_empty } from '../../layouts/layout_empty'
import classes from './index.module.css'

const App: FC = () => {

    const navigate = useNavigate()
    
    const dispatch: Dispatch<any> = useDispatch()

    const [login, setLogin] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [date_born, setDate_born] = useState<string>('')
    const [checkbox, setCheckbox] = useState<boolean>(false)

    function register(): void {
        if ( login === '' ) {
            dispatch(change_message('Введите email'))
            return
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( !re.test( login ) ) {
            dispatch(change_message('Введите корректный email'))
            return
        }
        if ( pass === '' ) {
            dispatch(change_message('Введите пароль'))
            return
        }
        if ( pass.replace(' ', '').length < 8 ) {
            dispatch(change_message('Пароль должен содержать минимум 8 символов'))
            return
        }
        if ( date_born === '' ) {
            dispatch(change_message('Введите дату рождения'))
            return
        }
        if ( !checkbox ) {
            dispatch(change_message('Вы не приняли условия оферты'))
            return
        }
        dispatch(register_action( login, pass, date_born ))
    }

    return (
        <>
            <Layout_empty>
                <div className={classes.wrap}>
                    <div className={classes.form}> 

                        <div className={classes.register_login}>
                            <div className={classes.login} onClick={() => navigate('/')}>Вход</div>
                            <div className={classes.register}>Регистрация</div>
                        </div>

                        <div className={classes.wrap_inputs}>  
                            <div className={classes.input}> 
                                <div>Логин: </div> 
                                <input 
                                    type={'text'} 
                                    placeholder={'Введите логин'}
                                    onInput={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                        setLogin(e.target.value)
                                    }}
                                />
                            </div>
                            <div className={classes.input}>
                                <div>Пароль: </div>
                                <input 
                                    type={'text'} 
                                    placeholder={'Введите пароль'}
                                    onInput={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                        setPass(e.target.value)
                                    }}
                                />
                            </div>
                            <div className={classes.input}>
                                <div>Дата рожд.: </div>
                                <input 
                                    type={'text'} 
                                    placeholder={'Введите дату рождения'}
                                    onInput={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                        setDate_born(e.target.value)
                                    }}
                                />
                            </div>

                            <div className={classes.wrap_checkbox} >
                                <input 
                                    type="checkbox" 
                                    id={"privacy_policy"}
                                    onInput={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                        setCheckbox(e.target.checked)
                                    }}
                                />
                                <label htmlFor={"privacy_policy"}>Принимаю все условия всех оферт</label>
                            </div>
                            
                            <div className={classes.wrap_button}>
                                <button onClick={() => { register() }}>
                                    Зарегистрироваться
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout_empty>
        </>
    )
}
export default App