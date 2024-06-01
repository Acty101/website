import NavBar, { ContactLinksProps } from "./Navbar";
import { Outlet } from "react-router-dom";
import "./Base.css";

function Base({ github, email, linkedin, number }: ContactLinksProps) {
  return (
    <>
      <NavBar
        github={github}
        email={email}
        linkedin={linkedin}
        number={number}
      />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}

export default Base;
