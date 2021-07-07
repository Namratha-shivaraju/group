import React from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme =>({
    root:{
        backgroundColor: '#ffffff'
    },
    pageHeader:{
        padding: theme.spacing(2),
        display:'flex',
        marginBottom:theme.spacing(2),
        color:'#324D9E',
    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const{ title }=props;
    return (
        <Paper elevation={0}square className={classes.root}>
            <div className={classes.pageHeader}>
                <Typography 
                variant="h4"
                component="div">
                {title}</Typography>
            </div>
        </Paper>
    )
}
