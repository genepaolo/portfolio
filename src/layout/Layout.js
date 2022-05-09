import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.css'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
     <Script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></Script>

<Script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></Script>

<Script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></Script>
    </Container>
  )
}
