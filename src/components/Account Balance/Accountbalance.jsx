import {Layout, Table, Typography} from 'antd';
import React from 'react'
import "./Accountbalance.css"

const { Text } = Typography;

function Accountbalance() {
    const columns = [
        {
          title: 'Bank',
          dataIndex: 'bank',
          key: 'bank',
        },
        {
          title: 'Holder Name',
          dataIndex: 'holderName',
          key: 'holderName',
        },
        {
          title: 'Balance',
          dataIndex: 'balance',
          key: 'balance',
        },
    ]
    const data = [
        {
          key: '1',
          bank: 'Round Bank',
          holderName: "Benjamin Adams",
          balance: "$-235,325.00",
        },
        {
          key: '2',
          bank: 'COBIZ BANK',
          holderName: "Chisom Latifat",
          balance: "$82,956.00",
        },
        {
          key: '3',
          bank: 'US BANK, NA',
          holderName: "Earl Hane MD",
          balance: "$99,973.00",
        },
      ];
      
  return (
    <Layout className='table-main'>
        <Layout style={{display: 'flex'}}>
            <Text id='title'>Account Details</Text>
        </Layout>
        <Table className='table' columns={columns} dataSource={data} pagination={false}/>
    </Layout>
    )
}

export default Accountbalance;