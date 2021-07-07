import React from 'react'; 
import './App.css';
import SideNav from './components/SideNav';
//import SideBar from './components/SideBar';
import { makeStyles, CssBaseline, createMuiTheme } from '@material-ui/core';
import Header from './components/Header';

import Groups from './pages/Groups/Groups';


const theme = createMuiTheme({
   palette:{
     primary:{
      light: "#534bae",
      main: "#233877",
      dark: "#000051",
      contrastText: "#ffffff",
     },
     secondary:{
      light: "#ffe97d",
      main: "#2D4795",
      dark: "#ffffff",
      contrastText: "#000000",
     },
     background:{
       default: "#ffffff"
     }
   },
   overrides:{
     MuiAppBar:{
       root:{
        transform: 'translate(0)' 
       }
     }
   }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '240px',
    width: '100%'
  }
})


function App() {
  const classes=  useStyles();


  return (
    <>
    <SideNav />
    <div className={classes.appMain}>
      <Header />
      
      <Groups />
    </div>
    <CssBaseline />
    
    </>
  );
}

export default App;



