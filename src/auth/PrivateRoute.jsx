import React from "react";
import { Route, Redirect } from "react-router-dom";
//import Auth from "./Auth";
import NavbarContainer from "../containers/Navbar";
import SidebarContainer from "../containers/Sidebar";
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb, Menu, Icon } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

export const PrivateRoute = ({
    component: Component,
    breadcrumb: Breadcrumbs,
    breadcrumbSub: BreadcrumbSub,
    pathB: Path,
    ...rest
}) => {
    return(
        <Route
            {...rest}
            render={props => {
                return (
                    <Layout style={{ height: "100vh" }}>
                        <SidebarContainer/>
                        <Layout>
                            <NavbarContainer/>
                            <Layout style={{ padding: '0 24px 24px' }}>
                                <Breadcrumb style={{ marginTop: "20px" }}>
                                    { Path ? 
                                            <Breadcrumb.Item><span><Link to={Path}>{Breadcrumbs}</Link></span></Breadcrumb.Item>
                                        : 
                                            <Breadcrumb.Item><span>{Breadcrumbs}</span></Breadcrumb.Item>
                                    }
                                </Breadcrumb>
                                <Content style={{
                                    margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                                    }}
                                >
                                    <Component {...props}/>
                                </Content>
                            </Layout>
                            <Footer style={{ textAlign: 'center' }}>
                                Dashboard ©2019 Created by Igor Costa
                            </Footer>
                        </Layout>
                    </Layout>
                );
            }}
        />
    )
}