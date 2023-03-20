import React from 'react'
import { PHOTO_GET } from '../../../api/Api'
import useFetch from '../../../Hooks/useFetch'
import Erro from '../../Helper/Erro'
import Loading from '../../Helper/Loading'
import PhotoContent from './../../Photo/PhotoContent/PhotoContent'
import style from './FeedModal.module.css'

const FeedModal = ({photo, setModalPhoto}) => {
  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  function handleOutSideClick(e){
    if(e.target === e.currentTarget) setModalPhoto(null) 
  }

  return (
    <div className={style.feedModal} onClick={handleOutSideClick}>
      {error && <Erro erro={error}/>}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </div>
  )
}

export default FeedModal