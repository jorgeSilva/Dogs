import React from 'react'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head'
import Loading from '../Helper/Loading'
import style from './Home.module.css'

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title='Fotos' description='Home do site dogs, com Feed de fotos'/>
      <Feed/>
    </section>
  )
}

export default Home