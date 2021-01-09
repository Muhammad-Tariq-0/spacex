import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import MissionDetails from './components/MissionInfo/MissionDetails';
import {Navbar,Nav,Button} from 'react-bootstrap'
import logo1 from './space-img/logo1.png'
import logo from './space-img/logo.png'
import ReactTypingEffect from 'react-typing-effect';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import MissionListContainer from './components/Mission';
export default function Home() {
  const [id, setId] = React.useState(0);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);
  useEffect(() => {
    AOS.init({duration:1000});
   }, [])
  return (
    <div className="main">
      <BrowserRouter> 
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" data-aos="fade-down">
  <Navbar.Brand data-aos="zoom-in">
    <img src={logo1} width={40} height={40} alt="Loading..."/>
    <img src={logo} width={100} height={40} alt="Loading..."/>  
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav >
      <Nav.Link >
        <Link to="/"><Button variant="light">Home</Button></Link>
        </Nav.Link>
      <Nav.Link >
      <Link to="/missions"><Button variant="light">Missions</Button></Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
        <MissionListContainer handleIdChange={handleIdChange}/>
        <MissionDetails id={id}/>
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


