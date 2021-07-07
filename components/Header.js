import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, makeStyles, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { borderRadius } from '@material-ui/system';
import { Transform } from 'stream';


const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor: '#233877'
    },
    searchInput :{
        opacity:'0.6',
        padding:'0px 8px',
        fontsize:'0.8rem',
        '&:hover':{
            backgroundColor: '#ffffff',
            borderRadius: '15px'
        },
        '& .MuiSvgIcon-root' :{
            marginRight: theme.spacing(1)
        }
    },
    title:{
        flexGrow: 1,
    },
    searchIcon:{
        color:'#ffffff'
    },

}) )
export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container>
                    <Grid item >
                    <Typography variant="h6" className={classes.title}>
                        IndiaConnects
                    </Typography>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <InputBase placeholder="Search" 
                        className={classes.searchInput}
                        startAdornment={<SearchIcon fontSize = "small" />}/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
