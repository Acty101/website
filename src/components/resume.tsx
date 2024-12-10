import NavBar from "./navbar";
import Footer from "./footer";

/*
RESUME:
*/
const RESUME: string = "./misc-files/Jun_Kit_Lim_Resume.pdf";

function Resume() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar />
      <div style={{ flexGrow: 1 }}>
        <iframe
          src={RESUME}
          title="My Resume"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
      <Footer />
    </div>
  );
}
export default Resume;
