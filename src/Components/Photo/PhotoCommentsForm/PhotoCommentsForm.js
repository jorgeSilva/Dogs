import React from 'react'
import { COMMENT_POST } from '../../../api/Api'
import {ReactComponent as Enviar} from '../../../assets/enviar.svg'
import useFetch from '../../../Hooks/useFetch'
import Erro from '../../Helper/Erro'
import style from './PhotoCommentForm.module.css'

const PhotoCommentsForm = ({id, setComments}) => {
  const [comment, setComment] = React.useState('')
  const {request, error} = useFetch()

  async function handleSubmit(e){
    e.preventDefault()
    const {url, options} = COMMENT_POST(id, {comment})
    const {response, json} = await request(url, options) 

    if(response.ok){
      setComments('')
      setComments((comments) => [...comments, json]) 
    }
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <textarea 
        className={style.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment} 
        onChange={({target}) => setComment(target.value)}
      />

      <button className={style.button}>
        <Enviar/>
      </button>

      <Erro erro={error}/>
    </form>
  )
}

export default PhotoCommentsForm