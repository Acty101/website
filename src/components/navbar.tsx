import { useState, forwardRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Tooltip } from "react-tooltip";

interface IconProps {
  imgUrl: string;
  link: string;
}

interface TooltipIconWordProps {
  id: string;
  msg: string;
  text: string;
  imgUrl: string;
  clickHandler?: () => void;
  hideHandler?: () => void;
}

function Icon({ imgUrl, link }: IconProps) {
  return (
    <span className="mx-2">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} width="30" />
      </a>
    </span>
  );
}

function TooltipCopyIconWord({
  id,
  imgUrl,
  text,
  msg,
  clickHandler,
  hideHandler,
}: TooltipIconWordProps) {
  return (
    <>
      <div data-tooltip-id={id} data-tooltip-content={msg}>
        <div onClick={clickHandler}>
          <img
            src={imgUrl}
            width="25"
            height="25"
            style={{ marginRight: "10px" }}
          />
          {text}
        </div>
      </div>
      <Tooltip id={id} afterHide={hideHandler} place="right" />
    </>
  );
}

/* 
CONTACT DETAILS:
*/
const EMAIL: string = "junkit@umich.edu";
const NUMBER: string = "(734) 450-5507";

function NavBar() {
  const COPYMSG = "Copy to clipboard?";
  const EMAILMSG = "Email me!";
  const [phoneMsg, setPhoneMsg] = useState(COPYMSG);
  const [emailMsg, setEmailMsg] = useState(EMAILMSG);
  const resetPhoneMsg = () => {
    setPhoneMsg(COPYMSG);
  };
  const resetEmailMsg = () => {
    setEmailMsg(EMAILMSG);
  };

  const iconLinks = [
    "https://www.instagram.com/jun_kit11/",
    "https://www.linkedin.com/in/junkitlim/",
    "https://github.com/Acty101",
  ];

  const iconImg = [
    "./logo/instagram.svg",
    "./logo/linkedin_icon.svg",
    "./logo/github-white.svg",
  ];

  const iconTooltipIds = [
    "tooltip-anchor-instagram",
    "tooltip-anchor-linkedin",
    "tooltip-anchor-github",
  ];

  return (
    <Navbar
      expand="md"
      className="bg-dark"
      data-bs-theme="dark"
      style={{ zIndex: 1000 }}
    >
      <Container>
        <Navbar.Brand href="/">Jun Kit Lim</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {iconTooltipIds.map((id, index) => (
            <Icon key={id} imgUrl={iconImg[index]} link={iconLinks[index]} />
          ))}
          <Navbar.Text>
            <Nav className="me-auto">
              <Nav.Link href="/#about">About</Nav.Link>
              <Nav.Link href="/#skills">Skills</Nav.Link>
              <Nav.Link href="/#experience">Experience</Nav.Link>
              <Nav.Link href="/#projects">Projects</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <NavDropdown
                title="Contacts"
                id="basic-nav-dropdown"
                autoClose="outside"
                align="end"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <NavDropdown.Item>
                  <TooltipCopyIconWord
                    id="tooltip-anchor-phone"
                    imgUrl="./logo/phone.svg"
                    text={NUMBER}
                    clickHandler={() => {
                      navigator.clipboard.writeText(NUMBER);
                      setPhoneMsg("Copied!");
                    }}
                    msg={phoneMsg}
                    hideHandler={resetPhoneMsg}
                  />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <TooltipCopyIconWord
                    id="tooltip-anchor-email"
                    imgUrl="./logo/gmail.svg"
                    text={EMAIL}
                    clickHandler={() => {
                      setEmailMsg("Let's Chat!");
                      window.location.href = `mailto:${EMAIL}`;
                    }}
                    msg={emailMsg}
                    hideHandler={resetEmailMsg}
                  />
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
