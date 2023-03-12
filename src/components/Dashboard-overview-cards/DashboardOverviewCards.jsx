import { Layout, Row , Col , Card} from 'antd'
import React from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import './Dashboard-overview-cards.css'
import {UserOutlined, DollarOutlined } from '@ant-design/icons'




const {Content} = Layout;



function DashboardOverviewCards() {



    return (
        <Layout className='main-cards-layout'>
          <Content>
            <div className='div'>
            <h4>Dashboard</h4>
          <Breadcrumbs title={'Overview'} />
          </div>
          <Row className='row'>
            <div className='internal-div'>
            <Col span ={6}>
            <Card className='card-without-margin'>
        <div className='card-div'>
          
            <span className='icon-one'>
          <UserOutlined  />
          </span>
        <p>Total</p>
        <h3>Clients</h3>
      <span className='count' >200</span>
        </div>
      </Card>
            </Col>
            <Col span ={6}>
            <Card className='card'>
        <div className='card-div'>
        <span className='icon-two'>
          <UserOutlined  />
          </span>
        <p>Total</p>
        <h3>Employees</h3>
        <span className='count' >100</span>
        </div>
      </Card>
            </Col>
            </div>
            <div className='internal-div'>
            <Col span ={6}>
            <Card className='card-without-margin'>
        <div className='card-div'>
        <span className='icon-three'>
        <DollarOutlined />
          </span>
        <p>Total</p>
        <h3>Projects</h3>
        <span className='count' >50</span>
        </div>
      </Card>
            </Col>
            <Col span ={6}>
            <Card className='card'>
        <div className='card-div'>
        <span className='icon-four'>
          <DollarOutlined />
          </span>
        <p>Total</p>
        <h3>Revenue</h3>
        <span className='count' >10,000$</span>
        </div>  
      </Card>
            </Col>
            </div>
          </Row>
          </Content>
        </Layout>
  )
}

export default DashboardOverviewCards
