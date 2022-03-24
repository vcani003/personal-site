import './App.css';
import { makeStyles } from '@mui/styles';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

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
    "@media only screen and (max-width: 600px)": {
      justifyContent: 'center',
    }
  },
  mobileMenu: {
    "@media only screen and (min-width: 600px)": {
      display: 'none !important'
    }
  },
  // nonMobileNavItems: {
  //   "@media only screen and (max-width: 600px)": {
  //     display: 'none !important'
  //   }
  // },
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

const menuOptions = [
  'Home',
  'About',
  'Cats'
]

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Router>
        <header className={classes.header}>
          <nav className={classes.navBar}>
            <Link to='/' className={classes.nonMobileNavItems}>
              <code className={classes.hoverUnderlineAnimation}>home</code>
            </Link>
            <Link to='/about' className={classes.nonMobileNavItems}>
              <code className={classes.hoverUnderlineAnimation}>about</code>
            </Link>
            <Link to='/cats' className={classes.nonMobileNavItems}>
              <code className={classes.hoverUnderlineAnimation}>cats</code>
            </Link>
            {/* <IconButton
              className={classes.mobileMenu}
              size="large"
              edge="start"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
          </nav>
        </header>
        <Routes>
          <Route path="/personal-site" element={<Navigate replace to="/" />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
