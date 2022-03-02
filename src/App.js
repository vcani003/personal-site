import './App.css';
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Cats from './pages/Cats';

const useStyles = makeStyles({
  app: {
    textAlign: 'center',
    background: 'white',
    height: '100vh'
  },
  header: {
    height: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '500px',
    minWidth: '140px',
    // backgroundColor: 'black'
  },
  hoverUnderlineAnimation: {
    display: 'inline-block',
    position: 'relative',
    color: 'black',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      transform: 'scaleX(0)',
      height: '5px',
      bottom: '0',
      left: '0',
      backgroundColor: '#b6eca5',
      transformOrigin: 'bottom right',
      transition: 'transform 0.25s ease-out'
    },
    '&:hover': {
      cursor: 'pointer',
      '&:after': {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left'
      }

    }
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Router>
        <div >
          <header className={classes.header}>
            <div className={classes.navBar}>
              <Link to='/'><code className={classes.hoverUnderlineAnimation}>home</code></Link>
              <Link to='/about'> <code className={classes.hoverUnderlineAnimation}>about</code></Link>
              <Link to='/cats'> <code className={classes.hoverUnderlineAnimation}>cats</code></Link>
            </div>
          </header>
        </div>
        <Routes>
          <Route path="/cats" element={<Cats />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
