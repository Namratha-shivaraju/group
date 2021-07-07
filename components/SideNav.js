import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core';

const style = ({
    sideNav: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '240px',
        height: '100%',
        backgroundColor: '#2D4795'
      },
      
  });
const SideNav = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideNav}>
            
        </div>
    )
}
export default withStyles(style)(SideNav);

