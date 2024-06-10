import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";

interface IconWordProps {
  imgUrl: string;
  text: string;
  clickHandler?: () => void;
}

interface TooltipIconWordProps extends IconWordProps {
  id: string;
  msg: string;
  hideHandler?: () => void;
}

export interface ContactLinksProps {
  github: string;
  linkedin: string;
  number: string;
  email: string;
}

function IconWord({ imgUrl, text, clickHandler }: IconWordProps) {
  return (
    <div onClick={clickHandler}>
      <img
        src={imgUrl}
        width="25"
        height="25"
        style={{ marginRight: "10px" }}
      />
      {text}
    </div>
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

function NavBar({ github, linkedin, number, email }: ContactLinksProps) {
  const COPYMSG = "Copy to clipboard?";
  const EMAILMSG = "Email me?";
  const [phoneMsg, setPhoneMsg] = useState(COPYMSG);
  const [emailMsg, setEmailMsg] = useState(EMAILMSG);
  const resetPhoneMsg = () => {
    setPhoneMsg(COPYMSG);
  };
  const resetEmailMsg = () => {
    setEmailMsg(EMAILMSG);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="dark"
      style={{ zIndex: 100 }}
    >
      <Container>
        <Navbar.Brand href="/">Jun Kit Lim</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                title="Contacts"
                id="basic-nav-dropdown"
                autoClose="outside"
              >
                <NavDropdown.Item>
                  <TooltipCopyIconWord
                    id="tooltip-anchor-phone"
                    imgUrl="./logo/phone.svg"
                    text={number}
                    clickHandler={() => {
                      navigator.clipboard.writeText(number);
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
                    text={email}
                    clickHandler={() => {
                      setEmailMsg("Let's Chat!");
                      window.location.href = `mailto:${email}`;
                    }}
                    msg={emailMsg}
                    hideHandler={resetEmailMsg}
                  />
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Links" id="basic-nav-dropdown">
                <NavDropdown.Item href={github}>
                  <IconWord
                    imgUrl="./logo/github-mark-white.svg"
                    text="GitHub"
                  />
                </NavDropdown.Item>
                <NavDropdown.Item href={linkedin}>
                  <IconWord imgUrl="./logo/linkedin_icon.svg" text="LinkedIn" />
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
