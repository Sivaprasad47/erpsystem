import { Table, Button, Modal, Form, Input } from 'antd';
import React, { useState } from 'react';

function Products() {
    const [dataSource, setDataSource] = useState([
        {
            key: '1',
            customerName: 'Sunglass',
            category: 'Accessories',
            price: '499',
        },
        {
            key: '2',
            customerName: 'TShirt',
            category: 'Clothing',
            price: '649',
        },
    ]);
    
      const [isModalVisible, setIsModalVisible] = useState(false);
      const [editingKey, setEditingKey] = useState('');
    
      const [form] = Form.useForm();
    
      const handleEdit = (record) => {
        form.setFieldsValue(record);
        setEditingKey(record.key);
        setIsModalVisible(true);
      };
    
      const handleDelete = (record) => {
        setDataSource(dataSource.filter(item => item.key !== record.key));
      };
    
      const handleAdd = () => {
        form.resetFields();
        setEditingKey(''); // Clear editing key
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
      form
        .validateFields()
        .then(values => {
          if (editingKey !== '') {
            const newData = dataSource.map(item =>
              item.key === editingKey ? { ...item, ...values } : item
            );
            setDataSource(newData);
          } else {
            const newId = (dataSource.length + 1).toString();
            const newData = [...dataSource, { key: newId, ...values }];
            setDataSource(newData);
          }
          setIsModalVisible(false);
          form.resetFields();
        })
        .catch(errorInfo => {
          console.log('Failed:', errorInfo);
        });
    };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    
      const columns = [
        {
            title: 'Product Name',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>
                    <Button type="danger" style={{ marginLeft: 8 }} onClick={() => handleDelete(record)}>Delete</Button>
                </span>
            ),
        },
    ];
    
  return (
    <div>
        <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>Add Product</Button>
      <Modal title="Add/Edit Product" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical" name="addProductForm">
          <Form.Item name="orderId" label="Order ID" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="customerName" label="Product Name" rules={[{ required: true, message: 'Please enter a name' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please enter a category' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please enter the price' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  )
}

export default Products