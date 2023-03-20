import React from 'react'
import Feed from '../Feed/Feed'
import Loading from '../Helper/Loading'
import style from './Home.module.css'

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Feed/>
    </section>
  )
}

export default Home