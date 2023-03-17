import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {UserContext} from '../../../UserContext'
import {ReactComponent as MinhasFotos} from '../../../assets/feed.svg'
import {ReactComponent as Estatisticas} from '../../../assets/estatisticas.svg'
import {ReactComponent as Adicionar} from '../../../assets/adicionar.svg'
import {ReactComponent as Sair} from '../../../assets/sair.svg'
import style from './UserHeaderNav.module.css'
import useMedia from '../../../Hooks/useMedia'

const UserHeaderNav = () => {

  const {userLogout} = React.useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem')
  const [mobileMenu, setMobileMenu] = React.useState(false)                        

  const {pathname} = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
    {mobile && (
    <button aria-label='Menu' onClick={() => setMobileMenu(!mobileMenu)} className={`${style.mobileButton} ${mobileMenu && style.mobileButtonActive}`}></button>)}
    
    <nav className={`${mobile ? style.navMobile : style.nav} 
    ${mobileMenu && style.navMobileActive}`}>
      <NavLink to='/conta' end>
        <MinhasFotos/> {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to='/conta/estatisticas'>
        <Estatisticas /> {mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to='/conta/postar'>
        <Adicionar/> {mobile && 'Adicionar foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Sair/> {mobile && 'Sair'}
      </button>
    </nav>
    </>
  )
}

export default UserHeaderNav