import { Table } from 'antd';
import React from 'react'

function Orders() {
    const dataSource = [
        {
          key: '1',
          orderId: 'ORD125',
          customerName: 'Charlie',
          orderDate: '2024-03-15',
          status: 'Delivered',
        },
        {
          key: '2',
          orderId: 'ORD126',
          customerName: 'David',
          orderDate: '2024-03-16',
          status: 'Pending',
        },
        {
          key: '3',
          orderId: 'ORD127',
          customerName: 'Eva',
          orderDate: '2024-03-17',
          status: 'Shipped',
        },
        {
          key: '4',
          orderId: 'ORD128',
          customerName: 'Frank',
          orderDate: '2024-03-18',
          status: 'Processing',
        },
        {
          key: '5',
          orderId: 'ORD129',
          customerName: 'Grace',
          orderDate: '2024-03-19',
          status: 'Delivered',
        },
        {
          key: '6',
          orderId: 'ORD130',
          customerName: 'Henry',
          orderDate: '2024-03-20',
          status: 'Pending',
        },
        {
          key: '7',
          orderId: 'ORD131',
          customerName: 'Isabel',
          orderDate: '2024-03-21',
          status: 'Shipped',
        },
        {
          key: '8',
          orderId: 'ORD132',
          customerName: 'Jack',
          orderDate: '2024-03-22',
          status: 'Processing',
        },
        {
          key: '9',
          orderId: 'ORD133',
          customerName: 'Kate',
          orderDate: '2024-03-23',
          status: 'Delivered',
        },
        {
          key: '10',
          orderId: 'ORD134',
          customerName: 'Liam',
          orderDate: '2024-03-24',
          status: 'Shipped',
        },
      ];
      
      const columns = [
        {
          title: 'Order ID',
          dataIndex: 'orderId',
          key: 'orderId',
        },
        {
          title: 'Customer Name',
          dataIndex: 'customerName',
          key: 'customerName',
        },
        {
          title: 'Order Date',
          dataIndex: 'orderDate',
          key: 'orderDate',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
      ];
  return (
    <>
    <h1>Orders</h1>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </>
  )
}

export default Orders