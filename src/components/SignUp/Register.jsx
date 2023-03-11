import { Button, Typography } from 'antd';
import Layout from 'antd/es/layout/layout';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import "./Register.css";
import "./RegisterMobile.css";
import "./RegisterTablet.css"




const { Title } = Typography;
const { Text } = Typography;



function Register() {








  return (


    <Layout id='register-layout'>



      <Layout id='register-main-container'>







        <Layout id='register-container'>





          <Title level={1} style={{ marginBottom: 52.5 }}>Register</Title>




          <label htmlFor="name" className='labels'>Name</label>
          <input type="text" placeholder='Your Name' name='name' className='input' />







          <label htmlFor="email" className='labels'>Email</label>
          <input type="email" placeholder='youremail@domain.com' name='email' className='input' />








          <label htmlFor="password" className='labels'>Password</label>
          <input type="password" placeholder='Password' name='password' className='input' />








          <label htmlFor="confirm-password" className='labels'>Password Confirmation</label>
          <input type="password" placeholder='Password' name='confirm-password' className='input' />







          <Button id='register-btn' type='primary'>Register</Button>








          <div


            style=
            {{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom:30,
            }}

          >

            <Text id='already-have-an-account'>Already have an account?</Text>
            <Link id='already-have-an-account-login'>Login</Link>
          </div>





        </Layout>












        <Layout id='register-img-container'>





          <div >






            <img src="https://demo.rajodiya.com/erpgo-saas/assets/images/auth/img-auth-3.svg"

              alt=""

            />







            <Title level={4} id="register-img-container-heading">
              Empower your enterprise with the best ERP solution.
            </Title>








            <Text id='register-img-container-text'>
              Revolutionize your business with the best cloud-based ERP
            </Text>




          </div>






        </Layout>







      </Layout>


    </Layout>

  )
}

export default Register;