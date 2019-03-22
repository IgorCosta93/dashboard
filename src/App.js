import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from "./auth/PrivateRoute";
import store from './store';
import './App.css';
import 'antd/dist/antd.css';
import DashboardContainer from "./containers/Dashboard";

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content, Footer } = Layout;



class App extends Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Switch>      
              <PrivateRoute exact path="/" component={DashboardContainer} breadcrumb="Painel de Controle"/>
              <Redirect to="/"/>
            </Switch>
          </BrowserRouter>
      </Provider>
    );  
  }
}

export default App;
