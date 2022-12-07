import React, { FC, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {Dispatch} from 'redux'
import { useDispatch } from 'react-redux'
import { change_message } from '../../store/actions/message'
import { login_action } from '../../store/actions/auth'

import { Layout_empty } from '../../layouts/layout_empty'
import classes from './index.module.css'

const App: FC = () => {

    const navigate = useNavigate()
    
    const dispatch: Dispatch<any> = useDispatch()

    const [login, setLogin] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    function login_act(): void {
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
        dispatch(login_action( login, pass ))
    }

    return (
        <>
            <Layout_empty>
                <div className={classes.wrap}>
                    <div className={classes.form}> 

                        <div className={classes.register_login}>
                            <div className={classes.login}>Вход</div>
                            <div className={classes.register} onClick={() => navigate('/register')}>Регистрация</div>
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
                            <div className={classes.wrap_button}>
                                <button onClick={() => { login_act() }}>
                                    Войти
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