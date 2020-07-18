import React, { Component } from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import menuList from "../config/menuConfig";
import { Menu } from "antd";
import Index from "../view/index/index";
import "./nav.less";
import Article from '../article/article'
import LogoImg from "../assets/image/logo.png"
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
          routes.push(<Route path={item.key} component={item.component} key={item.key}/>);
        }
      }
    });
    return routes;
  };
  render() {
    return (
      <div className="routerWrap">

        <div className='headerWrap'>
          <div className='nav'>
            <div>
              <img src={LogoImg} className='logoImg'></img>
            </div>
            <div className="navWrap" style={{ display: 'flex' }}>
              <Menu mode="horizontal">{this.renderMenu()}</Menu>
              <div className='loginBtn'><a href={window.g.loginUrl} style={{ color: '#fff' }}>系统登录</a></div>
            </div>
          </div>
          <div className='logoText'>
            <p className='welcome'>WELCOME</p>
            {window.g.logoText}
          </div>
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
          <p>Copyright © 2019-2020 {window.g.copyright}</p>
        </div>
      </div>
    );
  }
}
