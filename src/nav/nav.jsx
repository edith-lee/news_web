import React, { Component } from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import menuList from "../config/menuConfig";
import { Menu } from "antd";
import Index from "../view/index/index";
import "./nav.less";
import LOGOIMG from "../assets/image/logo.png";
import Article from '../article/article'
export default class MyIndex extends Component {
  renderMenu = () => {
    return menuList.map(item => {
      if (item.children) {
        return (
          <Menu.SubMenu title={item.title}>
            {item.children.map(i => {
              return (
                <Menu.Item key={i.key}>
                  <Link to={i.key}>
                    <p className="changeFile">{i.title}</p>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <p className="changeFile">{item.title}</p>
            </Link>
          </Menu.Item>
        );
      }
    });
  };
  renderRoute = () => {
    let routes = [];
    menuList.map(item => {
      if (item.key !== "/") {
        if (item.children) {
          item.children.map(i => {
            routes.push(
              <Route path={i.key} component={i.component} key={i.key} />
            );
          });
        } else {
          routes.push(<Route path={item.key} component={item.component} />);
        }
      }
    });
    return routes;
  };
  render() {
    return (
      <div className="routerWrap">
        {/* <img src={LOGOIMG} className='logoImg'></img> */}
    <div className='logoText'>{window.g.logoText}</div>
        <div className="navWrap">
          <Menu mode="horizontal">{this.renderMenu()}</Menu>
        </div>
        <div className="content">
          <Router>
            <Switch>
              {this.renderRoute()}
              <Route path="/article/:id" component={Article} />
              <Route path="/" component={Index} />
            </Switch>
          </Router>
        </div>
        <div className="footer">
          <p>Copyright © 2019-2020 Edith. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}
