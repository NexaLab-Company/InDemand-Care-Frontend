import React, { useState } from "react";
import { Drawer, Button , Menu} from "antd";
import "./NavBar.css";
import Logo from '../../assests/Images/1 (1).png'
import {MenuOutlined,  DollarCircleFilled, UserOutlined,HomeFilled , GoogleCircleFilled, MessageFilled, MessageOutlined} from '@ant-design/icons';


const NavBar = () => {

    function getItem(label, key, icon, children) {
        return {
          key,
          icon,
          children,
          label,
        };
      }
      const items = [
        getItem('Dashboard', 'sub1', <HomeFilled />, 
        [
          getItem('Overview', '1'),
          getItem('Accounting', '2')
        ]),
        getItem('Payroll System', 'sub2', <DollarCircleFilled />),
        getItem('Employee Directory', 'sub3', <UserOutlined />),
        getItem('Job Applicants', 'sub4', <UserOutlined />),
        getItem('Google Meet', '3', <GoogleCircleFilled />),
        getItem('Messenger', '4', <MessageFilled />),
      ];

    
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar"  >
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="In-Demand Care"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        open ={visible}
      > 
      <div className="menu-div">
        <img className="img2" src= {Logo} alt ='logo'></img> 
        <Menu className="menu2" theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </div>
     </Drawer> 
     <div className="div-cards" >
     <div className="username">  
     Hi , Afshal Hassan
     </div>
     <div className="right-items">
     <MessageOutlined />
     </div>
  
     </div>
    </nav>
  );
};
export default NavBar;