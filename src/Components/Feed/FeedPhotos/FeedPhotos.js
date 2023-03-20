import React from 'react'
import FeedPhotoItem from '../FeedPhotosItem/FeedPhotoItem'
import useFetch from '../../../Hooks/useFetch'
import { PHOTOS_GET } from '../../../api/Api'
import Erro from '../../Helper/Erro'
import Loading from '../../Helper/Loading'
import style from './FeedPhotos.module.css'

const FeedPhotos = ({setModalPhoto}) => {

  const {data, loading, error, request} = useFetch()

  React.useEffect(() => {
    async function fetchPhotos(){
      const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0})
      const {response, json} = await request(url, options ) 
    }
    fetchPhotos()
  }, [request])

  if(error) return <Erro erro={error}/>
  if(loading) return <Loading/>
  if(data){
    return (
      <ul className={`${style.feed} animeLeft`}>
        {data.map(photo => 
          <FeedPhotoItem 
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}/>
        )}
      </ul>
    )
  }else return null
}

export default FeedPhotos