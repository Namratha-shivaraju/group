import React from 'react'
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { makeStyles } from '@material-ui/core';


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
    <div className={classes.appMain}>
    <div className="app">
    
    <div className="app__body">
    <Sidebar />
    <Chat />
    </div>
  </div>
  </div>
  </>
  );
}

export default App;
