import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  useLaunchMissionInfoQuery,
} from "../../generated/graphql";
interface IdProps {
  id: number;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function MissionDetails({ id }: IdProps) {
  const classes = useStyles();
  let { data, error, loading, refetch } = useLaunchMissionInfoQuery({
    variables: { id: String(id) },
  });
  React.useEffect(() => {
    refetch();
  }, [id]);
  console.log(data);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {data?.launch?.mission_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data?.launch?.details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        {data?.launch?.launch_year}
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
