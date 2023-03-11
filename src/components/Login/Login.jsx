import { Layout, Button, Form, Input } from 'antd'
import React from 'react'
import "./Login.css"

function Login() {
  return (
<Layout className="login-page">
    <Form className="form-main" layout='vertical'>
            <h1>Login</h1>
            <div className="form-container">
                <Form.Item
                    label={ <p style={{fontSize: "16px", margin: "0px"}}>Email</p>}
                    name="email"
                    >
                    <Input className="input-field"/>
                </Form.Item >
                <Form.Item
                    label={ <p style={{fontSize: "16px", margin: "0px"}}>Password</p>}
                    name="password"
                    >
                    <Input.Password className="input-field"/>
                </Form.Item>
            </div>
            <div className="button-container">
                <div className="forgot-button-container">
                    <a style={{fontSize: "12px", color: "#000000"}} type="text">Forgot your Password?</a>
                </div>
                <div className="login-button-container">
                    <Button type="primary" style={{width: "100%", fontSize: "0.875rem", backgroundColor: "#61D9AB", marginTop: "10px" ,}}>Login</Button>
                </div>
                <div className="register-button-container">
                    <div style={{fontSize: "15px", marginTop: "10px"}}>Don't have an account? <a style={{color: "#61D9AB",}} href="">Register</a> </div>
                </div>
            </div>        
            <div className="buttons-end">
                <div>
                    <Button className="end-btn" type="primary">Super Admin Login</Button>
                    <Button className="end-btn" type="primary">Company Login</Button>
                </div>
                <div>
                    <Button className="end-btn" type="primary">Client Login</Button>
                    <Button className="end-btn" type="primary">User Login</Button>
                </div>
            </div>
    </Form>
        <div className="img-container">
            <img src="https://demo.rajodiya.com/erpgo-saas/assets/images/auth/img-auth-3.svg" alt="" />
        </div>
    </Layout>
  )
}

export default Login