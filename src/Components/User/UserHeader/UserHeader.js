import React from 'react'
import { useLocation } from 'react-router-dom'
import UserHeaderNav from '../UserHeaderNav/UserHeaderNav'
import style from './UserHeader.module.css'

const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    setTitle(location.pathname)
    if('/conta/estatisticas' == location.pathname){
      setTitle('Estátistica')
    }else if('/conta' == location.pathname){
      setTitle('Minha Conta')
    }else if('/conta/postar' === location.pathname){
      setTitle('Poste Sua Foto')
    }
  }, [location])

  return (
    <header className={style.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav className='animeLeft' />
    </header>
  )
}

export default UserHeader