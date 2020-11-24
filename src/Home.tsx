import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import MissionList from './components/Mission/MissionList';
import MissionDetails from './components/MissionInfo/MissionDetails';
import {Navbar,Nav} from 'react-bootstrap'
import logo1 from './space-img/logo1.png'
import logo from './space-img/logo.png'
import ReactTypingEffect from 'react-typing-effect';

export default function Home() {
  const [id, setId] = React.useState(0);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div className="main">
      <BrowserRouter> 
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand>
    <img src={logo1} width={30} height={30} alt="Loading..."/>
    <img src={logo} width={100} height={30} alt="Loading..."/>  
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav >
      <Nav.Link >
        <Link to="/">Home</Link>
        </Nav.Link>
      <Nav.Link >
      <Link to="/missions">Missions</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <Routes>
          <Route path='/missions' element={<MissionList handleIdChange={handleIdChange}/>} />
          <Route path='/missions/flight' element={<MissionDetails id={id}/>} />
        </Routes>
      </BrowserRouter>
      <div className="txt">
<h5 className="clr">
  <ReactTypingEffect
  text="“SpaceX is in the process of creating the greatest environmental catastrophe I have ever witnessed.”"
  />
  </h5>
</div>
    </div>
  );
}


