import React from 'react'
import { USER_POST } from '../../../api/Api'
import useFetch from '../../../Hooks/useFetch'
import useForm from '../../../Hooks/useForm'
import { UserContext } from '../../../UserContext'
import Button from '../../Forms/Button/Button'
import Input from '../../Forms/Input/Input'
import Erro from '../../Helper/Erro'
import Head from '../../Helper/Head'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const {userLogin} = React.useContext(UserContext)
  const {loading, error, request} = useFetch()

  async function handleSubmit(e){
    e.preventDefault()
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const {response} = await request(url, options)

    if(response.ok) userLogin(username.value, password.value)
    console.log(response);
  }

  return (
    <section className='animeLeft'>
      <Head title='Crie sua conta'/>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuario' type='text' name='username' {...username}/>
        <Input label='Email' type='email' name='email' {...email}/>
        <Input label='Senha' type='password' name='password' {...password}/>
        {loading ? <Button disabled>Cadastrando...</Button>:<Button>Cadastrar</Button> }
        <Erro erro={error} />
      </form>
    </section>
  )
}

export default LoginCreate