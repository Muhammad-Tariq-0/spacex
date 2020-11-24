import gql from 'graphql-tag'

export const MissionInfo = gql`
query MissionInfo {
    launches{
      flight_number
      mission_name
      launch_year
      details
      launch_success
    }
  }`;
