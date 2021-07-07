import React from 'react'
import CreateGroup from './CreateGroup'
import PageHeader from '../../components/PageHeader' ;
import { Paper, makeStyles } from '@material-ui/core';


const useStyle = makeStyles(theme =>({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }

}))

export default function Groups() {
    const classes = useStyle();

    return (
        <>
        <PageHeader 
        title="Create Group"
        />
        <Paper className={classes.pageContent}>
        <CreateGroup />
        </Paper>
        
        </>
    )
}
