import React, { Component } from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import menuList from "../config/menuConfig";
import { Menu } from "antd";
import Index from "../view/index/index";
import "./nav.less";

export default class MyIndex extends Component {
  renderMenu = () => {
    return menuList.map(item => {
      return (
        <Menu.Item key={item.key}>
          <Link to={item.key}>
            <p className="changeFile">{item.title}</p>
          </Link>
        </Menu.Item>
      );
    });
  };
  renderRoute = () => {
    return menuList.map(item => {
      if (item.key !== "/") {
        return (
          <Route path={item.key} component={item.component} key={item.key} />
        );
      }
    });
  };
  render() {
    return (
      <div className="routerWrap">
        <div className="navWrap">
          <Menu mode="horizontal">{this.renderMenu()}</Menu>
        </div>
        <div className="content">
          <Router>
            <Switch>
                {this.renderRoute()}
                <Route path='/' component={Index}/>
            </Switch>
          </Router>
        </div>
        <div className="footer">
          <p>Copyright © 2014-2019 Edith. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}
