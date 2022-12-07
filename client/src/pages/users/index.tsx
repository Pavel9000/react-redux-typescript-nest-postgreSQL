import React, { FC, useEffect, useState } from 'react'
import {Dispatch} from 'redux'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { getAll } from '../../store/actions/users'

import { Layout_empty } from '../../layouts/layout_empty'
import classes from './index.module.css'
import { change_token } from '../../store/actions/token'

const App: FC = () => {
    
    const {users} = useTypeSelector(state => state.users)
    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [])

    function logout() {
        dispatch(change_token(''))
        localStorage.token = ''
    }

    return (
        <Layout_empty>
            <div className={classes.wrap_button}>
                <button onClick={() => {logout()}}>
                    Выйти
                </button>
            </div>
            <div className={classes.wrap} >
                <div className={classes.wrap__window} >
                    <h2>Пользователи</h2>
                    <div className={classes.wrap__window__list} >
                        {
                            users.map((obj: any, i: number) => {
                                return (
                                    <div className={classes.wrap__window__list__block} key={i}>
                                        <div className={classes.wrap__window__list__block__email} >
                                            { `Email: ${obj.email}` }
                                        </div>
                                        <div className={classes.wrap__window__list__block__date} >
                                            { `Дата рожд.: ${obj.date_born}` }
                                        </div>
                                    </div>
                                )                                
                            })
                        }
                    </div>
                </div>

            </div>
        </Layout_empty>
    )
}
export default App