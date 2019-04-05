import React, { Fragment, useState } from "react";
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Sider, Content, Footer } = Layout;

function Sidebar({ props }){
    let [ collapsed, setCollapsed ] = useState(false)

    return(
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link to="/">
                    <Icon type="home" />
                    <span>Dashboard</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/relatorios">
                    <Icon type="area-chart" />
                    <span>Relatórios</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="setting" />
                <span>Configurações</span>
            </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sidebar;