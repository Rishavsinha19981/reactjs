import { LineStyle, Timeline, TrendingUp,PersonOutline ,CardGiftcard,AccountBalanceWallet,BarChart,MailOutline,InsertComment,CallToAction,NextWeek,Report

} from "@material-ui/icons";
import { Link } from "react-router-dom";
import React from "react";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Dashboard</h3>
          <ul className="sidebarlist">
            <Link to="/" className="link">
              <li className="sidebarlistItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            
            <li className="sidebarlistItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarlistItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Quick Menu</h3>
          <ul className="sidebarlist">

          <Link to="/users " className="link"  >

            <li className="sidebarlistItem ">
              <PersonOutline className="sidebarIcon" />
              Users
            </li>
          
          
          </Link>

          <Link to="/products" className="link">
           
            <li className="sidebarlistItem">
              <CardGiftcard className="sidebarIcon" />
              Products
            
            </li>
            
          </Link>
            
           
            <li className="sidebarlistItem">
              <AccountBalanceWallet className="sidebarIcon" />
               Transactions
            </li>
            <li className="sidebarlistItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Notifications</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistItem ">
              <MailOutline className="sidebarIcon" />
              Mails
            </li>
            <li className="sidebarlistItem">
              <InsertComment className="sidebarIcon" />
              Feedback
            </li>
            <li  className="sidebarlistItem">
              <CallToAction className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Staff</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistItem ">
              <NextWeek className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarlistItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarlistItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};
