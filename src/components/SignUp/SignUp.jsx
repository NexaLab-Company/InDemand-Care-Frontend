import { Layout, Typography, Card } from 'antd';
import React from 'react'
import "./SignUp.css"
import { signUpData } from '../../ProjectData/SignUpData';
import { Link } from 'react-router-dom';
import "./SignUpMobile.css";
import "./SignUpTablet.css"





const { Title } = Typography;
const { Text } = Typography;






function SignUp() {

    return (


        <Layout id='signup-layout'>






            <Layout id='sign-up-slogans-container'>




                <Title level={1} id="sign-up-heading">SIGN UP</Title>







                <Title level={2} id="sign-up-slogan-heading" >

                    Join the community today!

                </Title>









                <Title level={5} id="sign-up-slogan">

                    We are the best Business ERP With Project, Account, HRM, CRM.


                </Title>




            </Layout>










            <Layout id='signup-cards-container'>



                {


                    signUpData.map(data => {

                        return (


                            <Link 
                            

                            key={data.id} 
                            to = {`/signup/${data.title}`}
                            >


                            <Card title={data.title} id='sign-up-cards' >
                                <p>{data.description}</p>
                            </Card>



                            </Link>


                        )


                    })


                }

            </Layout>
            


        </Layout>

    )
}

export default SignUp;