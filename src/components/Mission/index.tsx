import * as React from 'react';
import { useMissionInfoQuery } from '../../generated/graphql';
import MissionList, { MyProps } from './MissionList';
import unnamed from '../../space-img/unnamed.gif'

const MissionListContainer = (props: MyProps) => {
    let { loading, error, data } = useMissionInfoQuery();
    if (loading) return <img src={unnamed} className="load" width={100} height={100} alt={"no pic"} />;
    if (error || !data) return <h5 style={{ color: "white", marginTop: "30px", textAlign: "center" }}>Error in Fetching Data</h5>;
    console.log(data);

  return <MissionList data={data} {...props} />;
};

export default MissionListContainer;

