import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DivContainer, Li, Div2, NavLink, SocialIcons, Cloud } from './HeaderStyles';
import {Navbar, Offcanvas, Nav, Container} from 'react-bootstrap';
const Header = () =>  (
  <DivContainer>
  {['sm'].map((expand) => (
    <Navbar key={expand} expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/#">
          <span style={{ display: 'flex', alignItems: 'center', color:"white" }}>
              <Cloud />
          </span>
        </Navbar.Brand>
        
        <Navbar.Toggle style={{border: "none"}} aria-controls={`offcanvasNavbar-expand-${expand}`}>
          <i style={{color: "white", fontSize: "3rem"}}className="bi bi-list"></i>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          id="offcanvas"
          style={{ backgroundColor: '#0F1624' }}
          >
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Li>
                <Link href="#about">
                  <NavLink>About</NavLink>
                </Link>
              </Li>
              <Li>
              <Link href="#tech">
                <NavLink>Technologies</NavLink>
              </Link>
            </Li>  
            <Li>
              <Link href="#projects">
                <NavLink>Projects</NavLink>
              </Link>
            </Li> 
            <Div2>
              <SocialIcons href="https://github.com/genepaolo">
                <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://www.linkedin.com/in/gene-paolo-flores-5b3927151/">
                <AiFillLinkedin size="3rem" />
              </SocialIcons>
            </Div2>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
  </DivContainer>
    
);

export default Header;
