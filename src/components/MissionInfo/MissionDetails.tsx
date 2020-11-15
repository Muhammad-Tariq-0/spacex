import React from "react";
import {
  useLaunchMissionInfoQuery,
} from "../../generated/graphql";
interface IdProps {
  id: number;
}
export const MissionDetails = ({ id }: IdProps) => {
  let { data, error, loading, refetch } = useLaunchMissionInfoQuery({
    variables: { id: String(id) },
  });
  React.useEffect(() => {
    refetch();
  }, [id]);
  console.log(data);
  return (
    <div>
      <h1>MissionDetails</h1>

      <h4>{data?.launch?.mission_name}</h4>
      <h4>{data?.launch?.launch_year}</h4>
      <p>{data?.launch?.details}</p>
    </div>
  );
};
