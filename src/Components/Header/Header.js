import React from 'react'
import { Link } from 'react-router-dom'
import style from  './Header.module.css'
import {ReactComponent as Dogs} from '../../assets/dogs.svg'

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link to="/" aria-label='Dogs - Home' className={`${style.logo}`}>
          <Dogs/>
        </Link>
        <Link to="/login" className={`${style.login}`}>Login / Criar</Link>
      </nav>
    </header>
  )
}

export default Header