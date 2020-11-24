import React from 'react';
import {Container,Row,Image} from 'react-bootstrap'
import {
  useLaunchMissionInfoQuery,
} from "../../generated/graphql";
interface IdProps {
  id: number;
}

export default function MissionDetails({ id }: IdProps) {
  
  let { data } = useLaunchMissionInfoQuery({
    variables: { id: String(id) },
  });
  console.log(data);
  return (
    <div className="bgmlist">
      <Container>
  <Row> 
    {!!data?.launch?.links && !!data.launch.links.flickr_images && (
        <div>
           {data.launch.links.flickr_images.map(image =>
            image ? <Image  src={image} className="image" alt={"No Picture"} width={900} height={700} thumbnail/> : <h1 className="clr">No Picture Found</h1>,
          )} &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
    )}
  </Row>
</Container>
    </div>
  );
}









