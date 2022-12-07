import { FC, useState } from 'react'

import {Dispatch} from 'redux'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { change_message } from '../../store/actions/message'

import classes from './index.module.css'

const App: FC = () => {

    const {message} = useTypeSelector(state => state.message)
    const dispatch: Dispatch<any> = useDispatch()

    return (
        <>
            {
                message
                    ? <div className={classes.message_wrap}>
                        <div className={classes.message_block}>
                            <div className={classes.message_block_message}>{message}</div>
                            <div className={classes.message_block_button} onClick={()=>{ dispatch(change_message('')) }}>ok</div>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}
export default App