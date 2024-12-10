import { Container, Row, Col } from "react-bootstrap";
import { COLALIGNMID } from "./settings";
import { RotatingIconList } from "./icons";
import "./css/general.css";

function Skills() {
  const radius = 150;
  const contentHeight = "400px"; // put in children columns so when resize, they are all same height

  const titles = ["Languages", "Frameworks", "Databases", "Technologies"];

  const languageSources = [
    "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
    "https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white",
    "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    "https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white",
    "https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white",
    "https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white",
    "https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white",
  ];

  const frameworkSources = [
    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
    "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
    "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
    "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  ];
  const dbSources = [
    "https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white",
    "https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white",
    "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
  ];
  const techSources = [
    "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white",
    "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
    "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white",
    "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
    "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
    "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white",
    "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
  ];

  const sources = [languageSources, frameworkSources, dbSources, techSources];


  

  return (
    <Container className="align-items-center justify-content-center mx-auto">
      <Row>
        <Col className={COLALIGNMID}>
          <h1>
            <u>Skills</u>
          </h1>
        </Col>
      </Row>
      <Row
        className="align-items-center justify-content-center"
        style={{ overflow: "hidden", position: "relative" }}
      >
        {titles.map((title, index) => (
          <Col
            key={index}
            md={12}
            lg={6}
            xl={5}
            className={`${COLALIGNMID} bg-dark mt-2 mb-2 mx-2`}
            style={{ minHeight: contentHeight, borderRadius: 100}}
          >
            <RotatingIconList
              title={title}
              imgSources={sources[index]}
              radius={radius}
              clockwise={index % 2 === 0}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
