import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {  useMissionInfoQuery } from "../../generated/graphql";
import {Link} from 'react-router-dom'
interface MyProps {
  handleIdChange: (newId: number) => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'black',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function MissionList({ handleIdChange }: MyProps) {
  const classes = useStyles();
  let { loading, error, data } = useMissionInfoQuery();
  if (loading) return <h1>Loading...</h1>;
  if (error || !data) return <h1>error</h1>;
  console.log(data);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

          {data.launches?.map((launchObj, ind) => {
        return (
          <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
              {launchObj?.mission_name}
            <br/>
          <Link to="/missions/flight"><button onClick={() => handleIdChange(launchObj?.flight_number!)}>Show Details</button></Link>  
            </Paper>
        </Grid>
        );
      })}
      </Grid>
    </div>
  );
}
