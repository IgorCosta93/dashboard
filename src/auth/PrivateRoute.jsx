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
                            <Content style={{
                                margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                                }}
                            >
                                Content
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                Ant Design ©2018 Created by Ant UED
                            </Footer>
                        </Layout>
                    </Layout>
                );
            }}
        />
    )
}