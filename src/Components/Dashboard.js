import { Card, Col, Row } from 'antd'
import React from 'react'

function Dashboard() {
    const data = [
        {
            label:'Products',
            quantity:'10',
        },
        {
            label:'Orders',
            quantity:'20',
        }
    ]

  return (
    <Row gutter={16}>
    {data.map((item, index) => (
        <Col span={12} key={index}>
            <Card title={item.label} bordered={true}>
                <p>Quantity: {item.quantity}</p>
            </Card>
        </Col>
    ))}
</Row>
  )
}

export default Dashboard