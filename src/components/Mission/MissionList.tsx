import React from "react";
import {  useMissionInfoQuery } from "../../generated/graphql";
interface MyProps {
  handleIdChange: (newId: number) => void;
}

export const MissionList = ({ handleIdChange }: MyProps) => {
  let { loading, error, data } = useMissionInfoQuery();
  if (loading) return <h1>Loading...</h1>;
  if (error || !data) return <h1>error</h1>;
  console.log(data);

  return (
    <div >
      <h1>Mission List</h1>
      {data.launches?.map((launchObj, ind) => {
        return (
          <ul>
            <li onClick={() => handleIdChange(launchObj?.flight_number!)}>
              {launchObj?.mission_name}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
