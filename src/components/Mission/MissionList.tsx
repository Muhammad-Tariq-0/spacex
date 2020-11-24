
import React from 'react';
import {  useMissionInfoQuery } from "../../generated/graphql";
import {Link} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import unnamed from '../../space-img/unnamed.gif'
interface MyProps {
  handleIdChange: (newId: number) => void;
}

export default function MissionList({ handleIdChange }: MyProps) {
  let { loading, error, data } = useMissionInfoQuery();
  if (loading) return <img src={unnamed} className="load" width={100} height={100} alt={"no pic"}/>;
  if (error || !data) return <h1>error</h1>;
  console.log(data);
  return (
    <div className="bgmlist">
    <div className="cardsize">
      {data.launches?.map((launchObj, ind) => {
        return (
          <Card className="h">
  <Card.Header>{launchObj?.launch_year}</Card.Header>
  <Card.Body>
    <Card.Title>{launchObj?.mission_name}</Card.Title>
    <Card.Text>
      {launchObj?.details}
    </Card.Text>
       <span>{ launchObj?.launch_success === true ? 
      <div>
        <h5 className="launchsucess">Mission Passed</h5>
        <hr/>
       <Link to="/missions/flight"><Button variant="primary" onClick={() => handleIdChange(launchObj?.flight_number!)}>View Images</Button></Link>  
       </div>
       
       : <div>
         <hr/>
         <h5 className="launchfailed">Mission Failed</h5>
         </div>
         }</span>

  </Card.Body>
  </Card>
        )})}
  
    </div>
    </div>
  );
}




