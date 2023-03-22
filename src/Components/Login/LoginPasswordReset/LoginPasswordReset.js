import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PASSWORD_RESET } from '../../../api/Api'
import useFetch from '../../../Hooks/useFetch'
import useForm from '../../../Hooks/useForm'
import Button from '../../Forms/Button/Button'
import Input from '../../Forms/Input/Input'
import Erro from '../../Helper/Erro'

const LoginPasswordReset = () => {

  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const password = useForm('password')
  const {error, loading, request} = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')

    if(key) setKey(key)
    if(login) setLogin(login)
  }, [])

  async function handleSubmit(e){
    e.preventDefault()
    if(password.validate){
      const {url, options} = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      
      const {response} =  await request(url, options)
      if(response.ok) navigate('/login')
    }
  }

  return (
    <div>
      <h1 className='title'>Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Nova Senha' type='password' name='password' {...password}/>
        {loading ? <Button>Resetando...</Button> : <Button>Resetar</Button>}
      </form>
      <Erro erro={error}/>
    </div>
  )
}

export default LoginPasswordReset