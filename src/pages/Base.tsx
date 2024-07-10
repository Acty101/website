import NavBar, { ContactLinksProps } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "./css/Base.css";

export const COLCLASS = "h-100 d-flex align-items-center justify-content-center";

function Base({ github, email, linkedin, number }: ContactLinksProps) {
  return (
    <div className="flex-container">
      <NavBar
        github={github}
        email={email}
        linkedin={linkedin}
        number={number}
      />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Base;
