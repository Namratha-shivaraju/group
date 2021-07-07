 import React, { useState, useEffect } from 'react'
import { Grid, TextField, makeStyles, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';

const useStlye = makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root ':{
            width:'80%',
            margin: theme.spacing(1)
        }

    }

}))

 const initialValues={
     groupName:'',
     groupDesp:'',
     groupStat:'public',
     addMem :'',
}
 
 export default function CreateGroup() {
     const [values, setValues] = useState(initialValues);
     const classes = useStlye();
     const handleInputChange = e => {
         const {name, value} = e.target
         setValues({
             ...values,
             [name]:value
         })
     }
    

     return (
         <form className={classes.root}>
             <Grid container>
                 <Grid item xs={8}>
                    <TextField 
                    variant ="outlined"
                    label="Group Name"
                    name="groupName"
                    value={values.groupName}
                    onChange ={handleInputChange}
                    />
                    <TextField 
                    variant ="outlined"
                    label="Description"
                    name="groupDesp"
                    value={values.groupDesp}
                    onChange ={handleInputChange}/>
                    <br></br>
                    <br></br>
                 </Grid>
                 <Grid item xs={9}>
                     <FormControl>
                         <FormLabel>Group Status </FormLabel>
                         <RadioGroup>
                             <br></br>
                             <FormControlLabel value="Private" control ={<Radio/>} label="Private - This group can only be joined or viewed by invite" />
                             <FormControlLabel value="Public" control ={<Radio/>} label="Public - Anybody can join or view this group" /> 
                         </RadioGroup>
                     </FormControl>
                 </Grid>
                 <Grid item xs={8}>
                     <br></br>
                    <TextField 
                    variant ="outlined"
                    label="Add Members"
                    name="addMem"
                    value={values.addMem}
                    onChange ={handleInputChange}
                    />
                    <br></br>
                    <br></br>
                </Grid>
                <Grid item xs ={6}>
                 <Button variant="contained" color="primary" disableElevation>
                CREATE</Button>
                </Grid>
             </Grid>
            
             
         </form>
     )
 }
 