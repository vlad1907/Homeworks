import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './pages/Header.module.css'

function Header() {

    return (
        <div className={s.nav}>
            <NavLink to={'/pre-junior'} className={({isActive}) => (isActive ? s.active : s.link)}>Pre-Junior</NavLink>
            <NavLink to={'/junior'} className={({isActive}) => (isActive ? s.active : s.link)}>Junior</NavLink>
            <NavLink to={'/junior-plus'} className={({isActive}) => (isActive ? s.active : s.link)}>Junior-Plus</NavLink>
            <div className={s.block}>level</div>
        </div>
    )
}

export default Header
