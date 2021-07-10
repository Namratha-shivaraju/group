import React, { useEffect, useState } from "react";
import "./SidebarList.css";
import SidebarChat from "./SidebarChat";

import axios from "axios";
import dayjs from "dayjs";

function SidebarList() {
  const [groups, setGroups] = useState([]);

  useEffect(async () => {
    let res = await axios.get("/getGroups", {
      params: { snapshot: dayjs(Date.now()).toISOString() },
    });
    console.log(res.data);
    setGroups([...res.data]);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Groups</h1>
      </div>
      <div className="sidebar__chats">
        {groups.map((group) => {
          return <SidebarChat group={group} />;
        })}
        <SidebarChat addNewGroup />
      </div>
    </div>
  );
}

export default SidebarList;