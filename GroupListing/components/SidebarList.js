import React from 'react'
import "./SidebarList.css";
import SidebarChat from './SidebarChat';

function SidebarList() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h1>Groups</h1>
                
            </div>
            <div className="sidebar__chats">
                
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat addNewGroup/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default SidebarList
