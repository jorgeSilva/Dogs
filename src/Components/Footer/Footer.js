import React from 'react'
import style from './Footer.module.css'
import {ReactComponent as Dogs} from '../../assets/dogs-footer.svg'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Dogs/>
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer