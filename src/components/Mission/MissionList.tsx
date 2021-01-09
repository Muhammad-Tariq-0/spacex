
import React from 'react';
import { MissionInfoQuery} from '../../generated/graphql';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
export interface MyProps {
  handleIdChange: (newId: number) => void;
}
interface Props extends MyProps {
  data: MissionInfoQuery;
}


const MissionList:React.FC<Props> = ({ data,handleIdChange }) => {

  return (
    <div className="bgmlist">
      <div className="cardsize">
        {data.launches?.map((launchObj, ind) => {
          return (
            <Card className="h" data-aos="fade-up">
              <Card.Header>{launchObj?.launch_year}</Card.Header>
              <Card.Body>
                <Card.Title>{launchObj?.mission_name}</Card.Title>
                <Card.Text>
                  {launchObj?.details}
                </Card.Text>
                <span>{launchObj?.launch_success === true ?
                  <div>
                    <h5 className="launchsucess">Mission Passed</h5>
                    <hr />
                    <Link to="/missions/flight"><Button variant="primary" onClick={() => handleIdChange(launchObj?.flight_number!)}>View Images</Button></Link>
                  </div>

                  : <div>
                    <hr />
                    <h5 className="launchfailed">Mission Failed</h5>
                  </div>
                }</span>

              </Card.Body>
            </Card>
          )
        })}

      </div>
    </div>
  );
}

export default MissionList;




