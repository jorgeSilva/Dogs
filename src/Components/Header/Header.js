import React from 'react'
import { Link } from 'react-router-dom'
import style from  './Header.module.css'
import {ReactComponent as Dogs} from '../../assets/dogs.svg'
import { UserContext } from '../../UserContext'

const Header = () => {
  const {data, userLogout} = React.useContext(UserContext)

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link to="/" aria-label='Dogs - Home' className={`${style.logo}`}>
          <Dogs/>
        </Link>
        {data ? (
        <Link to="/conta" className={`${style.login}`}>
          {data.nome}
          <button onClick={userLogout}>Sair</button>
        </Link>) 
        : 
        <Link to="/login" className={`${style.login}`}>
          Login / Criar
        </Link>}
      </nav>
    </header>
  )
}

export default Header