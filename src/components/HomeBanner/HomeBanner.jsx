import { Layout, Typography, Button } from 'antd'
import React from 'react'
import { ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';
import "./HomeBanner.css"

const {Text} = Typography

function HomeBanner() {
  return (
    <Layout className='banner-main'>
        <Layout className='banner-left'>
            <Layout className='banner-left-textbox'>
                <Text id='text-1'>ERPGo SaaS</Text>
                <Text id='text-2'>All In One Business ERP With Project, Account, HRM, CRM</Text>
                <Text id='text-3'>Use these awesome forms to login or create new account in your project for free.</Text>
                <div className='button-container'>
                    <Button id='btn-1' size='large' icon={<EyeOutlined/>} >Live Demo</Button>
                    <Button id='btn-2' size='large' ghost='true' icon={<ShoppingCartOutlined/>} >Buy Now</Button>
                </div>
            </Layout>
        </Layout>
        <Layout className='banner-right-image'>
            <img src="https://demo.rajodiya.com/erpgo-saas/assets/images/auth/img-auth-3.svg" alt="" />
        </Layout>
    </Layout>
  )
}

export default HomeBanner