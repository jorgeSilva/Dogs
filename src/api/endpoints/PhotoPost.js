import React from 'react'

const PhotoPost = () => {

  const [token, setToken] = React.useState('')
  const [nome, setNome] = React.useState('')
  const [peso, setPeso] = React.useState('')
  const [idade, setIdade] = React.useState('')
  const [img, setImg] = React.useState('')

  function handleSubmit(e){
    e.preventDefault()
    
    const formData = new FormData()
    formData.append('img', img)
    formData.append('peso', peso)
    formData.append('idade', idade)
    formData.append('nome', nome)

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer' + token
      },
      body: formData,
    }).then(r => {
      r.json()
      console.log(r);
    }).then(json => console.log(json))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text'
        placeholder='token'
        value={token}
        onChange={({target}) => setToken(target.value)} />

      <input type='text'
              placeholder='nome'
              value={nome}
              onChange={({target}) => setNome(target.value)} />

      <input type='text'
              placeholder='peso'
              value={peso}
              onChange={({target}) => setPeso(target.value)} />

      <input type='text'
              placeholder='idade'
              value={idade}
              onChange={({target}) => setIdade(target.value)} />

      <input type='file'
              onChange={({target}) => setImg(target.files[0])} />


      <button>Enviar</button>
    </form>
  )
}

export default PhotoPost