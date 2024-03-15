import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    key: 'dashboard',
    path: '/dashboard',
    icon: <UserOutlined />,
    label: 'Dashboard',
  },
  {
    key: 'products',
    path: '/products',
    icon: <VideoCameraOutlined />,
    label: 'Products',
  },
  {
    key: 'orders',
    path: '/orders',
    icon: <UploadOutlined />,
    label: 'Orders',
  },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['dashboard']}
          >
            {menuItems.map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
              }}
            />
          </Header>
          <Content style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
}
