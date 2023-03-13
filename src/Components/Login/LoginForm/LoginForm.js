import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../../Hooks/useForm'
import Button from '../../Forms/Button/Button'
import Input from '../../Forms/Input/Input'
import { UserContext } from '../../../UserContext'
import Erro from '../../Helper/Erro'
import style from './LoginForm.module.css'
import styleBtn from '../../Forms/Button/Button.module.css'

const LoginForm = () => {

  const username = useForm()
  const password = useForm()

  const {userLogin, erro, loading} = React.useContext(UserContext)

  async function handleSubmit(e){
    e.preventDefault()

    if(username.validate() && password.validate()){   
      userLogin(username.value, password.value)
    }
  }
    
    return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username}/>
        <Input label='Senha' type='password' name='password' {...password}/>
        {loading ? (<Button disabled>Carregando...</Button>):(<Button>Entrar</Button>)}
        <Erro erro={erro}/>
        
      </form>
      <Link to='/login/perdeu' className={style.perdeu}>Perdeu a senha?</Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={styleBtn.button} to='/login/criar'>Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm