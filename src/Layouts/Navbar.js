import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar as Nb, Container, Nav, Image, Button
} from 'react-bootstrap';
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    // <div>
    //   <ul>
    //     <Link to="/"><li>home</li></Link>
    //     <Link to="/about"><li>about</li></Link>
    //     <Link to="/feature"><li>feature</li></Link>
    //     <Link to="/team"><li>team</li></Link>
    //     <Link to="/roadmap"><li>roadmap</li></Link>
    //     <Link to="/faq"><li>faq</li></Link>
    //   </ul>      
    // </div>
    <Nb expand="lg" variant="dark">
      <Container>
        <Nb.Brand href="#">
          <Image src="logo.png" />
        </Nb.Brand>
        <Nb.Toggle aria-controls="basic-navbar-nav" />
        <Nb.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Feature">Feature</Nav.Link>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
            <Nav.Link href="#Team">Team</Nav.Link>
            <Nav.Link href="#Faq">FAQ</Nav.Link>
          </Nav>
        </Nb.Collapse>
        <Nb.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#">
              <span className="nb-icon">
                <FaLinkedinIn />
              </span>
            </Nav.Link>
            <Nav.Link href="#">
              <span className="nb-icon">
                <FaInstagram />
              </span>
            </Nav.Link>
            <Nav.Link href="#">
              <span className="nb-icon">
                <FaTwitter />
              </span>
            </Nav.Link>
            <Nav.Link href="#" className="discord-btn">
              <Button variant="warning">Join to Discord</Button>
            </Nav.Link>
          </Nav>
        </Nb.Collapse>
      </Container>
    </Nb>
  )
}
