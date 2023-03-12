import {Layout, Table, Typography} from 'antd';
import React from 'react'
import "./LatestIncome.css"

const { Text } = Typography;

function LatestIncome() {
    const columns = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Customer',
          dataIndex: 'customer',
          key: 'customer',
        },
        {
          title: 'Amount Due',
          dataIndex: 'amountDue',
          key: 'amountDue',
        },
    ]
    const data = [
        {
          key: '1',
          date: 'Jul 12, 2022',
          customer: "Xantha Leon",
          amountDue: "$6.00",
        },
        {
          key: '2',
          date: 'Dec 1, 2021',
          customer: "Xantha Leon",
          amountDue: "$10000.00",
        },
        {
          key: '3',
          date: 'Lee Bauer',
          customer: "Dec 1, 2021",
          amountDue: "$10000.00",
        },
        {
          key: '4',
          date: 'Jul 21, 2021',
          customer: "Lee Bauer",
          amountDue: "$2000.00",
        },
        {
          key: '5',
          date: 'Jul 21, 2021',
          customer: "Ida F. Mullen",
          amountDue: "$560.00",
        },
      ];
      
  return (
    <Layout className='table-main-latest-income'>
        <Layout className='table-main-container'>
        <Layout style={{display: 'flex'}}>
            <Text id='title'>Latest Income</Text>
        </Layout>
        <Table className='table' columns={columns} dataSource={data} pagination={false}/>
        </Layout>
    </Layout>
    )
}

export default LatestIncome;