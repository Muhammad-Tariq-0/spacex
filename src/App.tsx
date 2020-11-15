import React, { useCallback, useState } from 'react';
import './App.css';
import { MissionList } from './components/Mission/MissionList';
import { MissionDetails } from './components/MissionInfo/MissionDetails';
function App() {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);
  return (
    <div>
     <MissionList handleIdChange={handleIdChange}/>
     <MissionDetails id={id}/>
    </div>
  );
}

export default App;
