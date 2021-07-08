import React from 'react'
import './Chat.css';
import { Avatar } from '@material-ui/core';
function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerinfo">
                    <h3>Group name</h3>
                    <p>Description</p>
                </div>
                <div className="chat__headerRight">
                <Avatar />
                </div>
            </div>
            <div className="chat__body">
            {/* Add the chat/userfeed here */}
            </div>
        </div>
    )
}

export default Chat
