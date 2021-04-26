import React from 'react';
import { LogoutOutlined, NodeCollapseOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;


const AppSideBar = (props: any) => {
    
    // state = {
    //     collapsed: false,
    //   };
    
    //   toggle = () => {
    //     this.setState({
    //       collapsed: !this.state.collapsed,
    //     });
    //   };
    return(
        <Sider trigger={null} collapsible 
            breakpoint="lg"
            collapsedWidth="80"
            onBreakpoint={broken => {
                console.log(broken)
            }}
            onCollapse={(collapsed, type)=>{
                console.log(collapsed, type)
            }}
            >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
    )
}

export default AppSideBar;