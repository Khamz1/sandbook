import React from 'react'
import FooterStyle from '../../styles/footer.module.scss'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className={FooterStyle.footer}>
    <Link to={'/aboutCreators'}>О нас</Link>
    <Link to={'/contactUs'}>Свяжитесь с нами </Link>
    </div>
  )
}

export default Footer