import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { IpcNetConnectOpts } from 'net';

interface IconWordProps {
    imgUrl: string; 
    text: string; 
  }

function IconWord({imgUrl, text}: IconWordProps) {
    return (
        <>
            <img src={imgUrl} width="25" height="25" style={{ marginRight: '10px' }}/>
            {text}
        </>
    );
}

function NavBar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" fixed="top">
        <Container className="justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Navbar.Text>
                        <Nav className="me-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <NavDropdown title="Contact" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <IconWord imgUrl='./phone.png' text='(734) 450-5507'/>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <IconWord imgUrl='./gmail.svg' text='junkit@umich.edu'/>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Links" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://github.com/Acty101">
                                    <IconWord imgUrl='./github-mark-white.svg' text='GitHub'/>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://www.linkedin.com/in/junkitlim/">
                                    <IconWord imgUrl='./linkedin_icon.svg' text='LinkedIn'/>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  
}

export default NavBar;