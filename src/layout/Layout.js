import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.css'

import rocket from "../images/rocket.svg";
import Image from "next/image";

export const Layout = ({children}) => {
  return (
    <Container>
      <Header/>
      <main style={{overflow: "hidden"}}>{children}</main> 
      <Footer/>
      <div className="rocketman">
        <Image width={"300px"} height={"300px"}src={rocket}/>
      </div>
      
      
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
