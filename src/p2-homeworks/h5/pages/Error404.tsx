import React from 'react'
import s from './Error.module.css'

function Error404() {
    return (
        <div className={s.over404}>
            <header>
                <h1 className={s.glitch} data-text="404">404</h1>
                <h2 className={s.text}>Not Found</h2>
            </header>
        </div>
    )
}

export default Error404
