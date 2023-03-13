import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import LoginCreate from './LoginCreate/LoginCreate'
import LoginForm from './LoginForm/LoginForm'
import LoginPasswordLost from './LoginPasswordLost/LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset/LoginPasswordReset'
import style from './Login.module.css'

const Login = () => {
  const {login} = React.useContext(UserContext)

  if(login === true)return <Navigate to='/conta'/>

  return (
    <section className={style.login}>
      <div className={style.forms}>

        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='criar' element={<LoginCreate />}/>
          <Route path='perdeu' element={<LoginPasswordLost />}/>
          <Route path='resetar' element={<LoginPasswordReset />}/>
        </Routes>
      </div>
    </section>
  )
}

export default Login