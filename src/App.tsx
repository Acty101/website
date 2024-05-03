import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import NavBar from './navbar';

import './App.css';

// const ExampleToast: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [show, toggleShow] = useState(true);

//   return (
//     // <>
//     //   {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
//     //   <Toast show={show} onClose={() => toggleShow(false)}>
//     //     <Toast.Header>
//     //       <strong className="mr-auto">React-Bootstrap</strong>
//     //     </Toast.Header>
//     //     <Toast.Body>{children}</Toast.Body>
//     //   </Toast>
//     // </>
    
//   );
// };



function App() {
  const [img, setImg] = useState("./profile.jpg");
  return (
    <>
      <NavBar></NavBar>;
      <div className="profile-pic-container">
          {img && <img className="profile-pic" src={img} width="30" height="30" onError={(e) => {setImg("")}} style={{ marginRight: '10px' }}/>}
      </div>
      Jun Kit Lim         
    </>
  )
}
  // <Container className="p-3">
  //   <Container className="p-5 mb-4 bg-light rounded-3">
  //     <h1 className="header">Welcome To React-Bootstrap</h1>
  //     <ExampleToast>
  //       We now have Toasts
  //       <span role="img" aria-label="tada">
  //         🎉
  //       </span>
  //     </ExampleToast>
  //   </Container>
  // </Container>

export default App;
