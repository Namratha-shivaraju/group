import React from 'react'
import './SidebarChat.css';
import { Avatar, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PeopleIcon from '@material-ui/icons/People';
function SidebarChat({addNewGroup}) {

    const createGroup = () => {
        const roomName = prompt("Enter the name of the group");
        if(roomName) {
            //database
        }
    };

    return !addNewGroup ?  (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Group Name</h2>
                <p>Description</p>
                
            </div>
            <div className="no_of_members">
                <PeopleIcon />
                <h6>80</h6>
            </div>
        </div>
    ) : (
            <div onClick={createGroup} className="container">
            <IconButton>
                <AddCircleIcon style={{fontSize:50 , color:"rgba(35, 56, 119, 0.74)"}} />
            </IconButton>
            </div>

    );
}

export default SidebarChat
