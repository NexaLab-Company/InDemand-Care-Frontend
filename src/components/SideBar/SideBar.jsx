import React , {useState, useEffect} from 'react'
import './SideBar.css'
import {  Menu , Layout, Row, Col  } from 'antd'
import { DollarCircleFilled, UserOutlined, HomeFilled , GoogleCircleFilled, MessageFilled} from '@ant-design/icons';
import Logo from '../../assests/Images/1 (1).png'
import NavBar from '../NavBar/NavBar';


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', 'sub1', <HomeFilled  />, 
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

function SideBar() {

  const [ deviceWidth, setDeviceWidth] = useState(window.innerWidth);



  const calculateDeviceWidth = () => {
    setDeviceWidth(window.innerWidth);
  }
  useEffect( () => {

    window.addEventListener('resize', calculateDeviceWidth);

    return () => {
      window.removeEventListener('resize', calculateDeviceWidth);
    };

  },[]);

  return (
    <Layout className='layout'>
      <Row>
        <Col span ={6} className='main'>
          <img className='img' src= {Logo} alt ='logo'></img>
        <Menu className='menus' theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Col>
        <Col span={ deviceWidth < 499 ? 24 : 18} >
      <NavBar />
        </Col>
        </Row>
        </Layout>

)}

export default SideBar
