import React from 'react'
import { Link } from 'react-router-dom'
import PhotoComments from '../PhotoComments/PhotoComments'
import style from './PhotoContent.module.css'

const PhotoContent = ({data}) => {
  const {photo, comments} = data


  return (
    <div className={style.photo}>
      <div className={style.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={style.details}>
        <div>
          <p className={style.author}>
            <Link to={`/perfil/${photo.author}`}>
              @{photo.author}
            </Link>

            <span className={style.visualizacoes}>
              {photo.acessos}
            </span>
          </p>

          <h1 className='title'>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>

          <ul className={style.attributes}>
            <li>{photo.peso} kg</li>
            {photo.idade === 1 ? <li>{photo.idade} ano</li> : <li>{photo.idade} anos</li>}
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments}/>
    </div>
  )
}

export default PhotoContent