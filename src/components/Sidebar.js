import React from "react";
import Icon from "components/icon";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiDownload2Line } from "react-icons/ri";
import { FiCalendar } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineQuestion } from "react-icons/ai";
import {FaRegUserCircle} from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export default () => (
  <div className="sidebar">
    <div className="sidebar--left">
      <div className="sidebar__control--top">
        <ul>
          <li><AiOutlineMenuUnfold color="#ff5858c7" size={ 30}/></li>
          <li><IoIosNotificationsOutline color="#fff" size={25}/></li>
          <li><RiDownload2Line color="#fff"  size={25}/></li>
        </ul> 
      </div>
      {/* <div className="sidebar--upgrade">upgrade</div> */}
      <div className="sidebar__control--bottom">
           <ul>
             <li> <FiCalendar color="#fff" size={25}/></li>
             <li><FiUserPlus color="#fff" size={25}/></li>
             <li><FiSearch color="#fff" size={25}/></li>
             <li> <AiOutlineQuestion color="#fff" size={25}/></li>
             <li> <FaRegUserCircle color="#fff" size={36}/></li>
             
            
             </ul>   
              
              
            
            
      </div>
    </div>
    <div className="sidebar--right">
      <div className="sidebar--edit">
        <div className="sidebar__control--text">
          <h1>Workspaces</h1>
          <input placeholder="Filter board" />
        </div>
        <div className="sidebar__control--pages">
          <h2>Main</h2>
          <ul className="sidebar__control--link">
            <li>Web Design</li>
            <li>Table</li>
          </ul>
        </div>
      </div>

      <div className="sidebar--downloadapp">
        <btn className="btn btn--white">Dash Board</btn>
      </div>
    </div>
  </div>
);
