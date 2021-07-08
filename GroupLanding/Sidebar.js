import React from 'react';
import "./Sidebar.css"; 
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h1>Groups</h1>
                
            </div>
            <div className="sidebar__search">
                
            <div className="searchContainer">
                <SearchOutlined />
                 <input placeholder="Search Groups" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat addNewGroup/>
            
                
                
               
            </div>

        </div>
    )
}

export default Sidebar
