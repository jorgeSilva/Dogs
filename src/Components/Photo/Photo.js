import React from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GET_TWO } from '../../api/Api'
import useFetch from '../../Hooks/useFetch'
import Erro from '../Helper/Erro'
import Head from '../Helper/Head'
import Loading from '../Helper/Loading'
import PhotoContent from './PhotoContent/PhotoContent'

const Photo = () => {
  const {id} = useParams()
  const {data, loading, error, request} = useFetch()

  React.useEffect(() => {
    const {url, options} = PHOTO_GET_TWO(id)
    request(url, options)
  }, [request, id])

  if(error) return <Erro erro={error}/>
  if(loading) return <Loading/>
  if(data) return <>
    <section className='container mainContainer'>
      <Head title={data.photo.title}/>
      <PhotoContent single={true} data={data}/>
    </section>
  </>
  else return null
}

export default Photo