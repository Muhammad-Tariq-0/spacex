import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import MissionList from './components/Mission/MissionList';
import MissionDetails from './components/MissionInfo/MissionDetails';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function Home() {
  const classes = useStyles();
  const [id, setId] = React.useState(0);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
          </Typography>
            <Link to="/"><Button color="inherit">Home</Button></Link>
            <Link to="/missions"><Button color="inherit">Missions</Button></Link>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path='/missions' element={<MissionList handleIdChange={handleIdChange}/>} />
          <Route path='/missions/flight' element={<MissionDetails id={id}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
