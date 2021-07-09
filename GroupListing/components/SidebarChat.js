import React, { useState} from 'react'
import './SidebarChat.css';
import { Avatar, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PeopleIcon from '@material-ui/icons/People';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField, makeStyles, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


const useStlye = makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root ':{
            width:'98%',
            margin: theme.spacing(1)
        },
    },
    appBar: {
        position: 'relative',
        backgroundColor: '#233877',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const initialValues={
    groupName:'',
    groupDesp:'',
    groupStat:'public',
    addMem :'',
}

function SidebarChat({addNewGroup}) {

    const createGroup = () => {
        //const roomName = prompt("Enter the name of the group");
        //if(roomName) {
            //database
        //}
    };  
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
     setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [values, setValues] = useState(initialValues);
    const classes = useStlye();
    const handleInputChange = e => {
         const {name, value} = e.target
         setValues({
             ...values,
             [name]:value
         })
     }

    return !addNewGroup ?  (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>GroupNameGroupName</h2>
                <p>Description</p>
            </div>
            <div className="no_of_members">
                <PeopleIcon />
                <h6>80</h6>
            </div>
            
        </div>
    ) : (
        /* Addcircle is the create group button
        
        */ 
            <div onClick={createGroup} className="container">
                <IconButton>
                    <AddCircleIcon style={{fontSize:90 , color:"#324D9E"}} onClick={handleClickOpen} />
                </IconButton>
            
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        IndiaConnects
                    </Typography>
                </Toolbar>
                </AppBar>
                <DialogTitle id="form-dialog-title"><span style={{color: '#324D9E',fontSize: '30px'}}>Create Group</span></DialogTitle>
                <DialogContent>
                    <form className={classes.root}>
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
                        <FormControl >
                            <FormLabel><span style={{color: '#324D9E', fontSize: '20px'}}>Group Status </span></FormLabel>
                            <RadioGroup >
                                <br></br>
                                <FormControlLabel value="Private" control ={<Radio style={{color: '#324D9E'}} />} label="Private - This group can only be joined or viewed by invite" />
                                <br></br>
                                <FormControlLabel value="Public" control ={<Radio style={{color: '#324D9E'}} />} label="Public - Anybody can join or view this group" /> 
                            </RadioGroup>
                        </FormControl>
                        <TextField 
                        variant ="outlined"
                        label="Add Members"
                        name="addMem"
                        value={values.addMem}
                        onChange ={handleInputChange}
                        />
                        <DialogActions>
                            <Button variant="contained" onClick={handleClose} style={{backgroundColor: '#324D9E', color:'#ffffff'}}  disableElevation>
                                Create
                            </Button>
                        </DialogActions>    
                    </form>
                </DialogContent>
                </Dialog>
             </div>
        );
}

export default SidebarChat