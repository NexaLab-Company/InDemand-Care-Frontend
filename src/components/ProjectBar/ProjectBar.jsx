import React from 'react'
import { Pie } from '@ant-design/plots';
import Layout from 'antd/es/layout/layout';
import "./ProjectBar.css";
import "./ProjectBarMobile.css";
import { Typography } from 'antd';







const data = [

    {
        type: "Active",
        value: 60
    },

    {
        type: "On Hold",
        value: 40
    },


    {
        type: "Declined",
        value: 40
    },

];








const config = {

    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,


    label: {
        type: 'inner',

        offset: '-30%',

        content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,

        style: {
            fontSize: 14,
            textAlign: 'center',
        },

    },


    interactions: [
        {
            type: 'element-active',
        },
    ],


    theme: {
        colors10: ['#61D9AB', 'gold', 'red', '#FACC14', '#8543E0', '#13C2C2', '#3436C7', '#F04864', '#1890FF', '#faad14', '#a0d911'],
    },
};











const { Title } = Typography;
const { Text } = Typography;




function ProjectBar() {


    return (


        <Layout id='project-bar-layout'>



            <Layout id='project-bar-main-container'>



                <Layout id='project-bar-container'>



                    <Title level={3} id="project-bar-heading"

                        style=
                        {
                            {
                                marginLeft: 23,
                                textAlign: "center"
                            }
                        }


                    >
                        Project Status
                    </Title>
                    <Title level={4} id="current-year-heading">Current Year - 2023</Title>


                </Layout>






                <Pie {...config}



                />
            </Layout>

        </Layout>


    )
}

export default ProjectBar;