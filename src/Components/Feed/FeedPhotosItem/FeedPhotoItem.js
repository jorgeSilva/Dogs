import React from 'react'
import style from './FeedPhotosItem.module.css'
import Image from '../../Helper/Image'

const FeedPhotoItem = ({photo, setModalPhoto}) => {

  function handleClick(){
    setModalPhoto(photo)
  }

  return (
    <li className={style.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title}/>
      <span className={style.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotoItem