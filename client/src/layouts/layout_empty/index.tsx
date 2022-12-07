import React, { FC } from 'react'
import classes from './index.module.css'
import Message from '../../components/message'

interface IProps {
    children: React.ReactNode
}

export const Layout_empty: FC<IProps> = ({children}) => {

    return (
        <>
            <Message/>
            <div className={classes.Layout}>
                <main>
                    { children }
                </main>     
            </div>
        </>
    )
}