import React from 'react'
import FeedPhotoItem from '../FeedPhotosItem/FeedPhotoItem'
import useFetch from '../../../Hooks/useFetch'
import { PHOTOS_GET } from '../../../api/Api'
import Erro from '../../Helper/Erro'
import Loading from '../../Helper/Loading'
import style from './FeedPhotos.module.css'
import { Log } from 'victory'

const FeedPhotos = ({page, user, setInfinity, setModalPhoto}) => {

  const {data, loading, error, request} = useFetch()

  React.useEffect(() => {
    async function fetchPhotos(){
      const total = 6
      const {url, options} = PHOTOS_GET({page, total, user})
      const {response, json} = await request(url, options )
      
      if(response && response.ok && json.length < total){
        setInfinity(false)
      }
    }
    fetchPhotos()
  }, [request, user, page, setInfinity])

  if(error) return <Erro erro={error}/>
  if(loading) return <Loading/>
  if(data) return (  
    <ul className={`${style.feed} animeLeft`}>
      {data.map(photo => 
        <FeedPhotoItem 
        key={photo.id}
        photo={photo}
        setModalPhoto={setModalPhoto}/>
        )}
    </ul>
  )
  else return null
}

export default FeedPhotos