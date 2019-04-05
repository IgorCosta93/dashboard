import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from "./auth/PrivateRoute";
import store from './store';
import './App.css';
import 'antd/dist/antd.css';
import DashboardContainer from "./containers/Dashboard";
import ReportContainer from "./containers/Report";
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
              <PrivateRoute exact path="/relatorios" component={ReportContainer} breadcrumb="Relatórios"/>
              <Redirect to="/"/>
            </Switch>
          </BrowserRouter>
      </Provider>
    );  
  }
}

export default App;
